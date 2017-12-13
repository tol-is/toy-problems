export function findStartOfLoop(list) {
  if (!list || !list.next || !list.next.next) return null;

  let one = list.next;
  let two = list.next.next;
  while (one !== two) {
    if (!one.next || !two.next.next) return null; 
    one = one.next;
    two = two.next.next;
  }
  two = list;
  while (one !== two) {
    if (!one.next || !two.next.next) return null; 
    one = one.next;
    two = two.next;
  }
  return one;
}
