import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyDj12dj84H2sUjMDQQCphUtVzcFFyBHyXA");

export const getAIFeedback = async (videoUrl) => {
  try {
    // 1. Fetch the video from Supabase
    const response = await fetch(videoUrl);
    if (!response.ok) throw new Error("Video not ready. Try again in a second.");
    const blob = await response.blob();

    // 2. Convert to Base64
    const base64Video = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(',')[1]);
      reader.readAsDataURL(blob);
    });

    // 3. The "Stable" Model Config
    // We use gemini-1.5-flash because it's built for video
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
      Act as an expert interview coach. Analyze this video and return ONLY a JSON object:
      {
        "confidence": "Score out of 10 and why",
        "language": "Feedback on clarity and tone",
        "suggestion": "One actionable tip"
      }
    `;

    // 4. Send to Google
    const result = await model.generateContent([
      {
        inlineData: {
          data: base64Video,
          mimeType: "video/mp4"
        }
      },
      prompt
    ]);

    const text = await result.response.text();
    
    // 5. Extract JSON (Sometimes AI adds extra text, this cleans it)
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error("AI response was not valid JSON");
    
    return JSON.parse(jsonMatch[0]);

  } catch (error) {
    console.error("AI Analysis Error:", error);
    throw error;
  }
};