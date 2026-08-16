import React, { useState } from 'react'; // Added useState
import { Download, FileText, BookOpen, ArrowLeft, Search, AlertTriangle } from 'lucide-react'; // Added Search and Alert icons
import { useNavigate } from 'react-router-dom';
import './DownloadPage.css';

const resources = [
  {
    id: 1,
    title: "Soft Skills: The Ultimate Guide",
    type: "Book",
    fileName: "Soft-Skills.pdf",
    description: "A foundation-building guide covering the essential personality traits needed for modern workplace success."
  },
  {
    id: 2,
    title: "The STAR Interview Strategy",
    type: "Article",
    fileName: "STAR_Method_Interviews.pdf",
    description: "Master the 'Situation, Task, Action, Result' framework to answer behavioral questions like a pro."
  },
  {
    id: 3,
    title: "EQ vs IQ: Emotional Intelligence",
    type: "Book",
    fileName: "Emotional Intelligence Why it Can Matter More Than IQ (Daniel Goleman) (z-lib.org).pdf",
    description: "Learn why managing your emotions and understanding others is the key to leadership and teamwork."
  },
  {
    id: 4,
    title: "The Art of Active Listening",
    type: "Article",
    fileName: "LISTENING SKILLS-8297.pdf",
    description: "Communication is 50% listening. Discover how to truly hear and understand your peers and interviewers."
  },
  {
    id: 5,
    title: "Strategic Professional Speaking",
    type: "Article",
    fileName: "Role of Communication and Listening in Leadership.pdf",
    description: "A deep dive into verbal and non-verbal communication strategies for high-stakes environments."
  },
  {
    id: 6,
    title: "STAR Method: Quick Cheat Sheet",
    type: "Sheet",
    fileName: "STARMethodCheatSheet.pdf",
    description: "A one-page reference guide perfect for a last-minute review before your big interview."
  },
  {
    id: 7,
    title: "Cracking Behavioral Interviews",
    type: "Guide",
    fileName: "behavioral-interview-guide.pdf",
    description: "Specific examples and deep insights into what recruiters are actually looking for in your answers."
  },
  {
    id: 8, // Fixed duplicate ID from 3 to 8
    title: "Mastering the STAR Method for Job Interviews",
    type: "Book",
    fileName: "STAR_Method_for_job_interviews.pdf",
    description: "This careers guidance book is a comprehensive manual designed to help job seekers structure their responses to behavioral interview questions."
  }
];

function DownloadPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState(""); // Search state

  // Filtering Logic
  const filteredResources = resources.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.type.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const PROJECT_ID = supabaseUrl.split('//')[1].split('.')[0];
  const BUCKET_NAME = "resources";
  
  const getPublicUrl = (fileName) => 
    `https://${PROJECT_ID}.supabase.co/storage/v1/object/public/${BUCKET_NAME}/${fileName}`;

  return (
    <div className="download-container">
      <button className="back-btn-down" onClick={() => navigate(-1)}>
        ← Go Back
      </button>

      <div className="download-header">
        <h1>Soft Skill Resources</h1>
        <p>Enhance your career with our curated collection of professional development guides.</p>

        {/* --- Search Bar Implementation --- */}
        <div className="search-container">
          <div className="search-input-wrapper">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Search by title, category, or keyword..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="resource-search-bar"
            />
          </div>
        </div>
      </div>

      <div className="resource-grid">
        {filteredResources.length > 0 ? (
          filteredResources.map((item) => (
            <div key={item.id} className="resource-card">
              <div className="card-frame">
                <div className="icon-box">
                  {item.type === "Book" ? <BookOpen size={32} /> : <FileText size={32} />}
                </div>
                
                <span className="badge">{item.type}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                
                <a 
                  href={getPublicUrl(item.fileName)} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  download 
                  className="download-link"
                >
                  <Download size={18} /> Download Now
                </a>
              </div>
            </div>
          ))
        ) : (
          /* --- No Results Implementation --- */
          <div className="no-results-found">
            <AlertTriangle size={48} color="#0c55ca" />
            <h3>No matching resources</h3>
            <p>We couldn't find anything matching "<strong>{searchTerm}</strong>". Try a different keyword.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default DownloadPage;