import React, { useState } from 'react';

const AddPokemonForm = ({ onAddPokemon }) => {
  const [pokemonName, setPokemonName] = useState('');
  const [imageFile, setImageFile] = useState(null);

  const handleNameChange = (e) => {
    setPokemonName(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleAddPokemon = (e) => {
    e.preventDefault();

    if (pokemonName && imageFile) {
      onAddPokemon({ name: pokemonName, image: imageFile });
      setPokemonName('');
      setImageFile(null);
    }
  };

  return (
    <form onSubmit={handleAddPokemon}>
      <label>
        Pokemon:
        <input type="text" value={pokemonName} onChange={handleNameChange} />
      </label>
      <label>
        Imagem:
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </label>
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default AddPokemonForm;
