export class StackOfStacks {
  constructor(limit) {
    if (!limit) throw new Error('maxSize argument is required');
    this.stacks = [];
    this.limit = limit;
  }

  push(e) {
    let stack = this.stacks[this.stacks.length - 1];
    if (!stack || stack.length === this.limit) {
      stack = [];
      this.stacks.push(stack);
    }
    stack.push(e);
  }

  pop() {
    if (this.stacks.length === 0) return undefined;

    const stack = this.stacks[this.stacks.length - 1];
    const result = stack.pop();
    if (stack.length === 0) this.stacks.pop();

    return result;
  }

  popAt(s) {
    let stack = this.stacks[s - 1];
    if (!stack) throw new Error('Invalid stack number');

    const result = stack.pop();

    for (let i = s; i < this.stacks.length; i++) {
      this.stacks[i - 1].push(this.stacks[i].shift());
    }

    if (this.stacks[this.stacks.length - 1].length === 0) this.stacks.pop();

    return result;
  }
}
