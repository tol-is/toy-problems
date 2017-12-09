export function compressString(str) {
  if (!str) return str;

  let results = [];
  let count = 0;

  if (compressedLength(str) >= str.length) {
    return str;
  }

  for (let i = 0; i < str.length; i++) {
    count += 1;
    if (str[i] !== str[i + 1]) {
      results.push(count, str[i]);
      count = 0;
    }
  }

  return results.join('');
}

const compressedLength = (str) => {
  let len = 0;
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    count += 1;
    if (str[i] !== str[i + 1]) {
      len = len + 1 + Math.floor(Math.log10(count)) + 1;
    }
  }
  return len;
};
