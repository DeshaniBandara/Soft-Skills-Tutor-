import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import './ChatBot.css';

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        { role: 'bot', text: 'Hi! I am your SoftSkills Tutor AI. How can I help you today?' }
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef(null);

    // Get API key from .env (with a fallback for local testing)
    const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "AIzaSyDj12dj84H2sUjMDQQCphUtVzcFFyBHyXA";
    const genAI = new GoogleGenerativeAI(API_KEY);

    useEffect(() => {
        if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMsg = { role: 'user', text: input };
        setMessages(prev => [...prev, userMsg]);
        setInput("");
        setIsTyping(true);

        try {
            // Correct model name (gemini-1.5-flash is widely available)
            const model = genAI.getGenerativeModel({ 
                model: "gemini-1.5-flash",
                systemInstruction: "You are the AI Assistant for SoftSkills Tutor. Mission: Make soft skills engaging. Vision: Global learning space for children. Values: Growth, Confidence, Creativity, Safety, Support. Help users with communication, leadership, and teamwork."
            });

            const result = await model.generateContent(input);
            const response = await result.response;
            setMessages(prev => [...prev, { role: 'bot', text: response.text() }]);
        } catch (error) {
            console.error("Gemini API Error:", error);
            // Better error message for users
            setMessages(prev => [...prev, { 
                role: 'bot', 
                text: "⚠️ I'm having trouble connecting. Please check your API key or try again later." 
            }]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <>
            <div className="chatbot-launcher" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "✖" : "💬"}
            </div>

            {isOpen && (
                <div className="chatbot-container">
                    <div className="chat-header">
                        <span>SoftSkills Tutor AI</span>
                    </div>
                    <div className="chat-messages" ref={scrollRef}>
                        {messages.map((m, i) => (
                            <div key={i} className={`msg ${m.role}`}>{m.text}</div>
                        ))}
                        {isTyping && <div className="msg bot">...</div>}
                    </div>
                    <div className="chat-input">
                        <input 
                            value={input} 
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Ask me anything..."
                        />
                        <button onClick={handleSend}>Send</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ChatBot;