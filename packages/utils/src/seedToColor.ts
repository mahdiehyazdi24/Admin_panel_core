const LIGHT_HEX = "89ABCDEF";
const DARK_HEX = "01234567";
const ALL_HEX = DARK_HEX + LIGHT_HEX;

const DEFAULT_FIXED_COLORS = ["EE7B95", "AA9FF1", "9FCAF1"];

type Seed = string | number;

const createResult = (color: string) => ({
  from: lightenHex(color, 30),
  to: color,
});

const xmur3 = (str: string): number => {
  let h = 1779033703 ^ str.length;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  h = Math.imul(h ^ (h >>> 16), 2246822507);
  h = Math.imul(h ^ (h >>> 13), 3266489909);
  return (h ^ (h >>> 16)) >>> 0;
};

const generateRandomSeed = (): number =>
  +(Math.random() * Date.now()).toFixed(0);

const generateColorFromSeed = (list: string, seed?: Seed): string => {
  const seedNumber = seed ? xmur3(seed.toString()) : generateRandomSeed();
  const fixedSeed = seedNumber % 1e6;
  const digits = fixedSeed.toString().padEnd(6, "0").split("").map(Number);

  const isRandomList = list.length === ALL_HEX.length;
  const colorIndices = digits.map((n, i) => {
    if (isRandomList || i % 2) {
      const m = n * 2 + (i % 2);
      return m < ALL_HEX.length
        ? m
        : ((m - ALL_HEX.length) * 3 + 1) % ALL_HEX.length;
    }
    return n < list.length ? n : ([4, 5, 6, 7, 8, 9][(n - i) % 6] ?? 0);
  });

  return colorIndices.map((n, i) => (i % 2 ? ALL_HEX[n] : list[n])).join("");
};

const lightenHex = (hex: string, percent: number): string => {
  const num = parseInt(hex, 16);
  const adjust = (c: number) =>
    Math.min(255, c + Math.round((255 - c) * (percent / 100)))
      .toString(16)
      .padStart(2, "0");

  return adjust(num >> 16) + adjust((num >> 8) & 0xff) + adjust(num & 0xff);
};

export const randomLightColor = (seed?: Seed) =>
  createResult(generateColorFromSeed(LIGHT_HEX, seed));

export const randomDarkColor = (seed?: Seed) =>
  createResult(generateColorFromSeed(DARK_HEX, seed));

export const randomColor = (seed?: Seed) =>
  createResult(generateColorFromSeed(ALL_HEX, seed));

export const fixedColor = (
  seed?: Seed,
  colors: string[] = DEFAULT_FIXED_COLORS,
) => {
  if (seed && colors.length) {
    const code = Array.from(seed.toString()).reduce(
      (sum, char) => sum + char.charCodeAt(0),
      0,
    );
    return createResult(colors[code % colors.length] || "");
  }
  return randomLightColor(seed);
};
