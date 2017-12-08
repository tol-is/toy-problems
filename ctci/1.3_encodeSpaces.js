export function encodeSpaces(str) {
  if (str === null || str === undefined) {
    return str;
  }

  let len = str.length;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      len += 2;
    }
  }

  for (let i = str.length - 1, j = len - 1; i >= 0; i--) {
    if (str[i] === ' ') {
      str[j--] = '0';
      str[j--] = '2';
      str[j--] = '%';
    } else {
      str[j--] = str[i];
    }
  }
  return str;
}
