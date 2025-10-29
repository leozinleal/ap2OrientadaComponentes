import React from 'react';

/**
 * Componente de formulário controlado para busca.
 * @param {object} props
 * @param {string} props.searchTerm - O valor atual da busca
 * @param {function} props.setSearchTerm - A função para atualizar o estado da busca
 */
function SearchForm({ searchTerm, setSearchTerm }) {
  
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <form className="w-full max-w-md mx-auto mb-8" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search" className="block text-lg font-medium text-gray-200 mb-2">
        Buscar Pokémon
      </label>
      <input
        type="text"
        id="search"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Ex: Pikachu"
        className="w-full px-4 py-2 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-700 text-white"
      />
    </form>
  );
}

export default SearchForm;