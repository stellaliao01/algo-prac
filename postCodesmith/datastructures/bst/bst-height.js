function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

/*

Find the tallest height of a binary search tree.

Ex. the tallest height of:

     4
   /   \
  2     7
 / \     \
1   3     9
         /
        8

is 3, because the tallest height of the tree connects the numbers 4 - 7 - 9 - 8
and has 3 links.

*/
const tree = new BinarySearchTree(10);
tree.left = new BinarySearchTree(5);
tree.right = new BinarySearchTree(14);
// adding the two lines below will make it false
// and showcase the memoization
tree.right.right = new BinarySearchTree(15);
tree.right.right.right = new BinarySearchTree(16);
tree.right.right.right.right = new BinarySearchTree(17);
tree.right.right.right.right.right = new BinarySearchTree(18);

const bstHeight = (tree) => {
  // empty node will return -1 to account for the +1 we do later
  if (!tree) return -1;
​
  const leftHeight = bstHeight(tree.left);
  const rightHeight = bstHeight(tree.right);
​   console.log(leftHeight, rightHeight)
  return Math.max(leftHeight, rightHeight) + 1;
};
​
console.log(bstHeight(tree))
/*
  Extension:
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
​
const superbalanced = (tree) => {
  // empty tree is superbalanced
  if (tree === null) return true;
​
  // check for 3 conditions: (all three must be true for the entire tree to be superbalanced)
  // is the left subtree superbalanced?
  // is the right subtree superbalanced?
  // is the current tree balanced?
  return (
    superbalanced(tree.left) &&
    superbalanced(tree.right) &&
    Math.abs(bstHeight(tree.left) - bstHeight(tree.right)) <= 1
  );
};
​
// the above solution has some inefficiencies as it is calling bstHeight on either side
// at every level of the subtree which re-calculates the height of the children trees
// this can be improved by creating a memoized version of the bstHeight function
// recursive calls are passed a memo object, which is updated across all recursive
// calls due to being passed by reference
const memoHeight = (tree, memo) => {
  // if call to the current tree node has not been memoized
  if (!memo.has(tree)) {
    if (tree) {
      const leftH = memoHeight(tree.left, memo) + 1;
      const rightH = memoHeight(tree.right, memo) + 1;
      memo.set(tree, Math.max(leftH, rightH));
    }
    // account for recursive calls when argument passed to tree is null
    else memo.set(tree, -1);
  }
  const returnVal = memo.get(tree);
  // return memoized value once available
  return returnVal;
};
​
// optimized version using memoized bstHeight
// recursing through the tree to check the balance of each subtree is unavoidable
// but calculating the height of every subtree can be memoized
// it comes at the cost of using extra O(n) space for the memo
const superbalancedOptimized = (tree) => {
  // a map must be used instead of an object for the memo
  // a map can have keys that are not strings, like references to the tree nodes
  const memo = new Map();
  const checkBalance = (tree) => {
    if (tree === null) return true;
    const returnVal =
      checkBalance(tree.left) &&
      checkBalance(tree.right) &&
      Math.abs(memoHeight(tree.left, memo) - memoHeight(tree.right, memo)) <= 1;
    return returnVal;
  };
​
  return checkBalance(tree);
};
​
/**
 * ========================================================================
 * Solution with extra parameters to format console.logs for demo purposes
 * ========================================================================
 */
// ​
// const bstHeightDemo = (tree, cbIndent, hIndent) => {
//   console.log(
//     '\x1b[32m%s\x1b[33m%s\x1b[0m',
//     `${'|  '.repeat(cbIndent)}`,
//     `${'|  '.repeat(hIndent)}bstHeight(${tree ? tree.value : tree})`,
//   );
//   if (!tree) return -1;
// ​
//   const leftHeight = bstHeightDemo(tree.left, cbIndent, hIndent + 1);
//   const rightHeight = bstHeightDemo(tree.right, cbIndent, hIndent + 1);
// ​
//   return Math.max(leftHeight, rightHeight) + 1;
// };
// ​
// const memoize = (func) => {
//   const memo = new Map();
// ​
//   return (arg, cbIndent, hIndent) => {
//     console.log(
//       '\x1b[32m%s\x1b[33m%s\x1b[0m',
//       `${'|  '.repeat(cbIndent)}`,
//       `${'|  '.repeat(hIndent)}memoizedHeight(${arg ? arg.value : arg})`,
//     );
//     const newIndent = hIndent + 1;
//     let memoized = true;
//     if (!memo.has(arg)) {
//       memoized = false;
//       console.log(
//         '\x1b[32m%s\x1b[33m%s\x1b[31m%s\x1b[0m',
//         `${'|  '.repeat(cbIndent)}`,
//         `${'|  '.repeat(hIndent)}`,
//         `⚠ Memoizing this call`,
//       );
//       memo.set(arg, func(arg, cbIndent, newIndent));
//     }
//     const returnVal = memo.get(arg);
//     if (memoized) {
//       console.log(
//         '\x1b[32m%s\x1b[33m%s\x1b[34m%s\x1b[0m',
//         `${'|  '.repeat(cbIndent)}`,
//         `${'|  '.repeat(hIndent)}`,
//         `Was already memoized!`,
//       );
//     }
//     console.log(
//       '\x1b[32m%s\x1b[33m%s\x1b[0m',
//       `${'|  '.repeat(cbIndent)}`,
//       `${'|  '.repeat(hIndent)}${returnVal} for memoizedHeight(${arg ? arg.value : arg})`,
//     );
//     return returnVal;
//   };
// };
// ​
// const notMemoizedBstHeight = memoize(bstHeightDemo);
// ​
// const superbalancedNotOptimized = (tree, cbIndent = 0, hIndent = 0) => {
//   console.log(
//     '\x1b[32m%s\x1b[0m',
//     `${'|  '.repeat(cbIndent)}superbalanced(${tree ? tree.value : tree})`,
//   );
//   if (tree === null) return true;
//   const newIndent = cbIndent + 1;
//   console.log('\x1b[32m%s\x1b[0m', `${'|  '.repeat(newIndent)}1. check left`);
//   const isLeftBalanced = superbalancedNotOptimized(tree.left, newIndent, hIndent);
//   console.log('\x1b[32m%s\x1b[0m', `${'|  '.repeat(newIndent)}2. check right`);
//   const isRightBalanced = superbalancedNotOptimized(tree.right, newIndent, hIndent);
//   console.log('\x1b[32m%s\x1b[0m', `${'|  '.repeat(newIndent)}3. check heights`);
//   const areHeightsOkay =
//     Math.abs(
//       notMemoizedBstHeight(tree.left, newIndent, hIndent) -
//         notMemoizedBstHeight(tree.right, newIndent, hIndent),
//     ) <= 1;
//   return isLeftBalanced && isRightBalanced && areHeightsOkay;
// };
// ​
// const memoHeightDemo = (tree, memo, cbIndent, hIndent) => {
//   console.log(
//     '\x1b[32m%s\x1b[33m%s\x1b[0m',
//     `${'|  '.repeat(cbIndent)}`,
//     `${'|  '.repeat(hIndent)}memoHeight(${tree ? tree.value : tree})`,
//   );
//   const newIndent = hIndent + 1;
//   let memoized = true;
//   if (!memo.has(tree)) {
//     memoized = false;
//     console.log(
//       '\x1b[32m%s\x1b[33m%s\x1b[31m%s\x1b[0m',
//       `${'|  '.repeat(cbIndent)}`,
//       `${'|  '.repeat(hIndent)}`,
//       `⚠ Memoizing this call`,
//     );
//     if (tree) {
//       const leftH = memoHeightDemo(tree.left, memo, cbIndent, newIndent) + 1;
//       const rightH = memoHeightDemo(tree.right, memo, cbIndent, newIndent) + 1;
//       memo.set(tree, Math.max(leftH, rightH));
//     } else memo.set(tree, -1);
//   }
//   const returnVal = memo.get(tree);
//   if (memoized) {
//     console.log(
//       '\x1b[32m%s\x1b[33m%s\x1b[34m%s\x1b[0m',
//       `${'|  '.repeat(cbIndent)}`,
//       `${'|  '.repeat(hIndent)}`,
//       `Was already memoized!`,
//     );
//   }
//   console.log(
//     '\x1b[32m%s\x1b[33m%s\x1b[0m',
//     `${'|  '.repeat(cbIndent)}`,
//     `${'|  '.repeat(hIndent)}${returnVal} for memoHeight(${tree ? tree.value : tree})`,
//   );
//   return returnVal;
// };
// ​
// const superbalancedOptimizedDemo = (tree) => {
//   const memo = new Map();
//   const checkBalance = (tree, cbIndent = 0, hIndent = 0) => {
//     console.log(
//       '\x1b[32m%s\x1b[0m',
//       `${'|  '.repeat(cbIndent)}checkBalance(${tree ? tree.value : tree})`,
//     );
//     if (tree === null) return true;
//     const newIndent = cbIndent + 1;
//     console.log('\x1b[32m%s\x1b[0m', `${'|  '.repeat(newIndent)}1. check left`);
//     const isLeftBalanced = checkBalance(tree.left, newIndent, hIndent);
//     console.log('\x1b[32m%s\x1b[0m', `${'|  '.repeat(newIndent)}2. check right`);
//     const isRightBalanced = checkBalance(tree.right, newIndent, hIndent);
//     console.log('\x1b[32m%s\x1b[0m', `${'|  '.repeat(newIndent)}3. check heights`);
//     const areHeightsOkay =
//       Math.abs(
//         memoHeightDemo(tree.left, memo, newIndent, hIndent) -
//           memoHeightDemo(tree.right, memo, newIndent, hIndent),
//       ) <= 1;
//     const returnVal = isLeftBalanced && isRightBalanced && areHeightsOkay;
//     console.log(
//       '\x1b[32m%s\x1b[0m',
//       `${'|  '.repeat(cbIndent)}${returnVal} for checkBalance(${tree ? tree.value : tree})`,
//     );
//     return returnVal;
//   };
// ​
//   return checkBalance(tree);
// };
// ​
// // MANUAL TEST
// ​
// //      10
// //     /   \
// //    5     14
// //           \
// //            (15)
// //              \
// //              (16)
// //                \
// //                (17)
// //                  \
// //                  (18)
// ​

// console.log(`
// ====================================================
//                     OLD SOLUTION
// ====================================================
// `);
// console.log(superbalancedNotOptimized(tree));
// console.log(`
// ====================================================
//                     NEW SOLUTION
// ====================================================
// `);
// console.log(superbalancedOptimizedDemo(tree));
// ​

