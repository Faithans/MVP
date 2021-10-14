var BinarySearchTree = function(value) {
  var node = {};
  node.value = value;
  node.left = null;
  node.right = null;
  node.insert = binarySearchTreeMethods.insert;
  node.contains = binarySearchTreeMethods.contains;
  node.depthFirstLog = binarySearchTreeMethods.depthFirstLog;
  return node;
};

var binarySearchTreeMethods = {};
// O(log(n))
binarySearchTreeMethods.insert = function (newValue) {
  var act = function (side) {
    if (side === null) {
      var newNode = BinarySearchTree(newValue);
      return newNode;
    } else {
      side.insert(newValue);
      return side;
    }
  };
  if (newValue < this.value ) {
    this.left = act(this.left);
  } else {
    this.right = act(this.right);
  }
};
// O(log(n))
binarySearchTreeMethods.contains = function (target) {
  if (this.value === target) {
    return true;
  }
  var findOnSide = function (side) {
    if (side === null) {
      return false;
    } else {
      return side.contains(target);
    }
  };
  if (target < this.value) {
    return findOnSide(this.left);
  } else {
    return findOnSide(this.right);
  }
};
// O(n)
binarySearchTreeMethods.depthFirstLog = function (func) {
  func(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(func);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(func);
  }
};

