

import { useState } from "react";

function App() {
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("");

  const convert = () => {
    const rate = 83; // Example: 1 USD = 83 INR
    if (amount > 0) {
      setResult(amount * rate);
    }
  };

  return (
    <div>
      <h2>Currency Converter (USD → INR)</h2>
      <input
        type="number"
        placeholder="Enter amount in USD"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={convert}>Convert</button>
      {result && <h3>INR: {result}</h3>}
    </div>
  );
}

export default App;
