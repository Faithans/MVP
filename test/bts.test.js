var fs = require('fs');
var expect = require("chai").expect;
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
////////////////////////////////////////////////////////////////////////////
describe('simple test of binary search tree',() => {
  let testResult = {};

  beforeEach(function() {
    binarySearchTree = BinarySearchTree(5);
  });

  afterEach(function() {
    testResult[this.currentTest.title] = this.currentTest.state;
  })

  after(function(done) {
    fs.writeFile('test.txt', JSON.stringify(testResult), function (err) {
      if (err) throw err;
      done();
    });
  })

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
  });

  it('should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(7);
  });

  it('should have a working "contains" method', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5, 2, 3, 7]);
  });
})