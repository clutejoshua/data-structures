var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  extend(newTree, treeMethods);
  newTree.children = [];

  return newTree;
};

var extend = function(ob1, ob2) {
  for (var key in ob2) {
    ob1[key] = ob2[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  let result = false;

  let doesContain = function(inner) {
    if (inner.children.length > 0) {
      for (var i = 0; i < inner.children.length; i++) {   //for in loop / for of loop  - es6 classes
        if (inner.children[i].value === target) {
          result = true;
        } else {
          doesContain(inner.children[i]);
        }
      }
    }
  };
  doesContain(this);
  return result;

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
