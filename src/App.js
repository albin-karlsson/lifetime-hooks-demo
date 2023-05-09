import "./App.css";
import { useState, useEffect } from "react";
import Pokemon from "./components/Pokemon";

function App() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  // This useEffect will run when the page loads
  useEffect(() => {
    fetch("http://localhost:7000/pokemons")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  // This useEffect will run when the variable count changes
  useEffect(() => {
    console.log("Count changed!");
  }, [count]);

  function incrementCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementCount}>Count!</button>

      <div className="grid-container">
        {data.map((p) => (
          <Pokemon
            key={p.id}
            name={p.name}
            type={p.type}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
