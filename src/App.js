import "./App.css";
import { useState, useEffect } from "react";
import Pokemon from "./components/Pokemon";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/pokemons")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
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
