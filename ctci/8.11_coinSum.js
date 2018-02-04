const COINS = [1, 5, 10, 25];

const coinSumRecursive = (n, prev = 0) => {
  if (n === 0) return 1;

  let count = 0;
  for (let i = prev; i < COINS.length && COINS[i] <= n; i++) {
    count += coinSumRecursive(n - COINS[i], i);
  }
  return count;
};

const coinSumDP = (n) => {
  const dp = [];

  for (let i = 1; i <= n; i++) {
    dp[i] = [];
    
    for (let j = 0; j < COINS.length; j++) {
      const remainder = i - COINS[j];
      if (remainder > 0) dp[i][j] = dp[remainder][j];
      else if (remainder < 0) dp[i][j] = 0;
      else dp[i][j] = 1;

      if (j > 0) dp[i][j] += dp[i][j - 1];
    }
  }

  return dp[n][COINS.length - 1];
};
