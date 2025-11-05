import { checkoutCart } from '../src/controllers/checkoutController';
import { User } from '../src/utils/calculateDiscount';

test('checkout charges discounted amount for premium', async () => {
  const user: User = { id: 'u1', premium: true };
  const res = await checkoutCart([{ price: 20 }, { price: 30 }], user);
  // subtotal 50, premium 20% -> total 40
  expect(res.total).toBe(40);
  expect(res.charged).toBe(40);
});
