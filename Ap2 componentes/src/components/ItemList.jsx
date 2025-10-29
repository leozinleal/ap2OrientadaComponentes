import React from 'react';
import ItemCard from './ItemCard';
import LoadingSpinner from './LoadingSpinner';

/**
 * Componente para exibir a lista (grid) de Pokémons.
 * @param {object} props
 * @param {Array} props.pokemons - A lista de pokémons a ser exibida
 * @param {boolean} props.loading - O estado de carregamento
 */
function ItemList({ pokemons, loading }) {
  if (loading) {
    return <LoadingSpinner />;
  }

  if (!pokemons || pokemons.length === 0) {
    return <p className="text-center text-gray-400">Nenhum Pokémon encontrado.</p>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {pokemons.map((pokemon) => (
        <ItemCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default ItemList;