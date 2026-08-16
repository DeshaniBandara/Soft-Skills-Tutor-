import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, XCircle } from 'lucide-react';
import { mcqData } from '../../data/mcqDataLeadership'; 
import './QuizComponent.css'; 

function QuizLeadershipComponent() {
  const navigate = useNavigate();
  const questions = mcqData["leadership-skills"]; 
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentIndex];

  const handleAnswer = (selectedOption) => {
    const correct = selectedOption === currentQuestion.correct;
    setIsCorrect(correct);
    if (correct) setScore(score + 1);
    setShowPopup(true);
  };

  const handleNext = () => {
    setShowPopup(false);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      alert(`Leadership Practice Complete! Score: ${score}/${questions.length}`);
      navigate('/dashboard');
    }
  };

  return (
    <div className="quiz-view-container">
      <header className="quiz-header-blue" style={{ padding: '30px 20px' }}>
        <button onClick={() => navigate(-1)} className="quiz-back-btn">
          <ArrowLeft size={18} /> Back
        </button>
        <div className="quiz-header-text">
          <h1>Leadership Practice</h1>
          <p>Question {currentIndex + 1} of {questions.length}</p>
        </div>
      </header>

      <main className="quiz-content">
        <div className="question-box">
          <h2>{currentQuestion.question}</h2>
          <div className="options-container">
            {currentQuestion.options.map((option, idx) => (
              <button key={idx} className="option-card" onClick={() => handleAnswer(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      </main>

      {showPopup && (
        <div className="quiz-modal-overlay">
          <div className={`quiz-modal-card ${isCorrect ? 'success' : 'wrong'}`}>
            {isCorrect ? (
              <><CheckCircle size={60} color="#22c55e" /><h2>Leader Choice!</h2><p>That is correct.</p></>
            ) : (
              <><XCircle size={60} color="#ef4444" /><h2>Try Again!</h2><p>Correct answer: <strong>{currentQuestion.correct}</strong></p></>
            )}
            <button className="quiz-next-btn" onClick={handleNext}>Next</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default QuizLeadershipComponent;