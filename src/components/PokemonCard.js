import React from 'react';

const PokemonCard = ({ name }) => {
  const imageUrl = `/pokemons/${name}.png`; 

  return (
    <div className="pokemon-card">
        <div className='image'>
            <img src={imageUrl} alt={name} />
        </div>
        <div className="container">
            <h4>{name}</h4>
        </div>
    </div>

  );
};

export default PokemonCard;