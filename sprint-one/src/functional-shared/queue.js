var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {
    first: 1,
    last: 1
  };

  _.extend(storage, queueMethods);

  return storage;
};

var queueMethods = {

  enqueue: function(val) {
    this[this.first] = val;
    this.first++;
  },

  dequeue: function() {
    var popped = this[this.last];
    delete this[this.last];
    this.last++;
    return popped;
  },

  size: function() {
    if (this.first <= this.last) {
      return 0;
    }
    return this.first - this.last;
  }

};


