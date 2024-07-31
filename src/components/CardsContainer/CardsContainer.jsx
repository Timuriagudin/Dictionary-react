import React from "react";
import "./CardsContainer.css";
import WordCard from "../WordCard";

export default function CardsContainer({ words, deleteWord }) {
  const cardList = words.map((word) => (
    <WordCard
      front={word.front}
      back={word.back}
      key={word.front}
      deleteWord={deleteWord}
    />
  ));
  return <section className="cards-container">{cardList}</section>;
}
