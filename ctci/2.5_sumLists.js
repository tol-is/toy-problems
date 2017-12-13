export function sumLists(list1, list2) {
  const sum = listToNum(list1) + listToNum(list2);
  return numToList(sum);
}

const numToListReverse = (num) => {
  let head = null;
  let tmp;
  let digit = num % 10;
  num = Math.floor(num / 10);
  while (digit || num) {
    tmp = createNode(digit);
    tmp.next = head;
    head = tmp;

    digit = num % 10;
    num = Math.floor(num / 10);
  }
  return head;
};

const listToNumReverse = (list) => {
  let result = 0;
  while (list) {
    result *= 10;
    result += list.val;
    list = list.next;
  }
  return result;
};

const numToList = (num) => {
  let head = null;
  let node = head;
  let digit = num % 10;
  num = Math.floor(num / 10);
  while (digit || num) {
    if (node) {
      node.next = createNode(digit);
      node = node.next;
    } else {
      head = createNode(digit);
      node = head;
    }

    digit = num % 10;
    num = Math.floor(num / 10);
  }
  return head;
};

const listToNum = (list) => {
  let result = 0;
  let place = 0;
  let node = list;
  while (node) {
    result += node.val * (10 ** place);
    place += 1;
    node = node.next;
  }
  return result;
};