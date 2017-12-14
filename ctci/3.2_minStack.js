export class MinStack {
  constructor() {
    this.storage = [];
    this.memo = [];
    this.pointer = 0;
  }

  push(e) {
    this.storage[this.pointer] = e;
    const minSoFar = this.memo[this.pointer - 1] || Number.POSITIVE_INFINITY;
    this.memo[this.pointer] = Math.min(minSoFar, e);
    this.pointer += 1;
  }

  pop() {
    return this.storage[--this.pointer];
  }

  min() {
    return this.memo[this.pointer - 1];
  }

  isEmpty() {
    return this.pointer === 0;
  }
}