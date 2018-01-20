const swapBits = (n) => {
  let mask = 1 << 1;
  while (mask > 0) {
    mask <<= 1;
    mask |= 1;
    mask <<= 1;
  }

  const odd = (n & ~mask) << 1;
  const even = (n & mask) >>> 1;
  return odd | even;
};
