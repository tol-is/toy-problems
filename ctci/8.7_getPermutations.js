const getPermutations = (str) => {
  let results = [''];

  for (let p = 0; p < str.length; p++) {
    const newResults = [];
    for (let result of results) {
      newResults.push(...insertIntoEachPos(result, str.charAt(p)));
    }
    results = newResults;
  }

  return results;
};

const insertIntoEachPos = (str, c) => {
  const result = [];
  for (let i = 0; i <= str.length; i++) {
    result.push(insertIntoPos(str, c, i));
  }
  return result;
};

const insertIntoPos = (str, c, i) => str.slice(0, i) + c + str.slice(i);
