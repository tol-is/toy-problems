export function isOneAway(str1, str2) {
  if (str1 === str2) {
    return true;
  }

  if (Math.abs(str1.length - str2.length) > 1) {
    return false;
  }

  if (str1.length < str2.length) {
    return isInsert(str1, str2);
  } else if (str1.length > str2.length) {
    return isInsert(str2, str1);
  } else {
    return isReplaced(str1, str2);
  }
}

const isInsert = (shorter, longer) => {
  let inserted = false;
  for (let i = 0, j = 0; i < shorter.length; i++) {
    if (shorter[i] === longer[j]) {
      j += 1;
    } else {
      if (inserted) {
        return false;
      } else {
        inserted = true;
        j += 2;
      }
    }
  }
  return true;
};

const isReplace = (str1, str2) => {
  let replaced = false;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      if (replaced) {
        return false;
      } else {
        replaced = true;
      }
    }
  }
  return true;
};
