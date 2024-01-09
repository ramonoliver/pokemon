import React, { useState } from 'react';
import PokemonList from './components/PokemonList';
import PokemonForm from './components/AddPokemonForm';

const App = () => {

  const [pokemons, setPokemons] = useState(['Arcanine', 'Beedrill', 'Blastoise', 'Bulbasaur', 'Butterfree', 'Caterpie', 'Charizard', 'Charmander', 'Charmeleon', 'Clefable', 'Dewgong', 'Farfetchd', 'Golbat', 'Ivysaur', 'Kadabra', 'Kakuna', 'Metapod', 'Pidgeot', 'Pidgeotto', 'Pidgey', 'Pikachu', 'Ponyta', 'Raichu', 'Raticate', 'Rattata', 'Squirtle', 'Venusaur', 'Vulpix', 'Wartortle', 'Weedle']);

  const handleAddPokemon = (newPokemon) => {
    setPokemons((prevPokemons) => [...prevPokemons, newPokemon.name]);
  };

  return (
    <div className='centered'>
      <div className='app'>
        <div className='header'>
          <h1>Pokelist App</h1>
          <span>Delivery 1</span>
        </div>
        <PokemonList />
      </div>
    </div>
  );
};

export default App;
