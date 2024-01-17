import React from 'react';

const PokemonCard = ({ name, image }) => {

  return (
    <div className="pokemon-card">
        <div className='image'>
            <img src={image} alt={name} />
        </div>
        <div className="container">
            <h4>{name}</h4>
        </div>
    </div>

  );
};

export default PokemonCard;