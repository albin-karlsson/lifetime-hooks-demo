import React from "react";

function Pokemon(props) {
  function logPokemon() {
    console.log(
      `You clicked ${props.name}, it is a ${props.type} type Pokémon!`
    );
  }

  return (
    <div
      className="grid-item"
      onClick={logPokemon}
    >
      <h1>{props.name}</h1>
      <em>Type: {props.type}</em>
    </div>
  );
}

export default Pokemon;
