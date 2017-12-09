export function rotateMatrix(matrix) {
  if (!matrix || matrix.length === 0 || matrix.length !== matrix[0].length) throw new Error('invalid matrix');

  const n = matrix.length;

  for (let r = 0; r < n / 2; r++) {
    for (let c = r; c < n - 1 - r; c++) {
      swapFour(matrix, r, c);
    }
  }

  return matrix;
}

const getFromRow = (n, c) => n - 1 - c;

const swapFour = (matrix, r, c) => {
  const n = matrix.length;
  const tmp = matrix[r][c];

  let fromRow;

  for (let i = 0; i < 3; i++) {
    fromRow = getFromRow(n, c);
    matrix[r][c] = matrix[fromRow][r];
    c = r;
    r = fromRow;
  }

  matrix[r][c] = tmp;
};
