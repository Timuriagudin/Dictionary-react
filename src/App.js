import { useState } from "react";
import "./App.css";
import WordForm from "./components/WordForm/WordForm";
import CardsContainer from "./components/CardsContainer/CardsContainer";

function App() {
  const [words, setWords] = useState([
    { front: "Apple", back: "Яблоко" },
    {
      front: "Pineapple",
      back: "Ананас",
    },
    {
      front: "Pear",
      back: "Груша",
    },
    {
      front: "Orange",
      back: "Апельсин",
    },
    {
      front: "Coconut",
      back: "Кокос",
    },
  ]);

  const addWord = (front, back) => {
    const newWords = [...words, { front, back }];
    setWords(newWords);
  };
  const deleteWord = (front) => {
    const newWords = words.filter((word) => word.front !== front);
    setWords(newWords);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Dictionary app</h1>
      </header>
      <main>
        <WordForm addWord={addWord} />
        <CardsContainer words={words} deleteWord={deleteWord} />
      </main>
    </div>
  );
}

export default App;
