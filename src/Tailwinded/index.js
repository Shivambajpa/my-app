// Flashcard.js
import React, { useState } from "react";

const Flashcard = ({ card, onAnswer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  // Check if card exists before rendering the content
  if (!card) {
    return <div>Loading...</div>; // Optional: Show a loading or fallback message if card is undefined
  }

  const handleAnswerClick = (easeLevel) => {
    onAnswer(card.id, easeLevel); // Pass the selected ease level back to the parent component
  };

  return (
    <div className="flashcard">
      <div className="question">
        <h2>{card.question}</h2>
        {showAnswer && <p>{card.answer}</p>}
      </div>
      <button onClick={() => setShowAnswer(!showAnswer)}>
        {showAnswer ? "Hide Answer" : "Show Answer"}
      </button>
      {showAnswer && (
        <div className="buttons">
          <button onClick={() => handleAnswerClick("easy")}>Easy</button>
          <button onClick={() => handleAnswerClick("medium")}>Medium</button>
          <button onClick={() => handleAnswerClick("hard")}>Hard</button>
        </div>
      )}
    </div>
  );
};

export default Flashcard;
