import React, { useState } from 'react';
import './InteractiveCard.css';

const InteractiveCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };
  
  return (
    <div className="card">
      <div 
        className={`card__inner ${isFlipped ? 'card__inner--flipped' : ''}`} 
        onClick={handleCardClick}
      >
        <div className="card__face card__face--front">
          <div className="card__content">
            <div className="card__image">
              <svg className="card__icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h2 className="card__title">React Interactive Card</h2>
            <p className="card__text">Click me to see what's on the other side!</p>
          </div>
        </div>
        <div className="card__face card__face--back">
          <div className="card__content">
            <div className="card__image">
              <svg className="card__icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h2 className="card__title">It Works!</h2>
            <p className="card__text">This is an Astro island using React. Click again to flip back.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveCard;