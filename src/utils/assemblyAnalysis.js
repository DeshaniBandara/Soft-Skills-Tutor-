import { AssemblyAI } from 'assemblyai';

// This uses the key from your .env file
const client = new AssemblyAI({
  apiKey: import.meta.env.VITE_ASSEMBLY_AI_KEY 
});

export const getSpeechAnalysis = async (videoUrl) => {
  try {
    // 1. Submit the video URL for transcription and sentiment analysis
    const transcript = await client.transcripts.transcribe({
      audio: videoUrl,
      sentiment_analysis: true,
      speaker_labels: true,
    });

    // 2. Error handling if the transcription fails
    if (transcript.status === 'error') {
      throw new Error(`AssemblyAI Error: ${transcript.error}`);
    }

    // --- ANALYTICS LOGIC FOR YOUR PROJECT ---

    // A. Calculate Confidence Score based on Sentiment
    const totalSentiments = transcript.sentiment_analysis_results.length;
    const positiveSentiments = transcript.sentiment_analysis_results.filter(
      (s) => s.sentiment === 'POSITIVE' || s.sentiment === 'NEUTRAL'
    ).length;
    
    // Normalize score out of 10
    const confidenceScore = totalSentiments > 0 
      ? Math.round((positiveSentiments / totalSentiments) * 10) 
      : 5;

    // B. Calculate Speech Pace (Words Per Minute)
    // duration is in seconds, so we convert to minutes
    const minutes = transcript.audio_duration / 60;
    const wpm = Math.round(transcript.words.length / minutes);

    let paceFeedback = "";
    if (wpm < 110) paceFeedback = "a bit slow. Try to speak with more energy.";
    else if (wpm > 160) paceFeedback = "very fast. Slow down and breathe between sentences.";
    else paceFeedback = "at a perfect professional pace.";

    // C. Detect Filler Words
    const text = transcript.text.toLowerCase();
    const fillerCount = (text.match(/um|uh|err|like/g) || []).length;

    // 3. Return the formatted object to your Frontend
    return {
      confidence: `${confidenceScore}/10`,
      language: `${wpm} WPM. Your speaking rate is ${paceFeedback}`,
      suggestion: fillerCount > 3 
        ? `You used filler words (um, uh) about ${fillerCount} times. Try pausing silently instead of saying 'um'.`
        : "Excellent clarity! You avoided filler words and stayed on message."
    };

  } catch (error) {
    console.error("Analysis Logic Error:", error);
    throw new Error("The AI could not process the audio. Ensure your video has clear sound.");
  }
};