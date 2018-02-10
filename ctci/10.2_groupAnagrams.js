const groupAnagrams = (arr) => {
  const groups = {};
  for (let str of arr) {
    const key = getGroupKey(str);
    if (!groups[key]) groups[key] = [];
    groups[key].push(str);
  }

  const results = [];
  for (let k in groups) {
    results.push(...groups[k]);
  }
  return results;
};

const getGroupKey = (str) => {
  const count = Array(26).fill(0);
  for (let i = 0; i < str.length; i++) {
    count[str.charCodeAt(i) - 97] += 1;
  }
  return count.join(',');
};
