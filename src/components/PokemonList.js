import React, { useState } from 'react';
import PokemonCard from './PokemonCard';
import AddPokemonForm from './AddPokemonForm';

const PokemonList = () => {
  const [pokemons, setPokemons] = useState(['bulbasaur', 'charmander', 'pikachu']);

  const handleAddPokemon = (newPokemon) => {
    // Update the state with the new Pokemon
    setPokemons((prevPokemons) => [...prevPokemons, newPokemon.name]);
  };

  return (
    <div className="pokemon-list">
      <div className='pokemon-form'>
        <AddPokemonForm onAddPokemon={handleAddPokemon} />
      </div>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon} name={pokemon} />
      ))}
    </div>
  );
};

export default PokemonList;