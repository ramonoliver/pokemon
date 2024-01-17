// src/components/PokemonForm.js
import React, { useState } from 'react';

const PokemonForm = ({ onAddPokemon }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Adiciona o novo Pokémon à lista
    onAddPokemon({ name, image });
    // Limpa os campos após a adição
    setName('');
    setImage('');
  };

  return (
    <div className="pokemon-form">
      <form onSubmit={handleSubmit}>
        <label>
          Nome: <br />
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <label>
          Imagem: <br />
          <input type="file" accept=".png, .jpg, .jpeg, .gif" onChange={handleImageChange} />
        </label>
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default PokemonForm;
