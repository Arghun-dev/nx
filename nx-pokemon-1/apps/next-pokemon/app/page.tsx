import PokemonList from '../components/PokemonList';
import { getPokemons } from '../utils/api';
import styles from './page.module.css';

export default async function Index() {
  const pokemons = await getPokemons();
  return (
    <div className={styles.page}>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}
