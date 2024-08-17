const LOCALE = "en-US";

/**
 * @example currencyFormatter.format(1000) // $1,000.00
 * @example currencyFormatter.format(7_456_488) // $7.46M
 */
export const shortCurrencyFormatter = new Intl.NumberFormat(LOCALE, {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
  notation: "compact",
});
/**
 * @example longCurrencyFormatter.format(1000) // $1,000.00
 * @example longCurrencyFormatter.format(7_456_488) // $7,456,488.00
 */
export const longCurrencyFormatter = new Intl.NumberFormat(LOCALE, {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
});

/**
 * @example shortNumberFormatter.format(1000) // 1k
 */
export const shortNumberFormatter = new Intl.NumberFormat(LOCALE, {
  compactDisplay: "short",
  notation: "compact",
});
/**
 * @example longNumberFormatter.format(1000) // 1,000
 * @example longNumberFormatter.format(7_456_488) // 7,456,488
 */
export const longNumberFormatter = new Intl.NumberFormat(LOCALE, {
  compactDisplay: "short",
});

/**
 * @example dateFormatter.format(new Date('2022-01-01')) // 01/01/22
 * @example dateFormatter.format(new Date('2022-12-31')) // 12/31/22
 */
export const shortDateFormatter = new Intl.DateTimeFormat(LOCALE, {
  day: "2-digit",
  month: "2-digit",
  year: "2-digit",
});

/**
 * @example longDateFormatter.format(new Date('2022-01-01')) // January 1, 2022
 * @example longDateFormatter.format(new Date('2022-12-31')) // December 31, 2022
 */
export const longDateFormatter = new Intl.DateTimeFormat(LOCALE, {
  day: "numeric",
  month: "long",
  year: "numeric",
});

/**
 * @example percentFormatter.format(0.5) // 50%
 */
export const percentFormatter = new Intl.NumberFormat(LOCALE, {
  style: "percent",
  signDisplay: "exceptZero",
});
