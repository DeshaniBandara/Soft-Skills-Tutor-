import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, XCircle } from 'lucide-react';
import { mcqData } from '../../data/mcqDataCommunication'; 
import './QuizComponent.css'; 

function QuizCommunicationComponent() {
  const navigate = useNavigate();
  const questions = mcqData["communication-skills"]; // Access the 30 questions
  
  // State Management
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentIndex];

  const handleAnswer = (selectedOption) => {
    const correct = selectedOption === currentQuestion.correct;
    setIsCorrect(correct);
    if (correct) setScore(score + 1);
    setShowPopup(true); // Trigger the feedback popup
  };

  const handleNext = () => {
    setShowPopup(false);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      
      // End of quiz logic
      alert(`Quiz Finished! Your score: ${score}/${questions.length}`);
      navigate('/dashboard');
    }
  };
  

  return (
    <div className="quiz-view-container">
      <header className="quiz-header-blue">
        <button onClick={() => navigate(-1)} className="quiz-back-btn">
          <ArrowLeft size={18} /> Back
        </button>
        <div className="quiz-header-text">
          <h1>Communication Practice</h1>
          <p>Question {currentIndex + 1} of {questions.length}</p>
        </div>
      </header>

      <main className="quiz-content">
        <div className="question-box">
          <h2>{currentQuestion.question}</h2>
          <div className="options-container">
            {currentQuestion.options.map((option, idx) => (
              <button 
                key={idx} 
                className="option-card"
                onClick={() => handleAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </main>

      {/* FEEDBACK POPUP */}
      {showPopup && (
        <div className="quiz-modal-overlay">
          <div className={`quiz-modal-card ${isCorrect ? 'success' : 'wrong'}`}>
            {isCorrect ? (
              <>
                <CheckCircle size={60} color="#22c55e" />
                <h2>Congratulations!</h2>
                <p>That is the correct answer.</p>
              </>
            ) : (
              <>
                <XCircle size={60} color="#ef4444" />
                <h2>Not Correct!</h2>
                <p>The correct answer is: <strong>{currentQuestion.correct}</strong></p>
              </>
            )}
            <button className="quiz-next-btn" onClick={handleNext}>
              {currentIndex === questions.length - 1 ? "View Results" : "Next Question"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default QuizCommunicationComponent;