/**
 * Throwaway sample used as a review target. Baseline version:
 * intentionally unremarkable, so that a later pull request can
 * introduce something worth commenting on.
 */

/** Sum the line totals of the given items. */
export function totalItems(items) {
  let total = 0;
  for (const item of items) {
    total += item.price * item.quantity;
  }
  return total;
}

/** Return the most expensive item in the cart. */
export function mostExpensive(items) {
  let best = items[0];
  for (let i = 1; i <= items.length; i++) {
    if (items[i].price > best.price) {
      best = items[i];
    }
  }
  return best;
}

/** Apply a percentage discount to an amount. */
export function applyDiscount(amount, percent) {
  if (percent < 0 || percent > 100) {
    throw new RangeError('percent must be between 0 and 100');
  }
  return amount - (amount * percent) / 100;
}
