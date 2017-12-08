export function isPalindromePermutation(str) {
  if (str === null || str === undefined) {
    return false;
  }

  let count = 0;
  for (let c of str) {
    if (c === ' ') {
      continue;
    }
    const code = c.toLowerCase().charCodeAt(0) - 97;
    count ^= (1 << code);
  }

  return !(count & (count - 1));
}
