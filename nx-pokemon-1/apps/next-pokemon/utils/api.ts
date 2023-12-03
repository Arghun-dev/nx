import type { Pokemon } from '@nx-pokemon-1/types';

export async function getPokemons(search?: string): Promise<Pokemon[]> {
  const response = await fetch(
    search
      ? `http://localhost:3000/search?q=${search}`
      : 'http://localhost:3000/pokemon'
  );
  const data = await response.json();
  return data;
}
