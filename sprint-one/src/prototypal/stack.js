var Stack = function() {
  var instance = Object.create(stackMethods);
  instance.key = 1;
  instance.storage = {};
  return instance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.key] = value;
    this.key++;
  },

  pop: function() {
    var popped = this.storage[this.key - 1];
    delete this.storage[this.key];
    this.key--;
    return popped;
  },

  size: function() {
    if (this.key <= 0) {
      return 0;
    }
    return this.key - 1;
  }

};

// someInstance = stack();
// someInstance.push("a");

// {
//   storage:{}
//   key : 1
//   push
//   pop
//   size
// }
