var bitInsertion = (M, N, i, j) => {
  const maskFromJ = (1 << j + 1) - 1;
  const maskFromI = (1 << i) - 1;
  const mask = maskFromJ ^ maskFromI;
  
  return (N & (~mask)) | (M << i);
};
