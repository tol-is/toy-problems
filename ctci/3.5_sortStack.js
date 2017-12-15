export function sortStack(stack) {
  const tmpStack = [];

  while (!isEmpty(stack)) tmpStack.push(stack.pop());

  while (!isEmpty(tmpStack)) {
    if (peek(stack) >= peek(tmpStack)) {
      stack.push(tmpStack.pop());
    } else {
      const tmpElement = tmpStack.pop();
      while (peek(stack) < tmpElement) tmpStack.push(stack.pop());
      stack.push(tmpElement);
    }
  }

  return stack;
}
