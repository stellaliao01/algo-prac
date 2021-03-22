function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

/*

Given the root of a binary search tree, reverse the binary search tree in-place
and return the root. Reverse the tree so that for each node, every number on the
left is greater and every number on the right is lesser.

For example, the original tree:

     4
   /   \
  2     7
 / \     \
1   3     9
         /
        8

reverses to:

     4
   /   \
  7     2
 /     / \
9     3   1
 \
  8

Do this in-place, so that we never use the BinarySearchTree constructor to
create any new nodes in memory.

Note that the function signature is NOT defined as a method on the
BinarySearchTree prototype. Instead, we provide the root as an argument to the
function.

*/

const bstReverse = root => {
  if (root.left) bstReverse(root.left);
  if (root.right) bstReverse(root.right);

  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  return root;

};

/*

Extension:

Given an array where elements are sorted in ascending order, convert it to a
height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in
which the depth of the two subtrees of every node never differ by more than 1.

Ex:

Given the sorted array: [0, 3, 4, 6, 8, 9], the output is:

     6 
   /   \
  3     9
 / \   /
0   4 8

Whenever you have two elements in the middle like [1, 4, 7, 8], always
prioritize the rightmost value to place at the top of the tree/subtree,
giving us:

    7
   / \
  4   8
 /
1

(i.e. choose the 7 over the 4 to place at the top of the entire tree, and then
the 4 over the 1 to place at the top of the left subtree. Hint: look up the
Math.ceil function)

*/

const sortedArrayToBST = arr => {
  const generate = (i, j) => {
    if (i > j) return null;

    const mid = Math.ceil((i + j) / 2);
    const subHead = new BinarySearchTree(arr[mid]);

    subHead.left = generate(i, mid - 1);
    subHead.right = generate(mid + 1, j);
    return subHead;
  };

  return generate(0, arr.length - 1);
};

module.exports = { BinarySearchTree, bstReverse, sortedArrayToBST };



//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function replaceNodeValuesBT(root, target, replacement) {
  //check if root exists // else return null
      if (!root) return null
  //check if root.value == target, then set root.value = replacement
      if (root.value === target) {
          root.value = replacement
      }
  //check if root.value is greater or less than the target, 
      //if greater, then traverse the left side of tree
      if (root.value > target && root.left !== null ) {
              if (root.left === target) {
                  root.value = replacement
              } else {
                   replaceNodeValuesBT((root.left), target, replacement)
              }   
      }
      //if less, then traverse the right until target == the value
      if (root.value < target && root.right !== null) {
          if (root.right === target) {
              root.value = replacement
          } else {
              replaceNodeValuesBT((root.right), target, replacement)
          }
      
      }  
      return root
}


 //implement helper function to traverse the tree
// const dfs = (root) => {
//     if (!root) return
//     if (root.value > target) {
//         dfs(root.right)
//     } else if (root.value < target) {
//         dfs(root.left)
//     }
//     else {
//         root.value = replacement
//         return
//     }
// }
// dfs(root)
// return root

function binarySearchClosest(array1, target) {
  //get size of array
  let right = array1.length
  // to target the middle of the array
  let middle;
  //have a minimum variable 
  let left = 0
  //edge case check
  if (target <= array1[0]) return array1[0]
  if (target >= array1[right-1]) return array1[right-1]
  if (!array1.length) return -1
   
  //iterate while the min is less than the length of the array
  while(left < right) {
      //target the middle of array
      middle = (left + right)/2
      //if the element in the middle of the array is === to target/then return the element
      if(array1[middle] === target) {
          return array1[middle]
      }
      //check if target is less than the index, if it is then we want ot check the left of the array
      if (target < array1[middle]) {
          // check if target is greater than the previous element
          if (middle > 0 && target > array1[middle-1]) {
              //checks which is closer to the target
              if (target - array1[middle-1] >= array1[middle] - target) {
                  return array1[middle]
              } else {
                  return array1[middle-1]
              }
            
          }
          right = middle
          //else do the same to the right side of the array
      } else {
          if (middle < left -1 && target < array1[middle+1]) {
              if (target - array1[middle] >= array1[middle+1] - target) {
                  return array1[middle+1]
              } else {
                  return array1[middle]
              }
            
          left = middle +1
      }
      }
  }
  // console.log("middle", middle)
  return array1[middle]
}



//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function replaceNodeValuesBT(root, target, replacement) {
  // check if root exists // else return
      if (!root) return 
  //check if root.value equals target, if it does then replace the root.value with replacment
      if (root.value === target) {
          root.value = replacement
      }
  //else we want to traverse through the rest of the tree 
      replaceNodeValuesBT((root.left), target, replacement)
      replaceNodeValuesBT((root.right), target, replacement)

  return root
}

