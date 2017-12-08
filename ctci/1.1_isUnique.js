export function allUniqueChars(str) {
  let existing = [0, 0, 0, 0];

  for (let i = 0; i < str.length; i++) {
    const code = str[i].charCodeAt(0);
    const index = Math.floor(code / 32);
    const pos = code % 32;

    if (existing[index] & (1 << pos)) {
      return false;
    } else {
      existing[index] |= (1 << pos);
    }
  }

  return true;
};
