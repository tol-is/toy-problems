const getParenCombinations = (n, left = 0, right = 0, curr = [], results = []) => {
  if (right > left) return;
  if (left > n || right > n) return;
  if (left === n && right === n) {
    results.push(curr.join(''));
    return;
  }

  curr.push('(');
  getParenCombinations(n, left + 1, right, curr, results);
  curr.pop();

  curr.push(')');
  getParenCombinations(n, left, right + 1, curr, results);
  curr.pop();

  return results;
};
