var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var first = 1;
  var last = 1;

  // Implement the methods below

  // {}

  someInstance.enqueue = function(value) {
    storage[first] = value;
    first++;
  };

  someInstance.dequeue = function() {
    var popped = storage[last];
    delete storage[last];
    last++;
    return popped;
  };
  // {3:a,4:b,5:c,6:a}
  someInstance.size = function() {
    if (first < last) {
      return 0;
    } else {
      return first - last;
    }
  };

  return someInstance;
};
