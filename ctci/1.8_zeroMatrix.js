export function zeroMatrix(matrix) {
  if (!matrix || matrix.length === 0) throw new Error('invalid matrix');

  const occupiedRows = new Set();
  const occupiedCols = new Set();

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (!matrix[r][c]) {
        occupiedRows.add(r);
        occupiedCols.add(c);
      }
    }
  }

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (occupiedRows.has(r) || occupiedCols.has(c)) {
        matrix[r][c] = 0;
      }
    }
  }

  return matrix;
}
