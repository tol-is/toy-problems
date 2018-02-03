const towerOfHanoi = (s1, s2 = [], s3 = [], n = s1.length) => {
  if (n === 0) return;

  if (n === 1) {
    s3.push(s1.pop());
    return;
  }

  towerOfHanoi(s1, s3, s2, n - 1);
  towerOfHanoi(s1, s2, s3, 1);
  towerOfHanoi(s2, s1, s3, n - 1);
};
