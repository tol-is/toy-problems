const realNumberToBinary = (n) => {
  let remaining = n;
  let bits = [];
  let bitVal = 0.5;

  while (remaining && bits.length < 32) {
    if (remaining >= bitVal) {
      bits.push(1);
      remaining -= bitVal;
    } else {
      bits.push(0);
    }
    bitVal /= 2;
  }

  return remaining ? 'Error' : `0.${bits.join('')}`;
};
