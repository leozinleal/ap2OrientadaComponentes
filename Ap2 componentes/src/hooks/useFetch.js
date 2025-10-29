import { useState, useEffect } from 'react';
import api from '../services/api';

/**
 * Custom hook para realizar requisições HTTP (GET)
 * @param {string} url 
 */
export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Função async para buscar os dados
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await api.get(url);
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

  }, [url]);

  return { data, loading, error };
}