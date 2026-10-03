import { useState } from "react";
import "./App.css";

function App() {
  // Counter state
  const [count, setCount] = useState(0);

  // Random number state
  const [randomNumber, setRandomNumber] = useState(null);

  // Counter functions
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  // Generate random number between 1 and 100
  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(number);
  };

  return (
    <div className="app">
      <h1>React Utility Dashboard</h1>

      {/* Counter Section */}
      <section className="card">
        <h2>Counter App</h2>

        <div className="counter-value">{count}</div>

        {count === 0 && (
          <p className="message">Minimum limit reached</p>
        )}

        <div className="button-group">
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={reset}>Reset</button>
        </div>
      </section>

      {/* Random Number Generator Section */}
      <section className="card">
        <h2>Random Number Generator</h2>

        <div className="random-value">
          {randomNumber === null
            ? "No number generated yet"
            : randomNumber}
        </div>

        <button onClick={generateRandomNumber}>
          Generate Random Number
        </button>
      </section>
    </div>
  );
}

export default App;
