import React, { useState, useMemo } from "react";
import { useFetch } from "../hooks/useFetch";
import SearchForm from "../components/SearchForm.jsx"; 
import ItemList from "../components/ItemList.jsx"; 


function Home() {
  // 1. Gerenciamento de estado (useState) para o formulário controlado
  const [searchTerm, setSearchTerm] = useState('');

  // 2. Consumo de API e Efeitos (useEffect) abstraído pelo Custom Hook
  const { data, loading, error } = useFetch('pokemon?limit=151');

  // 3. Lógica de filtro/busca
  const filteredPokemons = useMemo(() => {
    if (!data?.results) {
      return [];
    }
    
    return data.results.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [data, searchTerm]); 

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-yellow-400 mb-8">
        Pokédex
      </h1>
      
      <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {error && (
        <p className="text-center text-red-500">
          Ocorreu um erro ao buscar os dados.
        </p>
      )}

      <ItemList pokemons={filteredPokemons} loading={loading} />
    </div>
  );
}

export default Home;