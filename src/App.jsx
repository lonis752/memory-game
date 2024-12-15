import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { PokemonList } from "./pokemonList";

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((res) => {
      setPokemon(res.data.results.map((p) => p.name));
    });
    
  }, []);

  console.log(pokemon);

  return <PokemonList pokemon={pokemon} setPokemon={setPokemon} />;
}

export default App;
