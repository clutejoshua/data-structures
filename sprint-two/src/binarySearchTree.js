var BinarySearchTree = function(value) {
  newTree = {};
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  extend(newTree, binaryMethods);

  return newTree;
};

var extend = function(ob1, ob2) {
  for (var key in ob2) {
    ob1[key] = ob2[key];
  }
};

binaryMethods = {};

// O(log(n)) time | O(1) space
binaryMethods.insert = function(value) {
  if (value >= this.value) {
    if (!this.right) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  } else {
    if (!this.left) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }
};

// O(log(n)) time | O(1) space
binaryMethods.contains = function(value) {
  if (value === this.value) {
    return true;
  }
  if (value >= this.value) {
    if (!this.right) {
      return false;
    } else {
      return this.right.contains(value);
    }
  }
  if (value < this.value) {
    if (!this.left) {
      return false;
    } else {
      return this.right.contains(value);
    }
  }
};

// O(log(n)) time | O(1) space
binaryMethods.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// O(log(n)) time
//      10
//     /  \
//    5    12
//   / \     \
//  2   6     15
// /     \    /  \
// 1      8  13   22