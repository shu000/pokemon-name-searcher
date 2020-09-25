import pokemon from 'pokemon';
import { normalize } from '../utils/utils';

/** カントー151匹の名前 */
export const pokemons = pokemon.all('ja').slice(0, 151);

/** 小さい文字を大きい文字に、♂♀をオスメスに変換したポケモンの名前 */
export const normalizedPokemons = pokemons.map((name) => normalize(name));
