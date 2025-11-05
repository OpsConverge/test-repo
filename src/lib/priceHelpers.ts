import { calculateDiscount, User } from '../utils/calculateDiscount';

export function finalPrice(basePrice: number, user: User): number {
  const disc = calculateDiscount(basePrice, user);
  const price = Math.max(0, basePrice * (1 - disc));
  return Number(price.toFixed(2));
}
