var Queue = function() {
  this.storage = {};
  this.first = 1;
  this.last = 1;
};

Queue.prototype.enqueue = function(val) {
  debugger;
  this.storage[this.first] = val;
  this.first++;
};

Queue.prototype.dequeue = function() {
  var popped = this.storage[this.last];
  delete this.storage[this.last];
  this.last++;
  return popped;
};

Queue.prototype.size = function() {
  if (this.first <= this.last) {
    return 0;
  }
  return this.first - this.last;
};