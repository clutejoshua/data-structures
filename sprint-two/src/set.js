var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = 0;
  return set;
};

var setPrototype = {};

// O(1) time | O(1) space
setPrototype.add = function(item) {
  if (this.item === undefined) {
    this[this._storage] = item;
    this._storage++;
  }
  return this;
};

// O(n) time | O(1) space
setPrototype.contains = function(item) {
  for (let key in this) {
    if (this[key] === item) {
      return true;
    }
  }
  return false;
};

// O(n) time | O(1) space
setPrototype.remove = function(item) {
  for (let key in this) {
    if (this[key] === item) {
      delete this[key];
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
