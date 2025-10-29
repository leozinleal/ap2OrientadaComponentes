import React from 'react';

/**
 * Extrai o ID do Pokémon da URL.
 * @param {string} url
 */
const getPokemonIdFromUrl = (url) => {
  if (!url) return '';
  const parts = url.split('/');
  return parts[parts.length - 2];
};

/**
 * Componente Card para exibir um Pokémon individual.
 * @param {object} props
 * @param {object} props.pokemon
 */
function ItemCard({ pokemon }) {
  const id = pokemon.url ? getPokemonIdFromUrl(pokemon.url) : '';
  
  const formattedId = id.padStart(3, '0');
  
  const imageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${formattedId}.png`;

  return (
    <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-gray-700">
      <img
        
        src={id ? imageUrl : ''} 
        alt={pokemon.name}
        className="w-32 h-32 object-contain"
        loading="lazy" 
      />
      <h3 className="mt-2 text-xl font-semibold text-white capitalize">
        {pokemon.name}
      </h3>
      
      <span className="text-sm text-gray-400">#{formattedId}</span>
    </div>
  );
}

export default ItemCard;