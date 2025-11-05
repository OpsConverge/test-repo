import { finalPrice } from '../src/lib/priceHelpers';
import { User } from '../src/utils/calculateDiscount';

test('price helper respects coupon', () => {
  const user: User = { id: 'u3', coupon: 'HALF' };
  const total = finalPrice(40, user);
  // HALF gives 50% discount
  expect(total).toBe(20);
});
