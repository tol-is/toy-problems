export function isPermutation(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const count = {};
  for (let i = 0; i < str1.length; i++) {
    const char = str1[i];
    count[char] = (count[char] || 0) + 1;
  }

  for (let i = 0; i < str2.length; i++) {
    const char = str2[i];
    if (!count[char]) {
      return false;
    } else if (count[char] === 1) {
      delete count[char];
    } else {
      count[char] -= 1;
    }
  }

  return Object.keys(count).length === 0;
}
