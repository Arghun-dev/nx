import { Pokemon } from '@nx-pokemon-1/types';

export default function PokemonList({ pokemons }: { pokemons: Pokemon[] }) {
  return (
    <ul>
      {pokemons.map(({ name: { english }, id }) => (
        <li key={id}>{english}</li>
      ))}
    </ul>
  );
}
