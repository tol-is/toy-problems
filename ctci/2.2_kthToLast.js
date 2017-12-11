export function kthToLast(list, k) {
  let size = 0;
  let node = list;
  while (node) {
    size += 1;
    node = node.next;
  }

  node = list;
  while (node) {
    if (size === k) return node.val;
    size -= 1;
    node = node.next;
  }
}
