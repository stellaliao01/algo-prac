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
  
    testMultipleCases(possible_outcomes, outcome, case_num) {
        var possible_outcome
        for (possible_outcome of possible_outcomes) {
            if (this.compareArrays(possible_outcome, outcome)) {
                return this.passed(case_num)
            }
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
        
var test = new Test("Algo Marathon: Debugging Challenge #2")

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

//////////////////////////////////////////////////////////////////////////////////
// 1. Insert an element into a sorted linked list (iterative)
//
// Q. Given a sorted linked list, insert an element in the appropriate position.
//    Note: You must return the head of the updated linked list.
//
// Example:
//    Given: Linked List: [1, 3, 4], target: 2
//    Updated Linked List: [1, 2, 3, 4]
//
//////////////////////////////////////////////////////////////////////////////////

function insert(head, target) {
    var curr = head 
    if (head.value > target) {
        head = new ListNode(target)
        head.next = curr
        return head
    }
    
    while (curr && curr.next) {
        if (curr.value > target) {
            var oldNext = curr.next
            curr.next = new ListNode(target)
            curr.next.next = oldNext
            return head
        }
        curr = curr.next
    }
    return head
}




// Test Cases
test.startProblem("1. Insert an Element")
var LL6 = new ListNode(1, new ListNode(3, new ListNode(4)))
var LL7 = new ListNode(-3, new ListNode(-2, new ListNode(-1)))
test.testForArrays([1, 2, 3, 4], arrayify(insert(LL6, 2)), 1)
test.testForArrays([-4, -3, -2, -1], arrayify(insert(LL7, -4)), 2)
test.testForArrays([-3, -2, -1, 0], arrayify(insert(LL7, 0)), 3)
test.testForArrays([1], arrayify(insert(null, 1)), 4)
test.endProblem()

//////////////////////////////////////////////////////////////////////////////////
// 2. Insertion Variation #1
//
// Q. Given an unsorted linked list, insert an element before the target element
//    Note: - You may assume there are no duplicates.
//          - You must return the head of the updated linked list.
//
// Example:
//    Given: Linked List: [3, -1, 2, 5], element(to be inserted): 0, target: 2 
//    Updated Linked List: [3, -1, 0, 2, 5]
//
//////////////////////////////////////////////////////////////////////////////////

function insert2(head, element, target) {
    var curr = head
    if (curr.value == target) {
        head = new ListNode(element)
        return head
    }
    
    while (curr && curr.next) {
        if (curr.next.value == target) {
            var oldNext = curr.next
            curr.next = oldNext
            return head
        }
        curr = curr.next
    }

    curr.next = new ListNode(element)
    
    return head
}




// Test Cases
test.startProblem("2. Insertion Variation #1")
var LL3 = new ListNode(3, new ListNode(-1, new ListNode(2, new ListNode(5))))
test.testForArrays([3, -1, 0, 2, 5], arrayify(insert2(LL3, 0, 2)), 1)
test.testForArrays([-4, 3, -1, 0, 2, 5], arrayify(insert2(LL3, -4, 3)), 2)
test.testForArrays([3, -1, 0, 2, 1, 5], arrayify(insert2(LL3, 1, 5)), 3)
test.endProblem()


//////////////////////////////////////////////////////////////////////////////////
// 3. Dutch National Flag
//
// Q. Given an array of 0s, 1s, and 2s, sort them in-place in ascending order.
// 
// Examples: 
//     Input1:  [1, 2, 0]
//     Output1: [0, 1, 2]
//
//     Input2:  [0, 1, 2, 0, 1, 2]
//     Output2: [0, 0, 1, 1, 2, 2]
//
//////////////////////////////////////////////////////////////////////////////////

function dnf(nums) {
  let lo = 0, hi = nums.length - 1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
    [nums[i], nums[lo]] = [nums[lo], nums[i]]
    lo++
  } else if (nums[i] === 1) {
    [nums[i], nums[hi]] = [nums[hi], nums[i]]
    hi--
    i--
  }
  }
}




// Test Cases
test.startProblem("3. Dutch National Flag")
var array1 = []; dnf(array1)
var array2 = [2, 1, 1, 0]; dnf(array2)
var array3 = [0, 2, 1, 0, 1, 2]; dnf(array3)
test.testForArrays([], array1, 1)
test.testForArrays([0, 1, 1, 2], array2, 2)
test.testForArrays([0, 0, 1, 1, 2, 2], array3, 3)
test.endProblem()


//////////////////////////////////////////////////////////////////////////////////
// 4. Convert Sorted Array to Binary Search Tree
//
// Q. Given an array where elements are sorted in ascending order,
//    convert it to a height balanced BST.
//    Note: - A height-balanced binary tree is a binary tree in which
//            the depth of the two subtrees of every node never differ
//            by more than 1.
//          - You must return the root of the BST.
// 
// Examples: 
//     Input: [-10,-3,0,5,9]
//
//     Output:
//                0
//               / \    
//             -3   9    // one possible solution: [0, -3, 9, -10, None, 5],
//             /   /
//           -10  5
//
//////////////////////////////////////////////////////////////////////////////////

function helper(nums, left, right) {
  if (left > right) {
     return null; 
  }
  let mid = Math.floor((left + right) / 2);
  let root = new TreeNode(nums[mid]);
  root.left = helper(nums, left, mid);
  root.right = helper(nums, mid, right);
 
  return root;
   
}
function sortedArrayToBST(nums) {
    // Write your code here.
    if (!nums.length) {
     return null; 
    }
     
    return helper(nums, 0, nums.length - 1);
    
}




// Test Cases
test.startProblem("4. Convert Sorted Array to BST")
test.testForArrays([2, 1, 3], arrayifyTree(sortedArrayToBST([1, 2, 3])), 1)
test.testMultipleCases([[0, -3, 9, -10, 5], [0, -10, 9, -3, 5], [0, -10, 5, -3, 9], [0, -3, 5, -10, 9]], arrayifyTree(sortedArrayToBST([-10, -3, 0, 5, 9])), 2)
test.testForArrays([], arrayifyTree(sortedArrayToBST([])), 3)
test.endProblem()

//////////////////////////////////////////////////////////////////////////////////
// 5. Reverse Words In String
//
// Q. Given an input string, reverse the string word by word.
//    Note: - Remove any extra white space (e.g. "b  a" -> "a b"  // only keep 1 whitespace)
//          - Remove any leading or trailing white spaces (e.g. "  Hi  " -> "iH")
//
// Examples:
//     Input1: "I love programming"
//     Output1: "programming love I"
//
//     Input2: "    "
//     Ouput2: ""
//
//////////////////////////////////////////////////////////////////////////////////

function rw(input) {
    // Write your code here.
  
   let words = [];
   let word = "";
  
   for (let char of input) {
     if (char === "" && word) {
      words.unshift(word);
      word = "";
     } else {
      word += char; 
     }
   }
}



// Test Cases
test.startProblem("5. Reverse Words In String")
test.test("world! hello", rw("  hello world!  "), 1)
test.test("", rw(""), 2)
test.test("", rw("   "), 3)
test.test("a", rw("  a"), 4)
test.endProblem()