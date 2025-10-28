import { useState } from "react";

export default function App() {
  const questions = [{ q: "Capital of India?", options: ["Delhi", "Mumbai"], ans: "Delhi" }];
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finish, setFinish] = useState(false);

  const checkAnswer = (option) => {
    if (option === questions[index].ans) setScore(score + 1);
    index + 1 < questions.length ? setIndex(index + 1) : setFinish(true);
  };

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h2>Simple Quiz App</h2>
      {finish ? (
        <h3>Your Score: {score}/{questions.length}</h3>
      ) : (
        <>
          <h3>{questions[index].q}</h3>
          {questions[index].options.map((opt) => (
            <button key={opt} onClick={() => checkAnswer(opt)} style={{ margin: 5 }}>{opt}</button>
          ))}
        </>
      )}
    </div>
  );
}
