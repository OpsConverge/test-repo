import { finalPrice } from '../src/lib/priceHelpers';
import { User } from '../src/utils/calculateDiscount';

test('CartSummary: premium user gets 20% off', () => {
  const user: User = { id: 'u1', premium: true };
  const total = finalPrice(100, user);
  expect(total).toBe(80);
});

test('CartSummary: non-premium no coupon', () => {
  const user: User = { id: 'u2', premium: false };
  const total = finalPrice(50, user);
  expect(total).toBe(50);
});
