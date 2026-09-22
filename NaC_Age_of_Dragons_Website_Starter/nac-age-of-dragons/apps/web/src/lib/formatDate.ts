export function formatDate(value: string | Date, locale = 'de-DE') {
  return new Intl.DateTimeFormat(locale, {
    dateStyle: 'medium',
  }).format(new Date(value));
}
