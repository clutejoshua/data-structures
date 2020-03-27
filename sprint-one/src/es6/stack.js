class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // Work within the src/es6/ folder
  // Capitalize your function name to indicate to others that it is intended to be run with the keyword new
  // Use the keyword new when instantiating your class
  // Use the keyword this in your constructor
  // Explicitly declare a class method named constructor
  // Declare all other class methods within the class declaration

  constructor() {
    this.storage = {};
    this.key = 1;
  }

  push(value) {
    this.storage[this.key] = value;
    this.key++;
  }

  pop() {
    var popped = this.storage[this.key - 1];
    delete this.storage[this.key - 1];
    this.key--;
    return popped;
  }

  size() {
    if (this.key <= 0) {
      return 0;
    }
    return this.key - 1;
  }
}

