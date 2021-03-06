// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
};

// O(1) time | O(1) space
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push([node]);
};

// O(n) time | O(1) space
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i][0] === node) {
      return true;
    }
  }
  return false;
};

// O(n) time | O(1) space
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i][0] === node) {
      this.nodes.splice(i, 1);
    } else if (this.nodes[i][1] === node) {
      this.nodes[i].pop();
    }
  }
};

// O(n) time | O(1) space
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.nodes.length; i++) {
    if ((this.nodes[i][0] === fromNode && this.nodes[i][1] === toNode) || (this.nodes[i][1] === fromNode && this.nodes[i][0] === toNode) ) {
      return true;
    }
  }
  return false;
};

// O(n) time | O(1) space
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i][0] === fromNode) {
      this.nodes[i].push(toNode);
    }
    if (this.nodes[i][0] === toNode) {
      this.nodes[i].push(fromNode);
    }
  }
};

// O(n) time | O(1) space
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.nodes.length; i++) {
    if ((this.nodes[i][0] === fromNode && this.nodes[i][1] === toNode) || (this.nodes[i][1] === fromNode && this.nodes[i][0] === toNode)) {
      this.nodes[i].pop();
    }
  }
};

// O(n) time | O(1) space
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (let i = 0; i < this.nodes.length; i++) {
    cb(this.nodes[i][0]);
  }
  return this.nodes;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


