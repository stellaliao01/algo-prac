class Test {
    constructor(test_name = "", printTests = false) {
        this.total_count = 0
        this.problem_count = 0
        this.total_score = 0
        this.problem_score = 0
        this.current_problem = ""
        this.failed_problems = []
        console.log(`Beginning Test: ${test_name}`)
    }
        
    // Test Helpers
    test(expected_outcome, outcome, case_num) {
        if (expected_outcome == outcome) {
            return this.passed(case_num)
        }
        return this.failed(case_num)
    }

    testForArrays(expected_outcome, outcome, case_num) {
        if (this.compareArrays(expected_outcome, outcome)) {
            return this.passed(case_num)
        }
        return this.failed(case_num)
    }

    compareArrays(array1, array2) {
        return array1.length === array2.length && array1.filter((a, i) => Array.isArray(a) ? !this.compareArrays(a, array2[i]) : array2[i] !== a).length === 0;
    }
  
    // Test Logistics
    startProblem(problemName) {
        this.current_problem = problemName
        this.problem_score = 0
        this.problem_count = 0
        this.failed_problems = []
    }
    passed(case_num) {
        this.total_score += 1
        this.problem_score += 1
        this.problem_count += 1
        this.total_count += 1
    }
    failed(case_num) {
        this.problem_count += 1
        this.total_count += 1
        this.failed_problems.push(case_num)
    }
    endProblem() {
        console.log(`\n   ${this.current_problem} Score: ${this.problem_score} / ${this.problem_count}`)
        if (this.failed_problems.length > 0) {
            console.log(`   ** Failed Test Cases: ${this.failed_problems}`)
        }
    }
    printFinal() {
        console.log(`\nTotal Score: ${this.total_score} / ${this.total_count}`)
    }
}
        

class ListNode {
    constructor(value = 0, next = null) {
        this.value = value
        this.next = next
    }
}

function arrayify(head) {
    var ptr = head
    var array = []
    while (ptr != null) {
        array.push(ptr.value)
        ptr = ptr.next
    }
    return array
}

class TreeNode {
    constructor(value = 0, leftChild = null, rightChild = null) {
        this.value = value
        this.left = leftChild
        this.right = rightChild
    }
}

var test = new Test("Algo Marathon: Debugging Challenge #1")

//////////////////////////////////////////////////////////////////////////////////
// 1. Count from kth to the end of a linked list
//
// Q. Given a linked list and kth position, return the number of nodes
//    between the kth and the end of the list.
//    Note: - You may assume all elements have positive integer value.
//          - If K exceeds the length of the list, return -1 instead
//
//////////////////////////////////////////////////////////////////////////////////


// function countKthToLast(head, k) {
//   let fast = head;
//   let i = 0;
//   let count = 0;
//   while (i < k) {
//     count++;
//     fast = fast.next;
//     i++;
//   }

//   while (fast.next) {
//     count++;
//     fast = fast.next;
//   }
//   return count;
// }

/*
k = 3 // output should be 3
   13, 1, 5, 3, 7, 10
          f
i: 1   2  3
c: 1   2  3

*/

function countKthToLast(head, k) {
    if (!head) return -1
    let fast = head;
    let i = 0;
    let count = 0;
    while (i < k) {
      count++;
      if (fast.next) {
        fast = fast.next;
      }
      i++;
    }
    return count

  }



// Test Cases
test.startProblem("1. Count Kth")
var LL2 = new ListNode(13, new ListNode(1, new ListNode(5, new ListNode(3, new ListNode(7, new ListNode(10))))))
console.log(countKthToLast(LL2, 1), 1)
console.log(countKthToLast(LL2, 3), 2)
console.log(countKthToLast(LL2, 6), 3)
console.log(countKthToLast(LL2, 7), 4)

test.test(4, countKthToLast(LL2, 1), 1)
test.test(2, countKthToLast(LL2, 3), 2)
test.test(-1, countKthToLast(LL2, 6), 3)
test.test(-1, countKthToLast(LL2, 7), 4)
test.endProblem()


//////////////////////////////////////////////////////////////////////////////////
// 2. Merge Sort
//
// Q. Given an unsorted array, perform merge sort in ascending order.
//
//////////////////////////////////////////////////////////////////////////////////

function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let k = 0;
  let newArr = [];
  
  while (i < arr1.length && j < arr2.length) {
   if (arr1[i] <= arr2[j]) {
     newArr[k] = arr1[i];
     i++;
     k++;
   } else {
     newArr[k] = arr2[j];
     j++;
     k++;
   }
  }
  
  if (i === arr1.length) {
    while (j < arr2.length) {
      newArr[k] = arr2[j];
      j++;
      k++;
    }
  } else if (j === arr2.length) {
    while (i < arr1.length) {
     newArr[k] = arr1[i];
     i++;
     k++;
    }
  }
  return newArr;
}

function mergeSort(input) {
  // Write your code here.
  if (input.length < 2) {
   return input; 
  }
  
  let mid = Math.floor((input.length - 1) / 2);
  
  let leftHalf = input.slice(0, mid);
  let rightHalf = input.slice(mid);
  
  let sortedLeft = mergeSort(leftHalf);
  let sortedRight = mergeSort(rightHalf);
  
  return merge(sortedLeft, sortedRight);
}




// Test Cases
test.startProblem("2. Merge Sort")
test.testForArrays([], mergeSort([]), 1)
test.testForArrays([1], mergeSort([1]), 2)
test.testForArrays([1, 2, 3, 4], mergeSort([3, 1, 2, 4]), 3)
test.testForArrays([-13, -10, 1, 3, 5, 8, 9, 32], mergeSort([-10, 1, 3, 8, -13, 32, 9, 5]), 4)
test.endProblem()
test.printFinal()

//////////////////////////////////////////////////////////////////////////////////
// 3. Print Tree by Level
//
// Q. Given a binary tree, print level order traversal so that
//    nodes of all levels are printed in several lines
//    Note: return a matrix (2D array) containing all values
// 
// Examples: 
//     Input1:                        Input2:
//                  1                             1
//                 / \                           / \
//                2   3                         2   3
//                                                 / \
//                                                4   5
//
//     Output1: [[1], [2, 3]]         Output2: [[1], [2, 3], [4, 5]] 
//
//////////////////////////////////////////////////////////////////////////////////

function printTree(root) {
    if (!root) {
      return []; 
    }
    
    let levels = [];
    let queue = [[root]];
    
    while (queue.length) {
      let nextLevel = [];
      let currentLevel = [];
      
      let currentItems = queue.shift();
      
      for (let item of currentItems) {
        currentLevel.push(item.value);
        
        if (item.left) {
         nextLevel.push(item.left.value); 
        }
        if (item.right) {
         nextLevel.push(item.right.value); 
        }
      }
      levels.push(currentLevel);
      if (nextLevel.length) {
       queue.push(nextLevel); 
      }
    }
    
    return levels;
}


// Test Cases
test.startProblem("3. Print Tree by Level")
test.testForArrays([[1], [2, 3]], printTree(new TreeNode(1, new TreeNode(2), new TreeNode(3))), 1)
test.testForArrays([[2], [29, 4], [26, 2], [9]], printTree(new TreeNode(2, new TreeNode(29, new TreeNode(26)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9))))), 2)
test.testForArrays([[1], [2, 3], [4, 5]], printTree(new TreeNode(1, new TreeNode(2), new TreeNode(3, new TreeNode(4), new TreeNode(5)))), 3)
test.testForArrays([[-3]], printTree(new TreeNode(-3)), 4)
test.endProblem()

//////////////////////////////////////////////////////////////////////////////////
// 4. Trie
//
// Q. Implement a trie with insert, search, and startsWith methods.
//    Note: - A trie is a tree-like data structure whose nodes store
//            the letters of an alphabet.
//          - By structuring the nodes in a particular way, words and strings
//            can be retrieved from the structure by traversing down a branch path
//            of the tree.
//          - You may assume that all inputs are consist of lowercase letters a-z.
//          - All inputs are guaranteed to be non-empty strings.
//
// Examples: 
//     trie = Trie()
//     trie.insert("apple")
//     trie.search("apple")       // returns True
//     trie.search("app")         // returns False
//     trie.startsWith("app")     // returns True
//     trie.insert("app")   
//     trie.search("app")         // returns True
//
//////////////////////////////////////////////////////////////////////////////////

class Trie {
    constructor() {
       this.root = {};
    }
    
    insert(word) {
      let pointer = this.root;
      for (let i = 0; i < word.length; i++) {
        let char = word[i];

        if (!pointer[char]) {
          pointer[char] = {};
        }
        if (i === word.length - 1) {
          pointer[char] = {'endOfWord': true}
        }
        pointer = pointer[char];
      }
    }

    search(word) {
      let pointer = this.root;
      
      for (let i = 0; i < word.length; i++) {
        let char = word[i];
        
        if (pointer[char]) {
          pointer = pointer[char]; 
        }
      }
      
      if (pointer[word[word.length - 1]]['endOfWord']) {
       return true; 
      }
      return false;
    }
    
    startsWith(prefix) {
      let pointer = this.root;
      
      for (let i = 0; i < prefix.length; i++) {
        let char = prefix[i];
        if (!pointer[char]) {
          return false;
        }
        pointer = pointer[char];
      }
      
      return true;
    }
}




// Test Cases
test.startProblem("4. Trie")
var trie = new Trie()
trie.insert("apple")
test.test(true, trie.search("apple"), 1)
test.test(false, trie.search("app"), 2)
test.test(true, trie.startsWith("app"), 3)
trie.insert("app")
test.test(true, trie.search("app"), 4)
test.test(true, trie.startsWith("a"), 5)
test.test(false, trie.startsWith("ple"), 6)
test.endProblem()


//////////////////////////////////////////////////////////////////////////////////
// 5. Max Path Sum
//
// Q. Given a non-empty binary tree, find the maximum path sum.
//    Note: A path is any sequence of nodes from some starting node to any node
//          in the tree along the parent-child connections. The path must contain
//          at least one node and does not need to go through the root.
//
// Example:
//    Input: 
//                 1
//                / \    
//               2   3
//              /     
//             -1   
//
//    Output: 6
//
//////////////////////////////////////////////////////////////////////////////////

function mps(root) {
  let max = 0
  function traverse(root) {
    if (root === null) return 0;
    let left = traverse(root.left);
    let right = traverse(root.right);
    max = Math.max(max, left + right + root.value);
    return Math.max(left, right) + root.value
  }
  traverse(root);
  return max;
}



// Test Cases
test.startProblem("5. Max Path Sum")
console.log(mps(new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3, new TreeNode(6), new TreeNode(7)))))
test.test(6, mps(new TreeNode(1, new TreeNode(2, new TreeNode(-1)), new TreeNode(3))), 1)
test.test(18, mps(new TreeNode(1, 
                               new TreeNode(2, 
                                            new TreeNode(4), 
                                            new TreeNode(5)), 
                               new TreeNode(3, 
                                            new TreeNode(6), 
                                            new TreeNode(7)))), 2)
test.test(3, mps(new TreeNode(1, 
                              new TreeNode(2), 
                              new TreeNode(-4))), 3)
test.test(7, mps(new TreeNode(1, new TreeNode(-5, new TreeNode(6)), new TreeNode(5))), 4)
test.test(21, mps(new TreeNode(1, new TreeNode(-10, new TreeNode(3, new TreeNode(5, new TreeNode(13), new TreeNode(-1)), new TreeNode(-1))), new TreeNode(-5, new TreeNode(-20), new TreeNode(-21)))), 5)
test.endProblem()