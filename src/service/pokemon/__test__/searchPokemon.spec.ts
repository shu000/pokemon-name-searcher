import { searchPokemon } from '../searchPokemon';

describe('searchPokemon', () => {
  it('ひらがなでもマッチすること', () => {
    const pokemons = searchPokemon('みゅう');
    expect(pokemons[0]).toBe('ミュウ');
  });

  it('ワイルドカードが正常に機能していること', () => {
    const mice = searchPokemon('**チュウ');
    expect(mice.length).toBe(2);
    expect(mice.includes('ピカチュウ')).toBe(true);
    expect(mice.includes('ライチュウ')).toBe(true);
  });

  it('正規化が正常に機能していること', () => {
    // NOTE: カントーにァゥォは居ない

    const NidoranF = searchPokemon('ニドランメス')[0];
    expect(NidoranF).toBe('ニドラン♀');

    const NidoranM = searchPokemon('ニドランオス')[0];
    expect(NidoranM).toBe('ニドラン♂');

    const pikatiyuu = searchPokemon('ピカチュウ')[0];
    const pikatiYUu = searchPokemon('ピカチユウ')[0];
    expect(pikatiyuu).toBe(pikatiYUu);

    const uIndei = searchPokemon('ウインディ')[0];
    const uindeI = searchPokemon('ウィンデイ')[0];
    expect(uIndei).toBe(uindeI);

    const niyoromo = searchPokemon('ニョロモ')[0];
    const niYOromo = searchPokemon('ニヨロモ')[0];
    expect(niyoromo).toBe(niYOromo);

    const giyarotupu = searchPokemon('ギャロップ')[0];
    const giYAroTUpu = searchPokemon('ギヤロツプ')[0];
    expect(giyarotupu).toBe(giYAroTUpu);

    const sieruda = searchPokemon('シェルダー')[0];
    const siEruda = searchPokemon('シエルダー')[0];
    expect(sieruda).toBe(siEruda);
  });

  it('マッチする文字数に誤りがないこと', () => {
    const tweLetters = searchPokemon('**');
    expect(tweLetters.length).toBe(0);

    const threeLetters = searchPokemon('***');
    expect(threeLetters.every((pokemon) => pokemon.length === 3)).toBe(true);

    const fourLetters = searchPokemon('****');
    expect(fourLetters.every((pokemon) => pokemon.length === 4)).toBe(true);

    const fiveLetters = searchPokemon('*****');
    expect(fiveLetters.every((pokemon) => pokemon.length === 5)).toBe(true);

    const sixLetters = searchPokemon('******');
    expect(sixLetters.length).toBe(2);

    const sevenLetters = searchPokemon('*******');
    expect(sevenLetters.length).toBe(0);
  });

  it('「ひらがなカタカナ*」以外の文字が含まれたら空配列を返すこと', () => {
    expect(searchPokemon('8ドン').length).toBe(0);
    expect(searchPokemon('*.*').length).toBe(0);
    expect(searchPokemon('ビー$').length).toBe(0);
  });
});
