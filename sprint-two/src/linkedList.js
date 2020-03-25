var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
  };

  list.removeHead = function() {
  };

  // O(n) time | O(1) space
  list.contains = function(target) {
    let node = this.head;
    while (node !== null && node.value !== value) {
      node = node.next;
    }
    return node !== null;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
