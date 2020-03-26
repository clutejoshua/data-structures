var Stack = function() {
  var storage = {
    key: 1
  };

  _.extend(storage, sharedMethods);

  return storage;
};

sharedMethods = {

  push: function(val) {
    this[this.key] = val;
    this.key++;
  },

  pop: function() {
    // debugger;
    var popped = this[this.key - 1];
    delete this[this.key - 1];
    this.key--;
    return popped;
  },

  size: function () {
    if (this.key <= 0) {
      return 0;
    }
    return this.key - 1;
  }
};

// someStack = Stack();
// someStack.push('a');

