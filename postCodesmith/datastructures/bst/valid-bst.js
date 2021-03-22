/* 
  Given a node representing the root of a binary tree, write a function to check if it is a valid binary *search* tree. 
  
  A binary tree is a valid binary search tree if it satisfies the following constraints:
    - For any given node, the value of ALL of the child nodes in its left branches must be less than its value.
    - For any given node, the value of ALL of the child nodes in its right branches must be greater than its value.
    - The tree contains no duplicate values.

  For example, this would be a valid BST:

         4
       /   \ 
     2      5
   /   \
  1     3

  whereas this would not be a valid BST:

         3
       /   \
     2      5
   /   \
  1    *4*

  because the node with value 4 on the left-hand side of the tree, but it's value is greater than the root node value 3.
  For this to be considered a valid BST the tree would need to look like this:
  
         3
       /   \
     2      5
   /      /
  1     *4*

*/


function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

const validBST = (tree, min = -Infinity, max = Infinity) => {
  // base case 1: when we reach the end - a null node, return true
  if (!tree) return true;
  // base case 2: when we find a node with a value that's out of bounds
  if (tree.value <= min || tree.value >= max) return false;
  // when traversing left, make curr node's value the new max;
  // when traversing right, make curr node's value the new min;
  return validBST(tree.left, min, tree.value) && validBST(tree.right, tree.value, max);
};


const validBST = tree => {
  function checkNode(node, min, max) {
    if(node === null) return true;
    if(min !== undefined && node.value <= min) return false;
    if(max !== undefined && node.value >= max) return false;
    return checkNode(node.right, node.value, max) && checkNode(node.left, min, node.value);
  }
  return checkNode(tree);
}

module.exports = { BinaryTree, validBST };
module.exports = { BinaryTree, validBST };
function bstTree(value) {
  this.value = value
  this.right = null
  this.left = null


}

bstTree.prototype.checkIfBst = function () {
  // console.log('this is', this);
  if (this.value === null) return true;
  if (this.right === null && this.left === null) return true;
  //check the values on the left and right
  if (this.left.value < this.value && this.right.value > this.value) {
    return this.left.checkIfBst() && this.right.checkIfBst();
  }
  return false;

}

const myInvalidBST = new bstTree(5);
myInvalidBST.right = new bstTree(10);
myInvalidBST.left = new bstTree(10);
myInvalidBST.right.right = new bstTree(30);
myInvalidBST.left.right = new bstTree(10);
myInvalidBST.right.left = new bstTree(2);
myInvalidBST.left.left = new bstTree(1);
console.log(myInvalidBST);
console.log(myInvalidBST.checkIfBst()); //false


const myValidBST = new bstTree(7);
myValidBST.left = new bstTree(3);
myValidBST.right = new bstTree(15);
console.log(myValidBST);
console.log(myValidBST.checkIfBst()); //true
