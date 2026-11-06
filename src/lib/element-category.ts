/**
 * Maps an element's localized `category` string to a stable key, so the tile
 * tint and the legend resolve the same hue for English and Spanish content.
 */
export type ElementCategory =
  | 'noble'
  | 'alkali'
  | 'alkaline'
  | 'transition'
  | 'post-transition'
  | 'metalloid'
  | 'lanthanide'
  | 'actinide'
  | 'nonmetal'
  | 'other';

const matchers: ReadonlyArray<readonly [ElementCategory, readonly string[]]> = [
  ['noble', ['noble']],
  ['alkaline', ['alkaline', 'alcalinot']],
  ['alkali', ['alkali', 'alcalin']],
  ['post-transition', ['post-transition', 'postransici', 'post-transici']],
  ['transition', ['transition', 'transici']],
  ['metalloid', ['metalloid', 'metaloide']],
  ['lanthanide', ['lanthanide', 'lant']],
  ['actinide', ['actinide', 'act']],
  ['nonmetal', ['nonmetal', 'non-metal', 'no metal']],
];

export function getCategoryKey(category: string): ElementCategory {
  const value = category.toLowerCase();

  for (const [key, needles] of matchers) {
    for (const needle of needles) {
      if (value.includes(needle)) return key;
    }
  }

  return 'other';
}
