/** ひらがな -> カタカナ */
export const hiragana2Katakana = (str: string) =>
  str.replace(/[ぁ-ん]/g, (hiragana) => {
    const katakana = hiragana.charCodeAt(0) + 0x60;
    return String.fromCharCode(katakana);
  });

/** ♂・♀・小さい文字 -> オス・メス・大きい文字 */
export const normalize = (str: string) => {
  return str
    .replace('♂', 'オス')
    .replace('♀', 'メス')
    .replace(/[ッャュョァィゥェォ]/g, (small) => {
      const big = small.charCodeAt(0) + 0x01;
      return String.fromCharCode(big);
    });
};
