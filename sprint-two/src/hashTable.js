var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

// O(1) time | O(1) space
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);

  if (!bucket) {
    bucket = [];
    this._storage.set(index, bucket);
  }

  var isFound = false;

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      tuple[1] = v;
      isFound = true;
      break;
    }
  }

  if (!isFound) {
    bucket.push([k, v]);
  }
};

// O(1) time | O(1) space
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      return tuple[1];
    }
  }

};

// O(1) time | O(1) space
HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      bucket.splice(i, 1);
    }
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
