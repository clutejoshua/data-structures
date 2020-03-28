var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

// O(1) time | O(n) space
treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

// O(n) time | O(n) space (callstack)
treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }

  if (this.children.length) {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
  }

  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
