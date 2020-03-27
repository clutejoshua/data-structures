var Queue = function() {
  var instance = Object.create(queueMethods);
  instance.first = 1;
  instance.last = 1;
  instance.storage = {};
  return instance;

};

var queueMethods = {

  enqueue: function(val) {
    this.storage[this.first] = val;
    this.first++;
  },

  dequeue: function() {
    var popped = this.storage[this.last];
    delete this.storage[this.last];
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


