import { finalPrice } from '../lib/priceHelpers';
import { User } from '../utils/calculateDiscount';

/**
 * Simple controller-style function that would be exercised in integration tests.
 */
export async function checkoutCart(items: { price: number }[], user: User) {
  const subtotal = items.reduce((s, it) => s + it.price, 0);
  const total = finalPrice(subtotal, user);
  // In real code we'd create an order and call payment gateway.
  return {
    subtotal,
    total,
    charged: total, // charged amount for demo
  };
}
