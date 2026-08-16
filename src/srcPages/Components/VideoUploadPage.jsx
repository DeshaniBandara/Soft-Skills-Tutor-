import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import { Upload, Loader2, CheckCircle, FileVideo, AlertTriangle, ArrowLeft } from 'lucide-react'; // Added ArrowLeft
import { useNavigate } from 'react-router-dom'; // Added useNavigate
// 1. Ensure this points to your new AssemblyAI helper
import { getSpeechAnalysis } from '../../utils/assemblyAnalysis'; 
import './VideoUploadPage.css';

function VideoUploadPage() {
  const navigate = useNavigate(); // Initialize navigation
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [status, setStatus] = useState("");
  const [error, setError] = useState(null);

  // Auto-cleanup stale files (Your existing logic)
  useEffect(() => {
    const runAutoCleanup = async () => {
      try {
        const { data: files, error: listError } = await supabase.storage.from('user-interviews').list();
        if (listError || !files || files.length === 0) return;
        const thirtyMinsAgo = new Date(Date.now() - 30 * 60 * 1000);
        const filesToDelete = files.filter(f => new Date(f.created_at) < thirtyMinsAgo).map(f => f.name);
        if (filesToDelete.length > 0) {
          await supabase.storage.from('user-interviews').remove(filesToDelete);
        }
      } catch (err) { console.error("Cleanup Error:", err.message); }
    };
    runAutoCleanup();
  }, []);
    
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.size > 100 * 1024 * 1024) { 
      return alert("File is too large. Keep it under 100MB.");
    }
    setFile(selectedFile);
    setError(null);
  };

  const handleUpload = async () => {
    if (!file) return setError("Please select a video file first.");
    
    setLoading(true);
    setError(null);
    setFeedback(null);
    setStatus("Uploading video...");

    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;

    try {
      // 1. Upload to Supabase
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('user-interviews')
        .upload(fileName, file);

      if (uploadError) throw new Error(`Upload Failed: ${uploadError.message}`);

      // 2. Get Public URL
      const { data: { publicUrl } } = supabase.storage
        .from('user-interviews')
        .getPublicUrl(fileName);

      setStatus("AI is listening to your speech... (30-60s)");

      // 3. CHANGE: Call getSpeechAnalysis instead of getAIFeedback
      const aiResponse = await getSpeechAnalysis(publicUrl);
      
      if (!aiResponse) {
        throw new Error("AI analysis returned no data.");
      }

      setFeedback({
        confidence: aiResponse.confidence,
        language: aiResponse.language,
        suggestion: aiResponse.suggestion
      });

    } catch (err) {
      console.error("Process Error:", err);
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
      setStatus("");
    }
  };

  return (
    <div className="upload-container">
      {/* Back Button Added Here */}
      <button className="back-btn" onClick={() => navigate(-1)}>
         ← Go Back
      </button>

      <div className="header-section">
        <h2>AI Interview Coach</h2>
        <p>Using <strong>AssemblyAI Speech Intelligence</strong> for soft-skill feedback.</p>
      </div>
      
      <div className={`upload-box ${file ? 'file-selected' : ''}`}>
        <label htmlFor="video-upload" className="custom-file-upload">
          {file ? (
            <div className="file-info">
              <FileVideo size={30} color="#3b82f6" />
              <span>{file.name}</span>
            </div>
          ) : (
            <div className="upload-placeholder">
              <Upload size={40} />
              <p>Click to select video</p>
            </div>
          )}
        </label>
        <input 
          id="video-upload"
          type="file" 
          accept="video/*" 
          onChange={handleFileChange}
          disabled={loading}
        />
        
        {error && (
          <div className="error-message">
            <AlertTriangle size={18} />
            <p>{error}</p>
          </div>
        )}

        <button className="analyze-btn" onClick={handleUpload} disabled={loading || !file}>
          {loading ? (
            <><Loader2 className="animate-spin" /> {status}</>
          ) : (
            "Start AI Analysis"
          )}
        </button>
      </div>

      {feedback && (
        <div className="feedback-overlay">
          <div className="feedback-popup">
            <CheckCircle color="#22c55e" size={60} />
            <h3>Analysis Complete</h3>
            <div className="result-card">
              <div className="metric">
                <span className="label">Tone & Confidence:</span>
                <span className="value">{feedback.confidence}</span>
              </div>
              <div className="metric">
                <span className="label">Speech Pace:</span>
                <span className="value">{feedback.language}</span>
              </div>
              <div className="ai-tip">
                <strong>Personalized Advice:</strong>
                <p>{feedback.suggestion}</p>
              </div>
            </div>
            <button className="close-btn" onClick={() => setFeedback(null)}>Try Another</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default VideoUploadPage;