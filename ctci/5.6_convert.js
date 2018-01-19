const convert = (a, b) => {
  let count = 0;
  for (let diff = a ^ b; diff !== 0; diff &= (diff - 1)) {
    count += 1;
  }
  return count;
};
