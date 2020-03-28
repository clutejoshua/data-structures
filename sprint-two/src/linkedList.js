var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // O(1) time | O(1) space
  list.addToTail = function(value) {
    let tailNode = Node(value);

    if (list.tail) {
      list.tail.next = tailNode;
    }

    list.tail = tailNode;

    if (!list.head) {
      list.head = tailNode;
    }
  };

  // O(1) time | O(1) space
  list.removeHead = function() {
    let newHead = list.head.next;
    let oldHead = list.head.value;
    list.head = newHead;

    return oldHead;
  };

  // O(n) time | O(1) space
  list.contains = function(target) {
    for (let node in list) {
      if (list[node].value === target) {
        return true;
      }
    }
    return false;
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

