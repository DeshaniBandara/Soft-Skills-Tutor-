import { AssemblyAI } from 'assemblyai';

// ✅ Check if API key exists
const apiKey = import.meta.env.VITE_ASSEMBLY_AI_KEY;
if (!apiKey) {
  console.warn("⚠️ VITE_ASSEMBLY_AI_KEY is missing in .env file");
}

const client = new AssemblyAI({
  apiKey: apiKey || 'dummy-key' // Fallback to prevent crash
});

export const getSpeechAnalysis = async (videoUrl) => {
  try {
    // Check if API key is available
    if (!apiKey) {
      throw new Error("AssemblyAI API key is not configured. Please add VITE_ASSEMBLY_AI_KEY to your .env file.");
    }

    // 1. Submit the video URL for transcription
    const transcript = await client.transcripts.transcribe({
      audio: videoUrl,
      sentiment_analysis: true,
      speaker_labels: true,
    });

    // 2. Error handling if the transcription fails
    if (transcript.status === 'error') {
      throw new Error(`AssemblyAI Error: ${transcript.error}`);
    }

    // --- ANALYTICS LOGIC ---

    // A. Calculate Confidence Score based on Sentiment
    const totalSentiments = transcript.sentiment_analysis_results?.length || 0;
    const positiveSentiments = transcript.sentiment_analysis_results?.filter(
      (s) => s.sentiment === 'POSITIVE' || s.sentiment === 'NEUTRAL'
    ).length || 0;
    
    const confidenceScore = totalSentiments > 0 
      ? Math.round((positiveSentiments / totalSentiments) * 10) 
      : 5;

    // B. Calculate Speech Pace (Words Per Minute)
    const minutes = transcript.audio_duration / 60;
    const wpm = Math.round(transcript.words?.length / minutes) || 0;

    let paceFeedback = "";
    if (wpm < 110) paceFeedback = "a bit slow. Try to speak with more energy.";
    else if (wpm > 160) paceFeedback = "very fast. Slow down and breathe between sentences.";
    else paceFeedback = "at a perfect professional pace.";

    // C. Detect Filler Words
    const text = transcript.text?.toLowerCase() || "";
    const fillerCount = (text.match(/um|uh|err|like/g) || []).length;

    // 3. Return the formatted object
    return {
      confidence: `${confidenceScore}/10`,
      language: `${wpm} WPM. Your speaking rate is ${paceFeedback}`,
      suggestion: fillerCount > 3 
        ? `You used filler words (um, uh) about ${fillerCount} times. Try pausing silently instead of saying 'um'.`
        : "Excellent clarity! You avoided filler words and stayed on message."
    };

  } catch (error) {
    console.error("Analysis Logic Error:", error);
    // Return a fallback response instead of throwing
    return {
      confidence: "5/10",
      language: "Unable to analyze speech pace.",
      suggestion: "Please ensure your video has clear audio and try again."
    };
  }
};