class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.first = 1;
    this.last = 1;
  }

  enqueue(val) {
    this.storage[this.first] = val;
    this.first++;
  }

  dequeue() {
    var popped = this.storage[this.last];
    delete this.storage[this.last];
    this.last++;
    return popped;
  }

  size() {
    if (this.first <= this.last) {
      return 0;
    }
    return this.first - this.last;
  }
}

// var test = new Queue();
// console.log(test.enqueue("a"));
// console.log(test);