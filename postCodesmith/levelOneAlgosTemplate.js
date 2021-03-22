
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


class ListNode {
    constructor(value = 0, next = null) {
        this.value = value
        this.next = next
    }
}

function arrayify(head) {
    let ptr = head
    var array = []
    while (ptr != null) {
        array.push(ptr.value)
        ptr = ptr.next
    }
    return array
}

// Create a dictionary mapping from elements in the array to the counts. Iterate through the array, incrementing their counts in the array. If you ever hit k, return the element.

function firstKTimes(array, k) {

    }
    
    // // Test Cases
    // console.log(firstKTimes([1, 2, 2, 3, 3], 2)) // 2
    // console.log(firstKTimes([1, 2, 2, 3, 3], 3)) // -1
    // console.log(firstKTimes([], 1)) // -1
    
    
    // Approach # 1. Iterate through the array, keeping track of the count of each element by incrementing them as you go through. Iterate through the dictionary, keeping track of the number of elements whose values are 1.
    // Approach #2. Iterate through the array, keeping track of the count of each element by incrementing them as you go through. When you the count of a number is 1, increment the unique count. When the count of a number os 2, decrement the unique count. When it is any other value, skip.
function numUniques(array) {
      
    }
    
    // // Test Cases
    // console.log(numUniques([])) // 0
    // console.log(numUniques([3, 1, 1, 2, 3, 1, 1, 1, 4])) // 4
    // console.log(numUniques([1])) // 1
    
    // Iterate through the array, keeping track of the count of each element by incrementing them as you go through. Whenever the count of an element is 2, increment the number of duplicated values. When the element is any other value, do nothing.
    function numDuplicates(array) {
        // Write your code here.
    }

// Test Cases
// console.log(numDuplicates([])) // 0
// console.log(numDuplicates([3, 1, 1, 2, 3, 1, 1, 1, 4])) // 2
// console.log(numDuplicates([1])) // 0
    
    
    // • Sort the array as just a normal unsorted array.
    // • Two passes. First pass: count the number of 0s, 1s and 2s. Second pass: overwrite the original array with the correct number of 0s, then 1s, then 2s.
    // • One pass (read about this on Leetcode)
    
const dnf = (nums) => {
        //insertion sort this ish

        
        //two passes

        
        //one pass
        
    };
    
    
// console.log(dnf([2,0,2,1,1,0]))
// console.log(dnf([0, 0, 1, 1, 2, 2]))
    
    
function binarySearch(array, target) {
      // Write your code here.  
    //iteratively 
  
  
    //recurisvely

}
// Test Cases
    // var array = [1, 2, 3, 6, 8, 13, 113, 153, 200]
    // console.log(binarySearch(array, 1)) // 0
    // console.log(binarySearch(array, 200)) // 8
    // console.log(binarySearch(array, 8)) // 4
    // console.log(binarySearch(array, 154)) // -1
    
    /*
    Bubble Sort
        -compares consecutive items/ pushes largest number to the end of the array
        -continutes to iterate over the array until its all sorted
        -time complexity O(n^2), where n is the size of the array
        -best Case: sorted array an input o(n), o(1)
        -worst case: Reversely sorted / Very few elements are in proper place. [ O(N2) ] . O(N2) swaps.
        -Average: [ O(N2) ] . O(N2) swaps.
        -Space Complexity: A temporary variable is used in swapping [ auxiliary, O(1) ]. Hence it is In-Place sort. 
    
        -Advantages: simplest sorting approach, best case is O(n), stable sort, using optimized approach, it can detech already sorted arrays
    
    */
    const bubbleSort = (array) => {
    
   
    }
    // console.log(bubbleSort([7,5,8,1,9,2]))
    
    /*
    Insertion Sort: like the improved version of bubble sort
      -two sub arrays, first one at index 0, compare 
      -needs a counter variable to increment the index after if theres no swap needed
      -increment count after each iteration 
      -worse case time complexity of big On^2, when n is the size of the array
          -when an array starts in decreasing order, you need to swap and compare every single item
      -Best Case Sorted array as input, [ O(N) ]. And O(1) swaps.
      -Worst Case: Reversely sorted, and when inner loop makes maximum comparison, [ O(N2) ] . And O(N2) swaps.
      -Average Case: [ O(N2) ] . And O(N2) swaps.
      -adv: 
      -dis:if N becomes large, it becomes v ineffiecnt
    */
    
    const insertionSort = (array) => {
     
    }
    // console.log(insertionSort([5,3,6,7,8,1]))
    
    /*
    Selection Sort
      -during each iteration, select the smallest from the unsorted array and move it to the sorted 
      -keep track of the current min el and curr item with pointers
      -curr min is always the first  element in the array
      -O(n^2) - n is the size of array
      -Best Case [ O(N2) ]. Also O(N) swaps.
      -Worst Case: Reversely sorted, and when the inner loop makes a maximum comparison. [ O(N2) ] . Also, O(N) swaps.
      -Average Case: [ O(N2) ] . Also O(N) swaps.
      -Space Complexity: [ auxiliary, O(1) ]. In-Place sort. 
      -advantage: It can also be used on list structures that make add and remove efficient, such as a linked list. Just remove the smallest element of unsorted part and end at the end of sorted part.
    The number of swaps reduced. O(N) swaps in all cases.
    In-Place sort.
      -disadvantage: Time complexity in all cases is O(N2), no best case scenario.
    */
const selectionSort = (array) => {
       
    }
     
// console.log(selectionSort([2,3,5,4,8,1]))
    
    /*
    Merge Sort
      -done recursively | divide and conquer method
      -split the array in half until we're left with the individual items
      -then as it's recursively going back up, then compare and place in correct places
      - worst case: O(nlogn) // in the while loop we have to visit the elements n times // logn comes from the maximum height of the bst
    */
    const mergeSort = (array) => {
    
    // * Merge helper function
    const merge = (left, right) => {
    
    }
    };
    
    //   console.log(mergeSort([3,4,5,2,6,7,8,1]))
    // console.log(mergeSort([8,5,2,9,5,6,3]))
    // console.log(mergeSort([]))
    // console.log(mergeSort([-10, 1, 3, 8, -13, 32, 9, 5])) // [-13, -10, 1, 3, 5, 8, 9, 32]
    
    
    /*
    Quick Sort
    
    */
    
    
    /*
    Heap Sort
    
    */
    
//BINARY TREEEEES

function countTreeNodesRecursive(root) {
    // Write your code here.

}

function countTreeNodesIterative(root) {

}

// // Test Cases
// console.log(countTreeNodesIterative(null)) // 0
// console.log(countTreeNodesIterative(new TreeNode(1, new TreeNode(2), new TreeNode(3)))) // 3
// console.log(countTreeNodesIterative(new TreeNode(2, new TreeNode(29, new TreeNode(26)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9)))))) // 6
// console.log(countTreeNodesIterative(new TreeNode())) // 1
// console.log(countTreeNodesRecursive(null)) // 0
// console.log(countTreeNodesRecursive(new TreeNode(1, new TreeNode(2), new TreeNode(3)))) // 3
// console.log(countTreeNodesRecursive(new TreeNode(2, new TreeNode(29, new TreeNode(26)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9)))))) // 6
// console.log(countTreeNodesRecursive(new TreeNode())) // 1


//sum nodes in bt
// function sumBTIterative(root) {
//     // Write your code here.
    
// }

function sumBTRecursive(root) {
    // Write your code here.

}

// Test Cases
    //     1
    // 2       3
// console.log(sumBTIterative(null)) // 0
// console.log(sumBTIterative(new TreeNode(1, new TreeNode(2), new TreeNode(3)))) // 6 
// console.log(sumBTIterative(new TreeNode(1))) // 1
// console.log(sumBTRecursive(null)) // 0
// console.log(sumBTRecursive(new TreeNode(1, new TreeNode(2), new TreeNode(3)))) // 6
// console.log(sumBTRecursive(new TreeNode(1))) // 1

//Find the max element in a binary tree
function findMaxBT(root) {
    // Write your code here.
   
}

// // Test Cases
// console.log(findMaxBT(null)) // null
// console.log(findMaxBT(new TreeNode(1, new TreeNode(2), new TreeNode(3)))) // 3
// console.log(findMaxBT(new TreeNode(2, new TreeNode(29, new TreeNode(26)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9)))))) // 29
// console.log(findMaxBT(new TreeNode(1))) // 1

//Find the height of a binary tree
function findHeight(root) {
 
}

// Test Cases
// console.log(findHeight(null)) // 0
// console.log(findHeight(new TreeNode(1, new TreeNode(2), new TreeNode(3)))) // 2
// console.log(findHeight(new TreeNode(2, new TreeNode(29, new TreeNode(26)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9)))))) // 4
// console.log(findHeight(new TreeNode())) // 1

//Find an element in a binary tree using DFS or BFS
function searchBT(root, target) { 
    // Write your code here.
}

// Test Cases
// var tree1 = new TreeNode(3, new TreeNode(29, new TreeNode(2)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9))))
// console.log(searchBT(null, 1)) // false
// console.log(searchBT(tree1, 9)) // true
// console.log(searchBT(tree1, 1)) // false
// console.log(searchBT(tree1, 2)) // true
// console.log(searchBT(new TreeNode(1), 2)) // false

function searchBST(root, target) {

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
     
    

    
    }

    
    
    // // Test Cases
    // var tree1 = new TreeNode(2, new TreeNode(1), new TreeNode(3))
    // var tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(3))
    // var tree3 = new TreeNode(8, new TreeNode(3, new TreeNode(1), new TreeNode(6)), new TreeNode(10, null, new TreeNode(14, new TreeNode(13))))
    // console.log(validateBST(null)) // true
    // console.log(validateBST(tree1)) // true
    // console.log(validateBST(tree2)) // false
    // console.log(validateBST(tree3)) // true
    // console.log(validateBST(new TreeNode())) // true
    


//LINKED LISTSSSSSSSSSSSSSSSSS //
function countElements(head) {
    // Write your code here.
   //iterative approach
    if (!head) return null
    
    let curr = head
    let count = 0
    
    while (curr) {
      count+=1
      curr = curr.next
    }
  
  return count
  
  //recursive approach
  //base case 

}

// // Test Cases
var LL1 = new ListNode(1, new ListNode(4, new ListNode(5)))
console.log(countElements(null)) // 0
console.log(countElements(LL1)) // 3
console.log(countElements(new ListNode())) // 1


function arrayify(head) {
    let ptr = head
    var array = []
    while (ptr != null) {
        array.push(ptr.value)
        ptr = ptr.next
    }
    return array
}

function append(head, target, curr=head) {

  //iterative approach
  
  
}

function appendRecursive(node, value) {

}

// // Test Cases
// var LL1 = new ListNode(1, new ListNode(4, new ListNode(5)))
// console.log(arrayify(append(null, 1))) // [1]
// console.log(arrayify(append(LL1, 7))) // [1, 4, 5, 7]
// console.log(arrayify(append(new ListNode(), 7))) // [0, 7]
// console.log(arrayify(appendRecursive(LL1, 7))) // [1, 4, 5, 7]

function sumElements(head) {
  //iterative approach

    //recursive approach

}
// // // Test Cases
// var LL1 = new ListNode(1, new ListNode(4, new ListNode(5)))
// console.log(sumElements(null)) // 0
// console.log(sumElements(LL1)) // 10
// console.log(sumElements(new ListNode(1))) // 1

        
function findMax(head, max=-Infinity) {
    // Write your code here.
    //iterative approach

  
    //recursive approach

}


// // Test Cases
// var LL1 = new ListNode(1, new ListNode(4, new ListNode(5, new ListNode(1))))
// var LL2 = new ListNode(7, new ListNode(1, new ListNode(5, new ListNode(1))))
// var LL3 = new ListNode(-1, new ListNode(-3, new ListNode(-5, new ListNode(0, new ListNode(-11)))))
// console.log(findMax(LL1)) // 5
// console.log(findMax(LL2)) // 7
// console.log(findMax(LL3)) // 0
// console.log(findMax(new ListNode(1))) // 1

function searchLL(head, target) { 
    // Write your code here.
    //iterative 

  
    //recursive approach

}

// // Test Cases
// let LL1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(5, new ListNode(6, new ListNode(7, new ListNode(10)))))))
// console.log(searchLL(null, 1)) // false
// console.log(searchLL(LL1, 2)) // true
// console.log(searchLL(LL1, 4)) // false
// console.log(searchLL(LL1, -1)) // false
// console.log(searchLL(LL1, 10)) // true
// console.log(searchLL(LL1, 11)) // false

//Remove All Nodes with value in a Linked List 
function removeNodes(head, target) { 
//iterate over the ll until it's null
   
}
// Test Cases
// var LL1 = new ListNode(4, new ListNode(1, new ListNode(2, new ListNode(1, new ListNode(3, new ListNode(2, new ListNode(2)))))))
// console.log(arrayify(removeNodes(null, 1))) // []
// console.log(arrayify(removeNodes(LL1, 1))) // [4, 2, 3, 2, 2] 
// console.log(arrayify(removeNodes(LL1, 2))) // [4, 3]
// console.log(arrayify(removeNodes(LL1, 3))) // [4]
// console.log(arrayify(removeNodes(LL1, 4))) // []

//Insert an element into a sorted linked list (iterative or recursive
function insert(head, target) {
    // Write your code here.

}

// Test Cases
// var LL1 = new ListNode(1, new ListNode(3, new ListNode(4)))
// var LL2 = new ListNode(-3, new ListNode(-2, new ListNode(-1)))
// console.log(arrayify(insert(LL1, 2))) // [1, 2, 3, 4]
// console.log(arrayify(insert(LL2, -4))) // [-4, -3, -2, -1]
// console.log(arrayify(insert(LL2, 0))) // [-3, -2, -1, 0]
// console.log(arrayify(insert(null, 1))) // [1]

//Remove a target element from a sorted linked list (iterative or recursive) 
function remove(head, target) {
    // Write your code here.
}

// Test Cases
// var LL1 = new ListNode(-1, new ListNode(1, new ListNode(3, new ListNode(4))))
// console.log(arrayify(remove(LL1, 1))) // [-1, 3, 4]
// console.log(arrayify(remove(LL1, -1))) // [3, 4]
// // console.log(LL1)
// console.log(arrayify(remove(LL1, 4))) // [3]
// console.log(arrayify(remove(LL1, 5))) // [3]
// console.log(arrayify(remove(new ListNode(1), 1))) // []
// Test Cases
// var LL1 = new ListNode(-1, new ListNode(1, new ListNode(3, new ListNode(4))))
// LL1 = remove(LL1, 1)
// console.log(arrayify(LL1)) // [-1, 3, 4]
// LL1 = remove(LL1, -1)
// console.log(arrayify(LL1)) // [3, 4]
// LL1 = remove(LL1, 4)
// console.log(arrayify(LL1)) // [3]
// LL1 = remove(LL1, 5)
// console.log(arrayify(LL1)) // [3]
// LL1 = remove(new ListNode(1), 1)
// console.log(arrayify(LL1)) // []



//Find the middle element from a linked list in one pass 
// [1,2,3,4] 
//      s
//        f 
function findMiddle(head) {
    // Write your code here.

}

// Test Cases
// var LL1 = new ListNode(1, new ListNode(3, new ListNode(5)))
// var LL1 = new ListNode(1, 
//                 new ListNode(2, new ListNode(3, new ListNode(4))))
// var LL2 = new ListNode(1, new ListNode(3, new ListNode(-13, new ListNode(-3, new ListNode(1)))))
// console.log(findMiddle(null)) // null
// console.log(findMiddle(LL1)) // 3
// console.log(findMiddle(LL2)) // -13
// console.log(findMiddle(new ListNode(1))) // 1

//Return the kth from the end of a linked list in one(-ish) pass 

function findKthFromLast(head, k) {
   

}

// Test Cases
// var LL1 = new ListNode(13, new ListNode(1, new ListNode(5, new ListNode(3, new ListNode(7, new ListNode(10))))))
// console.log(findKthFromLast(LL1, 1)) // 10
// console.log(findKthFromLast(LL1, 3)) // 3
// console.log(findKthFromLast(LL1, 6)) // 13
// console.log(findKthFromLast(LL1, 7)) // -1

//Sum two linked lists of equal length (1->2, 3->4 returns 4->6) 

function sumLinkedLists(head1, head2) {
    // Write your code here.

}

// // Test Cases
// var LL1 = new ListNode(1, new ListNode(3, new ListNode(5)))
// var LL2 = new ListNode(-1, new ListNode(3, new ListNode(-10)))
// console.log(arrayify(sumLinkedLists(LL1, LL2))) // [0, 6, -5]
// console.log(arrayify(sumLinkedLists(new ListNode(0), new ListNode(0)))) // [0]

//reverse linked list
function reverseLL(head) {
    // Write your code here.

}

// // // Test Cases
// var LL1 = new ListNode(13, new ListNode(1, new ListNode(5, new ListNode(3, new ListNode(7, new ListNode(10))))))
// console.log(arrayify(reverseLL(new ListNode(1)))) // [1]
// console.log(arrayify(reverseLL(new ListNode(1, new ListNode(2))))) // [2, 1]
// console.log(arrayify(reverseLL(LL1))) // [10, 7, 3, 5, 1, 13]
