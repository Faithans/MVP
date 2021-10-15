// Instantiate a new graph
var Graph = function() {
  this._nodes = []; // [1, 2, 3];[
  this._edges = []; // [[false, true, false], [true, false, false], [false, false, false]];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this._nodes.push(node);
  for (var i = 0; i < this._edges.length; i++) {
    var column = this._edges[i];
    column.push(false);
  }
  var newColumn = (new Array(this._nodes.length)).fill(false);
  this._edges.push(newColumn);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this._nodes.length; i++) {
    var element = this._nodes[i];
    if (node === element) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var index = this._indexOf(node);
  if (index >= 0) {
    this._nodes.splice(index, 1);
    this._edges.splice(index, 1);
    for (var i = 0; i < this._edges.length; i++) {
      this._edges[i].splice(index, 1);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var indexFrom = this._indexOf(fromNode);
  var indexTo = this._indexOf(toNode);
  if (indexFrom >= 0 && indexTo >= 0) {
    return this._edges[indexFrom][indexTo];
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var indexFrom = this._indexOf(fromNode);
  var indexTo = this._indexOf(toNode);
  if (indexFrom >= 0 && indexTo >= 0) {
    this._edges[indexTo][indexFrom] = true;
    this._edges[indexFrom][indexTo] = true;
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var indexFrom = this._indexOf(fromNode);
  var indexTo = this._indexOf(toNode);
  if (indexFrom >= 0 && indexTo >= 0) {
    this._edges[indexTo][indexFrom] = false;
    this._edges[indexFrom][indexTo] = false;
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this._nodes.length; i++) {
    cb(this._nodes[i]);
  }
};

Graph.prototype._indexOf = function (node) {
  for (var i = 0; i < this._nodes.length; i++) {
    var element = this._nodes[i];
    if (node === element) {
      return i;
    }
  }
  return -1;
};
      module.exports=Graph