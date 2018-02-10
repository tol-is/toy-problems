const sortMerge = (a, b) => {
  let p1 = a.length - 1;
  let p2 = b.length - 1;

  for (let i = a.length + b.length - 1; i >= 0; i--) {
    if (p1 < 0) a[i] = b[p2--];
    else if (p2 < 0) a[i] = a[p1--];
    else if (a[p1] > b[p2]) a[i] = a[p1--];
    else a[i] = b[p2--];
  }

  return a;
};
