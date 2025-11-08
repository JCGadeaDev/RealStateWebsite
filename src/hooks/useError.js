import { useState, useCallback } from 'react';

export const useError = () => {
  const [error, setError] = useState(null);

  const handleError = useCallback((error) => {
    setError(error?.message || 'Ha ocurrido un error inesperado');
    console.error('Error:', error);
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return { error, setError, handleError, clearError };
};