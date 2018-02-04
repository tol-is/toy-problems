const paintFill = (img, i, j, color, originalColor = img[i][j]) => {
  if (outOfRange(img, i, j)) return;
  if (img[i][j] !== originalColor) return;

  img[i][j] = color;
  paintFill(img, i - 1, j, color, originalColor);
  paintFill(img, i + 1, j, color, originalColor);
  paintFill(img, i, j - 1, color, originalColor);
  paintFill(img, i, j + 1, color, originalColor);

  return img;
};

const outOfRange = (img, i, j) => i < 0 || j < 0 || i >= img.length || j >= img[0].length;