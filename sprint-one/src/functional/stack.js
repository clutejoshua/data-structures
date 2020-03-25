var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var key = 1;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[key] = value;
    key++;
  };

  //xxx.push("a") -> {'1':a}  key ->2
  //xxx.push("b") -> {'1' : a, '2' : b}

  someInstance.pop = function() {
    var popped = storage[key - 1];
    delete storage[key - 1];
    key--;
    return popped;
  };

  someInstance.size = function() {
    if (key <= 0) {
      return 0;
    }
    return key - 1;
  };

  return someInstance;
};
