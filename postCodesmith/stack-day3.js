// // Write a program to sort a stack such that the smallest items are on the top. You can use an additional temporary stack, but you may not copy the elements into any other data structure (such as an array). The stack supports the following operations: push pop, peek, and isEmpty.

// class Stack {
//     constructor() {
//         this.values = {};
//         this.size = 0;
//     }
//     push(val) {
//         this.values[this.size++] = val;
//     }
//     pop() {
//         let temp = this.values[--this.size];
//         delete this.values[this.size];
//         return temp;
//     }
//     peek() {
//         //retrieve element at top of stack w/o deleting it
//         return this.values[this.size - 1];
//     }
//     isEmpty() {
//         if (this.size === 0) return true;
//         return false;
//     }
// }
// const myStack = new Stack();
// myStack.push(3);
// myStack.push(5);
// myStack.push(2);
// console.log(myStack.pop()); //2
// console.log(myStack.pop()); //5
// console.log(myStack.pop()); //3
// console.log(myStack.isEmpty()) //true



function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var hasPathSum = function (root, sum) {
    let flag = false

    function helper(node, currentSum) {
        if (node === null || flag) {
            return
        }
        currentSum += node.val


        if (!node.left && !node.right && currentSum === sum) {
            flag = true
        }

        helper(node.left, currentSum)
        helper(node.right, currentSum)
    }
    helper(root, 0)
}

console.log(hasPathSum([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1], 22))