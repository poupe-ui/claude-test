/**
 * Throwaway sample used as a review target. Baseline version:
 * intentionally unremarkable, so that a later pull request can
 * introduce something worth commenting on.
 */

/** Sum the line totals of the given items. */
export function totalItems(items) {
  let total = 0;
  for (const item of items) {
    total += lineTotal(item);
  }
  return total;
}

export function lineTotal(item) {
  if (!Number.isInteger(item.quantity) || item.quantity < 0) {
    throw new Error('quantity must be a whole number, not negative');
  }
  return item.price * item.quantity;
}

/** Apply a percentage discount to an amount. */
export function applyDiscount(amount, percent) {
  if (percent < 0 || percent > 100) {
    throw new RangeError('percent must be between 0 and 100');
  }
  return amount - (amount * percent) / 100;
}
