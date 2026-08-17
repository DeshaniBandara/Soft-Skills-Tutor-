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

    const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
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
            const model = genAI.getGenerativeModel({ 
                model: "gemini-3-flash-preview",
                systemInstruction: "You are the AI Assistant for SoftSkills Tutor. Mission: Make soft skills engaging. Vision: Global learning space for children. Values: Growth, Confidence, Creativity, Safety, Support. Help users with communication, leadership, and teamwork." // Integrated from
            });

            const result = await model.generateContent(input);
            const response = await result.response;
            setMessages(prev => [...prev, { role: 'bot', text: response.text() }]);
        } catch (error) {
            setMessages(prev => [...prev, { role: 'bot', text: "Sorry, I'm having trouble connecting." }]);
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