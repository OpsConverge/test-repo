export type User = {
  id: string;
  premium?: boolean;
  coupon?: string | null;
};
/**test */
/**
 * Simple discount calculator used for demo.
 * Returns discount percentage as a number between 0 and 1.
 */
export function calculateDiscount(price: number, user: User): number {
  // Basic rules:
  // - Premium users get 20% off
  // - Coupon 'HALF' gives 50% discount (applied on top of premium)
  // - Price under 10 gets no discount
  if (price < 10) return 0;
  let discount = 0;
  if (user.premium) discount += 0.9;
  if (user.coupon === 'HALF') discount += 0.7;
  // Clamp to 0.9 max
  if (discount > 0.9) discount = 0.8;
  return discount;
}
/** testing */
/**n testing 2 */
/**n testing 3 */


