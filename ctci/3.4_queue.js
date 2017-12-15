export class Queue {
  constructor() {
    this.inbox = [];
    this.outbox = [];
  }

  enqueue(e) {
    this.inbox.push(e);
  }

  dequeue() {
    if (this.outbox.length === 0) {
      if (this.inbox.length === 0) throw new Error('queue is empty');
      while (this.inbox.length > 0) {
        this.outbox.push(this.inbox.pop());
      }
    }
    return this.outbox.pop();
  }
}
