export class TripleStack {
  constructor(n = 3) {
    this.n = n;
    this.storage = [];
    this.pointers = [];

    for (let i = 1; i <= n; i++) {
      this.pointers[i] = i - 1;
    }
  }

  size(s) {
    return Math.floor(this.pointers[s] / this.n);
  }

  isEmpty(s) {
    return this.size(s) === 0;
  }

  peek(s) {
    return this.storage[this.pointers[s] - this.n];
  }

  pop(s) {
    if (this.isEmpty(s)) return undefined;
    this.pointers[s] -= this.n;
    const i = this.pointers[s];
    const result = this.storage[i];
    this.storage[i] = undefined;
    return result;
  }

  push(s, e) {
    this.storage[this.pointers[s]] = e;
    this.pointers[s] += this.n;
  }
}