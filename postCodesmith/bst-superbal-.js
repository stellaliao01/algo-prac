/*
  Write a function to see if a binary tree is "superbalanced".
  An empty tree is balanced. A non-empty binary tree T is balanced if:
    1) Left subtree of T is balanced
    2) Right subtree of T is balanced
    3) The difference between heights of left subtree and right subtree is not more than 1.
  example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
  A superbalanced tree is a tree that is balanced at every subtree level as well.
  Ex. 
        4                       4
      /   \                   /   \
     2     7                2       7
    / \     \             /  \     /  \
   1   3     9           1    3   5    9
            /                         /
           8                         8
  The tree on the left is balanced - height of left side is 2, height of right side is 3.
  But, it is not superbalanced since for the 7 subtree, height of left is 0, height of right is 2.
  The tree on the right is superbalanced since the difference in height is not more than 1 at any given subtree.
 */

function BinarySearchTree(value) {
    this.value = value;
    this.right = null;
    this.left = null;
}

// input: BinarySearchTree
// output: boolean

function superbalanced(tree) {
    //code here
    let depth = 0
    function inner(tree, depth) {
        if (depth > 1) return false;
        console.log('This is depth', depth, "tree", tree.value)
        if (tree.right !== null && tree.left !== null) {
            console.log('Inside first if statement')
            return inner(tree.right, depth) || inner(tree.left, depth)
        }
        if (tree.right === null || tree.left === null) {
            console.log('Inside second if statement')
            depth++;
            if (tree.right) return inner(tree.right, depth)
            if (tree.left) return inner(tree.left, depth)
        }
    }

    inner(tree, depth);

    return true;
}

const treeOne = new BinarySearchTree(4);
treeOne.left = new BinarySearchTree(2);
treeOne.left.left = new BinarySearchTree(1);
treeOne.left.right = new BinarySearchTree(3);
treeOne.right = new BinarySearchTree(7);
treeOne.right.right = new BinarySearchTree(9);
treeOne.right.right.left = new BinarySearchTree(8);

console.log(superbalanced(treeOne)); //false


  // const treeTwo = new BinarySearchTree(4);
  // treeTwo.left = new BinarySearchTree(2);
  // treeTwo.left.left = new BinarySearchTree(1);
  // treeTwo.left.right = new BinarySearchTree(3);
  // treeTwo.right = new BinarySearchTree(7);
  // treeTwo.right.left = new BinarySearchTree(5);
  // treeTwo.right.right = new BinarySearchTree(9);
  // treeTwo.right.right.left = new BinarySearchTree(8);

  // console.log(superbalanced(treeTwo)); //true