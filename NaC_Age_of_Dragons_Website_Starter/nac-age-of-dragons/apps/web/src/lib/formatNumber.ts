export function formatNumber(value: number, locale = 'de-DE') {
  return new Intl.NumberFormat(locale).format(value);
}
