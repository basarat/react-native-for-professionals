const ALPHABET = ['K', 'M', 'B', 'T'];
const TRESHOLD = 1e3;

export function humanize(n: number) {
  let idx = 0;
  while (n >= TRESHOLD && ++idx <= ALPHABET.length) n /= TRESHOLD;
  return String(idx === 0 ? n : n + ALPHABET[idx - 1]);
}