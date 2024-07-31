import React, { useState } from "react";
import "./WordCard.css";

function WordCard({ front, back, deleteWord }) {
  const [isFront, setFront] = useState(true);
  const cardContent = isFront ? (
    <div className="card-front">Engish: {front} </div>
  ) : (
    <div className="card-back">Russian: {back}</div>
  );
  const handleFlip = () => {
    setFront(!isFront);
  };
  const handleDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();
    deleteWord(front);
  };

  return (
    <div className="word-card" onClick={handleFlip}>
      <span className="delete-card" onClick={handleDelete}>
        X
      </span>
      {cardContent}
    </div>
  );
}

export default WordCard;
