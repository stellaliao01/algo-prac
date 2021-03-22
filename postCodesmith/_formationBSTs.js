
class TreeNode {
  constructor(x, left = null, right = null) {
    this.value = x === undefined ? 0 : x;
    this.left = left;
    this.right = right;
  }
}
function arrayifyTree(root) {
    if (!root) { return [] }
    var queue = []
    var array = []
    queue.push(root)
    while (queue.length !== 0) {
        var node = queue.shift()
        array.push(node.value)
        if (node.left) { queue.push(node.left) }
        if (node.right) { queue.push(node.right) }
    }
    return array
}
// function searchBST(root, target) {
//     if (target === root.value) {
//         return true;
//     }
//     if (!root) {
//         return false;
//     }
// if (target < root.value && root.left!==null) {
//     searchBST(root.left, target);
// }
// if (target > root.value && root.right!==null) {
//     searchBST(root.right, target);
// }
  
// }


function searchBST(root, target) {
//     if (!root) return false
//     if (root.value === target) return true
  
//     if (target < root.value && root.left) {
//           if (root.left.value === target) {
//             return true
//           } else {
//             return searchBST(root.left, target)
//           }
//       }
  
//     if (target > root.value && root.right) {
//         if (root.right.value === target) {
//           return true
//         } else {
//           return searchBST(root.right, target)
//         }
//     }
//   return false

    if (!root) return false
    if (root.value === target) return true
    
  if (root.value > target) {
    return searchBST(root.left, target)
  } else {
    return searchBST(root.right, target)
  }
}

// // Test Cases
// var tree = new TreeNode(8, new TreeNode(3, new TreeNode(1), new TreeNode(6)), new TreeNode(10, null, new TreeNode(14, new TreeNode(13))))
// console.log(searchBST(null, 1)) // false
// console.log(searchBST(tree, 1)) // true
// console.log(searchBST(tree, 14)) // true
// console.log(searchBST(tree, 2)) // false
// console.log(searchBST(tree, 13)) // true
// console.log(searchBST(new TreeNode(), 0)) // true




function insertIntoBST(root, val) {
    // Write your code here.
    if (!root) return new TreeNode(val)

    if (val > root.value) {
        if (root.right) {
            insertIntoBST(root.right, val)
        } else {
            root.right = new TreeNode(val)
        }
    } else {
        if (root.left) {
            insertIntoBST(root.left, val)
        } else{
            root.left = new TreeNode(val)
        }
    }
    // console.log("root", root)
    return root
}

// Test Cases
// //          6
// //        /   \
// //       3     8
// //     2      

// var tree1 = new TreeNode(6, new TreeNode(3, new TreeNode(2), new TreeNode(4)), new TreeNode(8))
// console.log(arrayifyTree(insertIntoBST(tree1, 7))) // [6, 3, 8, 2, 4, 7]
// console.log(arrayifyTree(insertIntoBST(tree1, 5))) // [6, 3, 8, 2, 4, 7, 5]
// console.log(arrayifyTree(insertIntoBST(tree1, 1))) // [6, 3, 8, 2, 4, 7, 1, 5]
// console.log(arrayifyTree(insertIntoBST(null, 1))) // [1]
// //          6
// //        /   \
// //       3     8
// //      / \    /
// //     2   4  7
// //    /     \
// //   1       5

function validateBST(tree) {
    // Write your code here.
    if (tree === null) return true
    if (tree.right === null && tree.left === null) return true;
    //check if node to the right is greater than root node
    //check if node to the left is less than curr node
    if  ((tree.left === null)) {
        if (tree.right.value > tree.value) {
           return validateBST(tree.right)
        } else {
            return false
        }
    } 
    else if ((tree.right === null)) { 
        if (tree.left.value < tree.value) {
            return validateBST(tree.left)
        } else {
            return false
        }
    } 

    else if ((tree.right.value > tree.value) && (tree.left.value < tree.value)) {
        return validateBST(tree.right) && validateBST(tree.left)
    } 
    return false

//     function dfs (tree, min=-Infinity, max=Infinity) {
//         if (!tree) return true
//         let validMin = min < tree.value
//         let validMax = max > tree.value
//        return dfs(tree.left, min, tree.value) && dfs(tree.right, tree.value, max) && validMin && validMax
//     }
//    return dfs(tree)

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


// Test Cases
var tree1 = new TreeNode(2, new TreeNode(1), new TreeNode(3))
var tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(3))
var tree3 = new TreeNode(8, new TreeNode(3, new TreeNode(1), new TreeNode(6)), new TreeNode(10, null, new TreeNode(14, new TreeNode(13))))
console.log(validateBST(null)) // true
console.log(validateBST(tree1)) // true
console.log(validateBST(tree2)) // false
console.log(validateBST(tree3)) // true
console.log(validateBST(new TreeNode())) // true



var levelOrder = function(root) {
    if(!root) return [];
    let queue = [root], output = [];
    while(queue.length) {
        let temp = [], size = queue.length
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