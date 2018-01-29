const multiply = (a, b) => {
  if (b > a) return multiply(b, a);

  if (b === 1) return a;
  if (b === 0) return 0;

  if (b & (b - 1)) {
    // more bits
    let result = 0;
    for (let i = 0; i < 32; i++) {
      if (b & (1 << i)) result += multiply(a, (1 << i));
    }
    return result;
  } else {
    // one bit
    let i = 0;
    while (!(b & (1 << i))) {
      a *= 2;
      i += 1;
    }
    return a;
  }
};
