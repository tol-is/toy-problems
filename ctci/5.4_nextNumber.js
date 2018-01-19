const getNextLargest = (n) => {
  let m = n;
  let oneCount = 0;
  let counter = 0;

  while (m > 0) {
    if (m & 1) {
      oneCount += 1;
      if (oneCount - 1 < counter) break;
    }

    counter += 1;
    m >>>= 1;
  }

  let result = n;
  // clear all bit right of counter (inclusive)
  result &= (-1 << (counter + 1));
  // flip oneCount bits to one to the right of counter
  result |= (~(-1 << counter) & (-1 << (counter - oneCount + 1)));
  
  return result;
};

const getNextSmallest = (n) => {
  let m = n;
  let oneCount = 0;
  let counter = 0;

  while (m > 0) {
    if (m & 1) {
      oneCount += 1;
    } else {
      if (oneCount) break;
    }

    counter += 1;
    m >>>= 1;
  }

  let result = n;
  // clear all bits right of counter
  result &= (-1 << (counter + 1));
  // flip counter bit to 1
  result |= (1 << counter);
  // flip rightmost oneCount - 1 bits to 1
  result |= ~(-1 << (oneCount - 1));

  return result;
};
