var flipBit = (n) => {
  // all bits are 1
  if (~n === 0) return n.toString(2).length;

  let maxSoFar = 1;
  let left = 0;
  let right = 0;

  while (n) {
    if (n & 1) {
      // bit is 1
      right += 1;
    } else {
      // bit is 0
      left = right;
      right = 0;
    }

    maxSoFar = Math.max(maxSoFar, left + right + 1);

    n >>>= 1;
  }

  return maxSoFar;
};
