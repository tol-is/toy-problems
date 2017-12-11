export function removeDuplicates(list) {
  const seen = {};

  if (list) {
    seen[list.val] = true;
  } else {
    return list;
  }

  while (list.next) {
    if (seen[list.next.val]) {
      list.next = list.next.next;
    } else {
      seen[list.next.val] = true;
      list = list.next;
    }
  }

  return list;
}
