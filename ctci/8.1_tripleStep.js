const tripleStep = (n) => {
  const memo = [1, 1, 2, 4];
  for (let i = 0; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2] + memo[i - 3];
  }
  return memo[n];
};
