export function sortTerms(terms: string[]): string[] {
  return terms.slice().sort((a, b) => a.localeCompare(b, 'ja', { numeric: true }));
}
