import React, { useRef } from "react";
import "./WordForm.css";

function WordForm({ addWord }) {
  const enRef = useRef(null);
  const ruRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Access the input values using refs
    const enValue = enRef.current.value;
    const ruValue = ruRef.current.value;

    // Clear the input fields
    enRef.current.value = "";
    ruRef.current.value = "";

    addWord(enValue, ruValue);
  };

  return (
    <section className="card-form">
      <h2>New Card</h2>
      <form action="#" method="GET" onSubmit={handleSubmit}>
        <div className="form-row">
          <label>
            English:
            <input
              type="text"
              name="en"
              placeholder="English"
              ref={enRef}
              required
            />
          </label>
        </div>
        <div className="form-row">
          <label>
            Russian:
            <input
              type="text"
              name="ru"
              placeholder="Russian"
              ref={ruRef}
              required
            />
          </label>
        </div>
        <div className="form-row">
          <button type="submit">Add Word</button>
        </div>
      </form>
    </section>
  );
}

export default WordForm;
