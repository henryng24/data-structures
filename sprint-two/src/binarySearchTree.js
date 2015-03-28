var BinarySearchTree = function(value){
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
  if (value < this.value) {
    if (this.left === null) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }
  if (value > this.value) {
    if (this.right === null) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
  
  // var checkTree = function(value, tree) {
  //   if(value < tree.value) {
  //     if(tree.left === null) {
  //       tree.left = new BinarySearchTree(value);
  //     } else {
  //       checkTree(value, tree.left)
  //     }
  //   } else if (value > tree.value) {
  //     if(tree.right === null) {
  //       tree.right = new BinarySearchTree(value);
  //     } else {
  //       checkTree(value, tree.right);
  //     }
  //   }
  // };
  // checkTree(value, this);
};

BinarySearchTree.prototype.contains = function(target) {
  if (target === this.value) {
    return true;
  }

  if (target < this.value && this.left !== null) {
    return this.left.contains(target);
  }

  if (target > this.value && this.right !== null) {
    return this.right.contains(target);
  }

  return false;

  // var found = false;
  // var recurse = function(target, tree) {
  //   if (target === tree.value) {
  //     found = true;
  //   }
  //   if (target < tree.value && tree.left !== null) {
  //     recurse(target, tree.left);
  //   }
  //   if (target > tree.value && tree.right !== null) {
  //     recurse(target, tree.right);
  //   }
  // };
  // recurse(target, this);
  // return found;
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {

  callback(this.value);

  if (this.left !== null) {
    this.left.depthFirstLog(callback);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(callback);
  }

};
/*
 * Complexity: What is the time complexity of the above functions?
 */
