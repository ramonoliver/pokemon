import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemons }) => {
  const [visiblePokemons, setVisiblePokemons] = useState(20); // Quantidade inicial de pokemons visíveis

  const loadMorePokemons = () => {
    // Carrega mais 4 pokemons ao fazer scroll
    setVisiblePokemons((prevVisiblePokemons) => prevVisiblePokemons + 4);
  };

  return (
    <InfiniteScroll
      dataLength={visiblePokemons}
      next={loadMorePokemons}
      hasMore={visiblePokemons < pokemons.length}
      loader={<h4>Carregando...</h4>}
    >
      <div className="pokemon-list">
        {pokemons.slice(0, visiblePokemons).map((pokemon) => (
          <PokemonCard key={pokemon.name} name={pokemon.name} image={pokemon.image} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default PokemonList;
