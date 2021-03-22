function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}


/*

Given the root of a binary search tree, determine the difference of the maximum
and minimum value.

Note that the function signature is NOT defined as a method on the
BinarySearchTree prototype. Instead, we provide the root as an argument to the
function.

Ex:

     4
   /   \
  2     7
 / \     \
1   3     9
         /
        8

returns 8, becuase 9 - 1 = 8

*/

const bstMinMax = root => {
  //check if the current root is the same as the value getting passed in
  //check if the curr root val is greater than the right node and if it is null
  if (root === this.value) return root
  if (this.right === null) return root
  while (this.right > root) {
      //recursively call bstMinMax on this.right
      if (this.right !== null) {
        return bstMinMax(this.right)
      }
      return this.value
  }

};

const bstMinMax = root => {
  ​
    //Traverse to the left
    const min = node => {
      if (node.left)
        return min(node.left);
        //return the min value
      return node.value;
    };
    
    //Traverse to the right
    const max = node => {
      if (node.right)
        return max(node.right);
        //return the max value
      return node.value;
    };
    
    return max(root) - min(root);
  };
  ​
  ​
  

/*

Extension: (not necessarily related in technique to above problem, but
nevertheless still a BST problem)

Given a binary search tree (BST), find the lowest common ancestor (LCA) of two
given nodes "p" and "q" in the BST. Return the LCA node itself.

Ex:

     4
   /   \
  2     7
 / \     \
1   3     9
         /
        8

The LCA of node 1 and node 3 is node 2.
The LCA of node 8 and node 9 is node 9.
The LCA of node 2 and node 8 is node 4.

*/

const lowestCommonAncestor = (root, p, q) => {
  
};

module.exports = {BinarySearchTree, bstMinMax, lowestCommonAncestor};
