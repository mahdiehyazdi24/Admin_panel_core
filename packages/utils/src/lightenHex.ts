export function lightenHex(hex: string, amount: number = 0.2) {
  let col = hex.replace("#", "");

  if (col.length === 3) {
    col = col
      .split("")
      .map(c => c + c)
      .join("");
  }

  const num = parseInt(col, 16);
  const r = Math.min(255, ((num >> 16) & 0xff) + 255 * amount);
  const g = Math.min(255, ((num >> 8) & 0xff) + 255 * amount);
  const b = Math.min(255, (num & 0xff) + 255 * amount);

  return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
}
