export function isPalindrome(list) {
  if (!list) return true;

  const stack = [list];
  let one = list;
  let two = list;

  while (two.next && two.next.next) {
    one = one.next;
    stack.push(one);
    two = two.next.next;
  }

  if (!two.next) {
    stack.pop();
  }

  while (one && stack.length) {
    one = one.next;
    if (one.val !== stack.pop().val) {
      return false;
    }
  }

  return true;
}
