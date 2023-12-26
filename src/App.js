import React from 'react';
import PokemonList from './components/PokemonList';

const App = () => {

  const pokemons = ['Arcanine', 'Beedrill', 'Blastoise', 'Bulbasaur', 'Butterfree', 'Caterpie', 'Charizard', 'Charmander', 'Charmeleon', 'Clefable', 'Dewgong', 'Farfetchd', 'Golbat', 'Ivysaur', 'Kadabra', 'Kakuna', 'Metapod', 'Pidgeot', 'Pidgeotto', 'Pidgey', 'Pikachu', 'Ponyta', 'Raichu', 'Raticate', 'Rattata', 'Squirtle', 'Venusaur', 'Vulpix', 'Wartortle', 'Weedle'];

  return (
    <div className='centered'>
      <div className='app'>
        <div className='header'>
          <h1>Pokelist App</h1>
          <span>Delivery 1</span>
        </div>

        <PokemonList pokemons={pokemons} />
      </div>
    </div>
  );
};

export default App;
