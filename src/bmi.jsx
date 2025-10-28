import { useState } from "react";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    if (weight > 0 && height > 0) {
      const heightInMeter = height / 100; // convert cm → m
      const result = (weight / (heightInMeter * heightInMeter)).toFixed(2);
      setBmi(result);
    }
  };

  return (
    <div>
      <h2>BMI Calculator</h2>
      <input
        type="number"
        placeholder="Enter weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <button onClick={calculateBMI}>Calculate</button>

      {bmi && <h3>Your BMI: {bmi}</h3>}
    </div>
  );
}

export default App;   
