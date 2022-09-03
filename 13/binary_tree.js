class BinarTree {
  constructor() {
    this.root = null;
  }
  add(value) {
    if (!this.root) {
      this.root = new treeNode(value);
    } else {
      let node = this.root;
      let newNode = new treeNode(value);
      while (node) {
        if (value > node.value) {
          if (!node.right) {
            break;
          }
          node = node.right;
        } else {
          if (!node.left) {
            break;
          }
          node = node.left;
        }
      }
      if (value > node.value) {
        node.right = newNode;
      } else {
        node.left = newNode;
      }
    }
  }
  print(root = this.root) {
    if (!root) {
      return tree;
    }
    console.log(root.value);
    this.print(root.left);
    this.print(root.right);
  }
}

class treeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const tree = new BinarTree();

tree.add(5);
tree.add(2);
tree.add(6);
tree.add(2);
tree.add(1);
tree.print();
