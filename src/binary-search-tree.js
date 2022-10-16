const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

class BinarySearchTree {
  constructor() {
    this.rootx = null
  }

  root() {
    return this.rootx
  }

  add(data) {
    function addNode(node, data) {
      if (node === null) {
        return new Node(data)
      }
      if (node.data === data) {
        return node
      }
      node.data < data ? node.right = addNode(node.right, data) : node.left = addNode(node.left, data)
      return node
    }

    this.rootx = addNode(this.rootx, data)
  }

  has(data) {
    function hasNode(node, data) {
      if (node === null) {
        return false
      }
      if (node.data === data) {
        return true
      }
      return node.data < data ? hasNode(node.right, data) : hasNode(node.left, data)
    }

    return hasNode(this.rootx, data)
  }

  find(data) {
    function findNode(node, data) {
      if (node === null) {
        return null
      }
      if (node.data === data) {
        return node
      }
      return node.data < data ? findNode(node.right, data) : findNode(node.left, data)
    }

    return findNode(this.rootx, data)
  }

  remove(data) {
    function removeNode(node, data) {
      if (node === null) {
        return null
      }
      if(node.data === data) {
        if(node.left === null && node.right === null) {
          return null
        }
        if(node.right === null) {
          return node = node.left
        }
        if(node.left === null) {
          return node = node.right
        }
        let maxLeft = node.left
        while(maxLeft.right){
          maxLeft = maxLeft.right
        }
        node.data = maxLeft.data
        node.left = removeNode(node.left, node.data)
      }
      if(node.data < data) {
        node.right = removeNode(node.right, data)
        return node
      }
      if(node.data > data) {
        node.left = removeNode(node.left, data)
        return node
      }
    }

    this.rootx = removeNode(this.rootx, data)
  }

  min() {

    if (!this.rootx) {
      return;
    }

    let node = this.rootx;
    while (node.left) {
      node = node.left;
    }

    return node.data;

  }

  max() {
    if (!this.rootx) {
      return;
    }

    let node = this.rootx;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};