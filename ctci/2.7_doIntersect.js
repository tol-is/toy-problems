export function doIntersect(list1, list2) {
  const length1 = getListLength(list1);
  const length2 = getListLength(list2);
  if (length1 > length2) {
    for (let i = 0; i < length1 - length2; i++) {
      list1 = list1.next;
    }
  } else if (length2 > length1) {
    for (let i = 0; i < length2 - length1; i++) {
      list2 = list2.next;
    }
  }

  while (true) {
    if (list1 === null) return undefined;
    if (list1 === list2) return list1;
    list1 = list1.next;
    list2 = list2.next;
  }
}

const getListLength = (list) => {
  let result = 0;
  while (list) {
    result += 1;
    list = list.next;
  }
  return result;
};

export function doIntersectSet(list1, list2) {
  const nodes = new Set();
  
  let node = list1;
  while (node) {
    nodes.add(node);
    node = node.next;
  }

  node = list2;
  while (node) {
    if (nodes.has(node)) {
      return node;
    }
    node = node.next;
  }

  return undefined;
}
