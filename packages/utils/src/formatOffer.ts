import { formatPrice } from "./formatPrice";

export const formatOffer = (
  value: number,
  isPercentage: boolean,
  unit?: "Rial" | "Toman",
) => (isPercentage ? `${value}%` : `${formatPrice(value, unit)} تومان`);
