const magicIndexUnique = (arr, lo = 0, hi = arr.length - 1) => {
  if (hi < lo) return -1;
  const mid = Math.floor((hi + lo) / 2);
  if (arr[mid] < mid) {
    return magicIndexUnique(arr, mid + 1, hi);
  } else if (arr[mid] > mid) {
    return magicIndexUnique(arr, lo, mid - 1);
  } else {
    return mid;
  }
};

const magicIndexDuplicates = (arr, lo = 0, hi = arr.length - 1) => {
  if (hi < lo) return -1;
  const mid = Math.floor((hi + lo) / 2);
  if (arr[mid] < mid) {
    const right = magicIndexDuplicates(arr, mid + 1, hi);
    const left = magicIndexDuplicates(arr, lo, arr[mid]);
    return Math.max(right, left);
  } else if (arr[mid] > mid) {
    const left = magicIndexDuplicates(arr, lo, mid - 1);
    const right = magicIndexDuplicates(arr, arr[mid], hi);
    return Math.max(left, right);
  } else {
    return mid;
  }
};
