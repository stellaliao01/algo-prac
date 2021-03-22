
class TreeNode {
    constructor(value = 0, leftChild = null, rightChild = null) {
        this.value = value
        this.left = leftChild
        this.right = rightChild
    }
}
// // function countTreeNodesIterative(root) {
// //     // Write your code here.
// //     let current = root
// //     if (!root) return 0
// //     const stack = []
    
// //     function countNodes (node) {
// //       if (!node) return
      
// //       stack.push(0)
// //       countNodes(node.left)
// //       countNodes(node.right)
// //     }
// //     countNodes(current)
// //     return stack.length
// // }

// // function countTreeNodesRecursive(root) {
// //     // Write your code here
// //   if (!root) return 0
// //   let count = 1
  
// //   function helper(root) {
// //      if (root) {
// //           if( root.left){
// //                 count +=1
// //                  helper(root.left)
// //            }
// //           if( root.right){
// //                 count +=1
// //                  helper(root.right)
// //            }
// //       }
// // }
// //   helper(root)
// //   return count
// // }

// // // Test Cases
// // console.log(countTreeNodesIterative(null)) // 0
// // console.log(countTreeNodesIterative(new TreeNode(1, new TreeNode(2), new TreeNode(3)))) // 3
// // console.log(countTreeNodesIterative(new TreeNode(2, new TreeNode(29, new TreeNode(26)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9)))))) // 6
// // console.log(countTreeNodesIterative(new TreeNode())) // 1

// // console.log(countTreeNodesRecursive(null)) // 0
// // console.log(countTreeNodesRecursive(new TreeNode(1, new TreeNode(2), new TreeNode(3)))) // 3
// // console.log(countTreeNodesRecursive(new TreeNode(2, new TreeNode(29, new TreeNode(26)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9)))))) // 6
// // console.log(countTreeNodesRecursive(new TreeNode())) // 1

// function countTreeNodesRecursive(root) {
//     // Write your code here.
//     if (!root) return null
//     let count = 1
//      function dfs(root) {
//      if (root) {
//           if( root.left){
//                 count +=1
//                  dfs(root.left)
//            }
//           if( root.right){
//                 count +=1
//                  dfs(root.right)
//            }
//       }
// }
//     dfs(root)
//     return count
// }

// // function countTreeNodesIterative(root) {
// //     // Write your code here.
// //     // if (!root) return null
// //     // let result = [];
// //     // if (!root.left) result.push(countTreeNodesIterative(root.left));
// //     // result = result.push(root.val);
// //     // if (!root.right) result.push(countTreeNodesIterative(root.right));
// //     // return result.length;
// // }

// // // Test Cases
// // console.log(countTreeNodesIterative(null)) // 0
// // console.log(countTreeNodesIterative(new TreeNode(1, new TreeNode(2), new TreeNode(3)))) // 3
// // console.log(countTreeNodesIterative(new TreeNode(2, new TreeNode(29, new TreeNode(26)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9)))))) // 6
// // console.log(countTreeNodesIterative(new TreeNode())) // 1
// // console.log(countTreeNodesRecursive(null)) // 0
// // console.log(countTreeNodesRecursive(new TreeNode(1, new TreeNode(2), new TreeNode(3)))) // 3
// // console.log(countTreeNodesRecursive(new TreeNode(2, new TreeNode(29, new TreeNode(26)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9)))))) // 6
// // console.log(countTreeNodesRecursive(new TreeNode())) // 1


// //sum nodes in bt
// // function sumBTIterative(root) {
// //     // Write your code here.
    
// // }

// function sumBTRecursive(root) {
//     // Write your code here.
//     if (!root) return 0
//     let sum = 0
//     function dfs(root) {
//         if (root) {
//             sum+=root.value
//              if(root.left){
//                 dfs(root.left)
//               }
//              if(root.right){
//                 dfs(root.right)
//               }
//          }
//    }
//        dfs(root)
//        return sum
// }

// // Test Cases
//     //     1
//     // 2       3
// // console.log(sumBTIterative(null)) // 0
// // console.log(sumBTIterative(new TreeNode(1, new TreeNode(2), new TreeNode(3)))) // 6 
// // console.log(sumBTIterative(new TreeNode(1))) // 1
// // console.log(sumBTRecursive(null)) // 0
// // console.log(sumBTRecursive(new TreeNode(1, new TreeNode(2), new TreeNode(3)))) // 6
// // console.log(sumBTRecursive(new TreeNode(1))) // 1

// //Find the max element in a binary tree
// function findMaxBT(root) {
//     // Write your code here.
//     if (!root) return null
//     let max = -Infinity
//     function dfs(root) {
//         if (root) {
//             if (root.value > max) {
//                 max = root.value
//             }
//              if(root.left){
//                 dfs(root.left)
//               }
//              if(root.right){
//                 dfs(root.right)
//               }
//          }
//    }
//        dfs(root)
//        return max    
// }

// // // Test Cases
// // console.log(findMaxBT(null)) // null
// // console.log(findMaxBT(new TreeNode(1, new TreeNode(2), new TreeNode(3)))) // 3
// // console.log(findMaxBT(new TreeNode(2, new TreeNode(29, new TreeNode(26)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9)))))) // 29
// // console.log(findMaxBT(new TreeNode(1))) // 1

// //Find the height of a binary tree
// function findHeight(root) {
//     if (!root) return null
//     let leftH = 1
//     let rightH = 1
//     function dfs(root) {
//         if (root) {
//              if(root.left){
//                 leftH+=1
//                 dfs(root.left)
//               }
//              if(root.right){
//                 rightH+=1
//                 dfs(root.right)
//               }
//          }
//    }
//        dfs(root)
//        return Math.max(leftH, rightH)

//        //recursive
         
//   // left depth
//   // right depth
//   let leftHeight = deepestNodeRecursive(root.left)
//   let rightHeight = deepestNodeRecursive(root.right)
  
//   // whichever is larger
//   // return larger + 1
//   return Math.max(leftHeight, rightHeight) + 1
// }



// // Test Cases
// // console.log(findHeight(null)) // 0
// // console.log(findHeight(new TreeNode(1, new TreeNode(2), new TreeNode(3)))) // 2
// // console.log(findHeight(new TreeNode(2, new TreeNode(29, new TreeNode(26)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9)))))) // 4
// // console.log(findHeight(new TreeNode())) // 1

// //Find an element in a binary tree using DFS or BFS
// function searchBT(root, target) { 
//     // Write your code here.
//     if (!root) return false
//     let result = false
//     function dfs(root) {
//         if (root.value === target) result = true
//         if (root) {
//              if(root.left){
//                 dfs(root.left)
//               }
//              if(root.right){
//                 dfs(root.right)
//               }
//          }
//    }
//        dfs(root)
//        return result
// }

// // Test Cases
// // var tree1 = new TreeNode(3, new TreeNode(29, new TreeNode(2)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9))))
// // console.log(searchBT(null, 1)) // false
// // console.log(searchBT(tree1, 9)) // true
// // console.log(searchBT(tree1, 1)) // false
// // console.log(searchBT(tree1, 2)) // true
// // console.log(searchBT(new TreeNode(1), 2)) // false

// function deepestNode(root, lastNode=null) {
//     if (!root) return lastNode
//     return deepestNode(root.left, lastNode=root.left) && 
//     deepestNode(root.right, lastNode=root.right)
// }

// var tree1 = new TreeNode(3, new TreeNode(29, new TreeNode(2)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9))))

// console.log(deepestNode(tree1))

// // class TreeNode{
// //     constructor(value, left=null, right=null) {
// //       this.value = value;
// //       this.left = left;
// //       this.right = right
// //     }
    
//     addLeft(node) {
//       this.left = node
//     }
    
//       addRight(node) {
//         this.right = node
//       }
//   }
  
//   let tree = new TreeNode('a')
//   tree.addLeft(new TreeNode("b"))
//   tree.left.addLeft(new TreeNode('d'))
//   tree.addRight(new TreeNode('c'))
  
//   /*
//   console.log(tree)
//   console.log(tree.left)
//   console.log(tree.right)
//   console.log(tree.left.left)
//   */
//   // a 
//   // [b,c]
  
//   function deepestNode(root) {
//     const queue = []
//     queue.push(root)
//     let lastNode;
    
//     while (queue.length) {
//       lastNode = queue.shift() 
     
//       if(lastNode.left){
//         queue.push(lastNode.left) 
//       }
//       if(lastNode.right){
//         queue.push(lastNode.right)
//       }
      
      
//     }
//     return lastNode
  
//   }
//   /*
//     a
    
    
//     return a and its "depth"
//     a  0
//    b c 1
//   d    2
//    [d, 2], [null, -Infinity]
   
//        a
//    b        c
//    [d, 2]   [c, 1]
//    a
//    [d,2]
//    [d,2] => d
   
//    base case: if (!root) return depth
   
   
//   .       a    0
//   .      /  \
//   .     b    c 1
//   .    /
//   .   d        2
  
  
//   */
  
//   function deepestNodeRecursive(root) {
//     let result = traverse([root, 0]); // [node, height/depth]
//     return result[0];
    
//   }
  
  
//   function traverse(nodeAndHeight) {
//      // base return -1
//     let [node, height] = nodeAndHeight;  
//     if(!node) return [null, -1];
    
//     if (!node.right && !node.left) return [node, height];
//     // recursive step
  
//       let rightHeight = traverse([node.right, height +=1]);
  
//       let leftHeight= traverse([node.left, height +=1]);
  
   
//     if(leftHeight[1] > rightHeight[1]){
//       return leftHeight
//     }
//     return rightHeight
    
  
//   }
  

//   function sumBTIterative(root) {
//     // Write your code here.
//     if (!root) return 0
//     let sum = 0
    
//     let queue = [root]
    
//     while(queue.length){
//       let curr = queue.shift()
//       sum += curr.value
//       if (curr.left) {
//         queue.push(curr.left)
//       }
//       if (curr.right) {
//         queue.push(curr.right)
//       }
//     }
//     return sum
// }

// function countTreeNodesIterative(root) {
//   // Write your code here.
//   if (!root) return 0
//   let count = 0
//   let queue = []
  
//   queue.push(root)

//   while(queue.length) {
//     let curr = queue.shift()
//     count++
//     if (curr.left) {
//       queue.push(curr.left)
//     }
//     if (curr.right) {
    
//       queue.push(curr.right)
//     }
//   }
// return count

// }


var levelOrder = function(root) {
  if(!root) return [];
  let queue = [root], output = [];

  while(queue.length) {
      let temp = []
      let size = queue.length
      for (let i = 0; i < size; i++) {
          let curr = queue.shift();
          temp.push(curr.val)
          if(curr.left) queue.push(curr.left);
          if(curr.right) queue.push(curr.right);
      }
      output.push(temp);
  }
  return output;
}

var tree1 = new TreeNode(3, new TreeNode(29, new TreeNode(2)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9))))
  console.log(levelOrder(tree1))