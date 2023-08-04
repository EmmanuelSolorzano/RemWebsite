import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import './Card.css';

const Card = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      {/* Front of the card */}
      <div className="card" onClick={handleCardClick}>
        {frontContent}
      </div>

      {/* Back of the card */}
      <div className="card" onClick={handleCardClick}>
        {backContent}
      </div>
    </ReactCardFlip>
  );
};

export default Card;