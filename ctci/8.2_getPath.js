const getPath = (map) => {
  const path = [];
  let found = false;

  const recurse = (i, j) => {
    if (atGoal(map, i, j)) found = true;
    if (found) return;

    if (canGo(map, i, j + 1)) {
      path.push('R');
      recurse(i, j + 1);
      if (found) return;
      path.pop();
    }

    if (canGo(map, i + 1, j)) {
      path.push('D');
      recurse(i + 1, j);
      if (found) return;
      path.pop();
    }
  };
  recurse(0, 0);

  return path;
};

const atGoal = (map, i, j) => i === map.length - 1 && j === map[0].length - 1;
const inRange = (map, i, j) => i < map.length && j < map[0].length;
const canGo = (map, i, j) => inRange(map, i, j) && map[i][j];
