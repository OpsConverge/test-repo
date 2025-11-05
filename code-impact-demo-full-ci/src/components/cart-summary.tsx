import React from 'react';
import { finalPrice } from '../lib/priceHelpers';
import { User } from '../utils/calculateDiscount';

type Props = {
  items: { name: string; price: number }[];
  user: User;
};

export function CartSummary({ items, user }: Props) {
  const subtotal = items.reduce((s, it) => s + it.price, 0);
  const total = finalPrice(subtotal, user);

  return (
    <div>
      <h3>Cart summary</h3>
      <div>Subtotal: ${subtotal.toFixed(2)}</div>
      <div>Total after discounts: ${total.toFixed(2)}</div>
    </div>
  );
}

export default CartSummary;
