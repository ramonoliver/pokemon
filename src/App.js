// src/App.js
import React, { useState, useEffect } from 'react';
import PokemonList from './components/PokemonList';
import PokemonForm from './components/PokemonForm';

const App = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    // Carregar a lista de pokémons da sua fonte de dados local
    // Aqui você pode fazer uma requisição para um arquivo JSON local ou qualquer outra fonte de dados
    const fetchData = async () => {
      // Exemplo: carregar dados de um arquivo JSON local
      const response = await fetch('/data/pokemons.json');
      const data = await response.json();
      setPokemons(data);
    };

    fetchData();
  }, []);

  //const handleAddPokemon = (newPokemon) => {
  //  Adiciona o novo pokemon na lista
  //  setPokemons([...pokemons, newPokemon]);
  //};

  const handleAddPokemon = (newPokemon) => {
    // Atualiza o estado da lista de pokémons com o novo Pokémon
    setPokemons((prevPokemons) => [...prevPokemons, newPokemon]);
  };

  return (
    <div className="app">
      <h1>Pokemon App</h1>
      
      <div className="pokemon-form">
        <PokemonForm onAddPokemon={handleAddPokemon} />
      </div>
      
      <PokemonList pokemons={pokemons} />
    </div>
  );
};

export default App;
