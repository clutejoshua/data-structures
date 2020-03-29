var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

// O(1) time | O(1) space
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index);
  // this._storage.set(index, v);
  if (!bucket) {
    bucket = [];
    this._storage.set(index, bucket);
  }

  let found = false;

  for (let i = 0; i < bucket.length; i++) {
    let tuple = bucket[i];
    if (tuple[0] === k) {
      tuple[1] = v;
      found = true;
      break;
    }
  }

  if (!found) {
    bucket.push(k, v);
  }
};

// O(1) time | O(1) space
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index);
  if (!bucket) {
    return null;
  }
  for (let i = 0; i < bucket.length; i++) {
    let tuple = bucket[i];
    if (tuple[0] === k) {
      return tuple[1];
    }
  }
  return null;
};

// O(1) time | O(1) space
HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index);
  if (!bucket) {
    return null;
  }

  for (let i = 0; i < bucket.length; i++) {
    let tuple = bucket[i];
    if (tuple[0] === k) {
      bucket.splice(i, 1);
      return tuple[1];
    }
  }

  return null;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
