

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

// O(1) time | O(1) space
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index);
  this._storage.set(index, v);
};

// O(1) time | O(1) space
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index);
  return bucket;
};

// O(1) time | O(1) space
HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index);
  if (bucket === k) {
    delete bucket;
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


