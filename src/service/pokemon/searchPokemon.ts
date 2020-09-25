import { hiragana2Katakana, normalize } from '../utils/utils';
import { normalizedPokemons, pokemons } from './data';

/**
 * 全ての文字が ひらがな or カタカナ or ワイルドカード(*) かどうかをチェック
 *
 * @returns 上記ならば「ひらがな -> カタカナ かつ * -> . に変換した文字列」さもなくば false
 */
const validateRegExp = /^[ぁ-んァ-ン*]+$/;
const validate = (input: string): string | false => {
  if (!validateRegExp.test(input)) return false;
  return hiragana2Katakana(input).replace(/\*/g, '.');
};

/**
 * 引数の文字列と一致するポケモンを返す。ただし以下のルールを適用する。
 *
 * ・ワイルドカード(*)が有効である
 *
 * ・小さい文字と大きい文字は同一とみなす(ッ === ツ)
 *
 * @param searchValue ひらがな・カタカナ・* のみが含まれる文字列
 * @example searchPokemon('**チユ*') => ['ピカチュウ', 'ライチュウ']
 */
export const searchPokemon = (searchValue: string): string[] => {
  const valid = validate(searchValue);

  if (!valid) return [];

  const normalized = normalize(valid);
  const regexp = new RegExp(`^${normalized}$`);

  const indexes = normalizedPokemons.reduce((founds, pokemon, index) => {
    if (regexp.test(pokemon)) return [...founds, index];
    return founds;
  }, new Array<number>());

  return indexes.map((index) => pokemons[index]);
};
