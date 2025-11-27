export const formatPrice = (
  price?: number | string,
  unit?: "Rial" | "Toman",
) => {
  unit = unit ?? "Toman";

  if (price === undefined) return;
  if (typeof price === "string") price = parseInt(price);
  return Math.round(unit === "Rial" ? price / 10 : price).toLocaleString("fa");
};
