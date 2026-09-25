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

/** Apply a percentage discount to an amount. */
export function applyDiscount(amount, percent) {
  if (percent < 0 || percent > 100) {
    throw new RangeError('percent must be between 0 and 100');
  }
  return amount - (amount * percent) / 100;
}

/**
 * Tell whether the cart holds no items.
 *
 * @param {Array} items - The cart's line items.
 * @returns {boolean} True if the cart has no items.
 */
export function isEmpty(items) {
  return items.length === 0;
}
