export function partition(list, val) {
  if (!list) throw new Error('invalid list');

  let head = list;
  let node = list;
  let tmp;

  while (node.next) {
    if (node.next.val < val) {
      tmp = node.next;
      node.next = tmp.next;
      tmp.next = head;
      head = tmp;
    } else {
      node = node.next;
    }
  }

  return head;
}
