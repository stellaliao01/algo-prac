//////////////////////////////////////////////////////////////////////////////////
// Welcome to Algo Marathon Variation Set 1 :)
//
// You will be given a series of algo problems to solve.
// You may add a helper functiontion(s) if necessary.
// However, do not modify functiontion signatures nor test cases.
// Some functions already have a return statement filled out for you, but
// this is just a placeholder. So you may modify it.
//
// Ready? Set??? Go!!!!
//
//////////////////////////////////////////////////////////////////////////////////

class Test {
    constructor(test_name = "", printTests = false) {
        this.total_count = 0
        this.problem_count = 0
        this.total_score = 0
        this.problem_score = 0
        this.current_problem = ""
        this.failed_problems = []
        this.printTests = printTests
        console.log(`Beginning Test: ${test_name}`)
    }
        
    // Test Helpers
    test(expected_outcome, outcome, case_num = 0) {
        if (expected_outcome == outcome) {
            if (this.printTests == true) {
                console.log(`\n   Test Case ${case_num} Passed!`)
            }
            return this.passed(case_num)
        }
        if (this.printTests) {
            console.log(`\n   Test Case ${case_num} Failed.`)
        }
        return this.failed(case_num)
    }

    testForArrays(expected_outcome, outcome, case_num = 0) {
        if (this.compareArrays(expected_outcome, outcome)) {
            if (this.printTests == true) {
                console.log(`\n   Test Case ${case_num} Passed!`)
            }
            return this.passed(case_num)
        }
        if (this.printTests) {
            console.log(`\n   Test Case ${case_num} Failed.`)
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

class TreeNode {
    constructor(value = 0, leftChild = null, rightChild = null) {
        this.value = value
        this.left = leftChild
        this.right = rightChild
    }
}
        
var test = new Test("Algo Marathon Variation Set #1")



//////////////////////////////////////////////////////////////////////////////////
// 1. Dutch National Flag (given an elements array)
//
// Example:
// elements: [2, 4, 5], input: [2, 5, 5, 4, 2] => [2, 2, 4, 5, 5]
//
// Q. Sort the input array.
//    Note: all values in the input array will be from the elements array.
//    Note: elements is sorted 
//    Note: you can assume that the parameters are valid
//
//////////////////////////////////////////////////////////////////////////////////

function dnf(elements, input) {
    // Write your code here.
}


// Test Cases
// test.startProblem("1. Dutch National Flag Variation")
// test.test([2, 2, 4, 5, 5], dnf([2, 4, 5], [2, 5, 5, 4, 2]), 1)
// test.test([], dnf([1, 2, 3], []), 2)
// test.test([2, 4, 5], dnf([2, 4, 5], [5, 4, 2]), 3)
// test.endProblem()






//////////////////////////////////////////////////////////////////////////////////
// 2. Spiral Matrix (reverse matrix order)
//
// Q. Given a matrix, return an array representing the traversal of the matrix in REVERSE spiral order.
//
//////////////////////////////////////////////////////////////////////////////////
    
function sm(matrix) {
    // Write your code here.
    return [] 
}

// test.startProblem("2. Spiral Matrix Variation")
// test.test([1, 4, 7, 8, 9, 6, 3, 2, 5], sm([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), 1)
// test.test([1, 1, 1, 2, 3, 3, 3, 2, 2], sm([[1, 2, 3], [1, 2, 3], [1, 2, 3]]), 2)
// test.test([1, 5, 6, 7, 8, 4, 3, 2], sm([[1, 2, 3, 4], [5, 6, 7, 8]]), 3)
// test.endProblem()






//////////////////////////////////////////////////////////////////////////////////
// 3. Print Tree By Level (last level only)
// 
// Q. Return values of bottom level of tree
//
// Example:
//        1
//       / \
//     3    4
//    /   
//   5   
// Output: [5]
//
//////////////////////////////////////////////////////////////////////////////////
    

function printBottomLevel(root) {
    // Write your code here.
    return []
}

// Test Cases
test.startProblem("3. Print Tree By Level (Bottom Variation)")
// let tree1 = new TreeNode(6, new TreeNode(3, new TreeNode(2), new TreeNode(4)), new TreeNode(8))
// let tree2 = new TreeNode(3, new TreeNode(3, new TreeNode(2), new TreeNode(4, new TreeNode(10))), new TreeNode(8))
// let tree3 = new TreeNode(1, new TreeNode(3, new TreeNode(5)), new TreeNode(4, new TreeNode(6)))
// test.test([2, 4], printBottomLevel(tree1), 1)
// test.test([10], printBottomLevel(tree2), 2)
// test.test([5, 6], printBottomLevel(tree3), 3)
// test.test([5], printBottomLevel(new TreeNode(5)), 4)
// test.endProblem()

// test.printFinal()


//////////////////////////////////////////////////////////////////////////////////
// Welcome to Algo Marathon Variation Set 2 :)
//
// You will be given a series of algo problems to solve.
// You may add a helper functiontion(s) if necessary.
// However, do not modify functiontion signatures nor test cases.
// Some functions already have a return statement filled out for you, but
// this is just a placeholder. So you may modify it.
//
// Ready? Set??? Go!!!!
//
//////////////////////////////////////////////////////////////////////////////////

// class Test {
//     constructor(test_name = "", printTests = false) {
//         this.total_count = 0
//         this.problem_count = 0
//         this.total_score = 0
//         this.problem_score = 0
//         this.current_problem = ""
//         this.failed_problems = []
//         this.printTests = printTests
//         console.log(`Beginning Test: ${test_name}`)
//     }
        
//     // Test Helpers
//     test(expected_outcome, outcome, case_num = 0) {
//         if (expected_outcome == outcome) {
//             if (this.printTests == true) {
//                 console.log(`\n   Test Case ${case_num} Passed!`)
//             }
//             return this.passed(case_num)
//         }
//         if (this.printTests) {
//             console.log(`\n   Test Case ${case_num} Failed.`)
//         }
//         return this.failed(case_num)
//     }

//     testForArrays(expected_outcome, outcome, case_num = 0) {
//         if (this.compareArrays(expected_outcome, outcome)) {
//             if (this.printTests == true) {
//                 console.log(`\n   Test Case ${case_num} Passed!`)
//             }
//             return this.passed(case_num)
//         }
//         if (this.printTests) {
//             console.log(`\n   Test Case ${case_num} Failed.`)
//         }
//         return this.failed(case_num)
//     }

//     compareArrays(array1, array2) {
//         return array1.length === array2.length && array1.filter((a, i) => Array.isArray(a) ? !this.compareArrays(a, array2[i]) : array2[i] !== a).length === 0;
//     }
  
//     // Test Logistics
//     startProblem(problemName) {
//         this.current_problem = problemName
//         this.problem_score = 0
//         this.problem_count = 0
//         this.failed_problems = []
//     }
//     passed(case_num) {
//         this.total_score += 1
//         this.problem_score += 1
//         this.problem_count += 1
//         this.total_count += 1
//     }
//     failed(case_num) {
//         this.problem_count += 1
//         this.total_count += 1
//         this.failed_problems.push(case_num)
//     }
//     endProblem() {
//         console.log(`\n   ${this.current_problem} Score: ${this.problem_score} / ${this.problem_count}`)
//         if (this.failed_problems.length > 0) {
//             console.log(`   ** Failed Test Cases: ${this.failed_problems}`)
//         }
//     }
//     printFinal() {
//         console.log(`\nTotal Score: ${this.total_score} / ${this.total_count}`)
//     }
// }

// class TreeNode {
//     constructor(value = 0, leftChild = null, rightChild = null) {
//         this.value = value
//         this.left = leftChild
//         this.right = rightChild
//     }
// }
        
// var test = new Test("Algo Marathon Variation Set #2")

//////////////////////////////////////////////////////////////////////////////////
// 1. Longest Increasing Subsequence Variation (Decreasing)
//
// Q. Given a non-empty array of Integers, find the longest decreasing subsequence.
//    Note: A subsequence of an array is a set of numbers that aren't necessarily
//          adjacent in the array but in the same order as they appear.
//
//////////////////////////////////////////////////////////////////////////////////

function longestDecreasingSubsequence(array) {
    // Write your code here.
    return []
}




// Test Cases
// test.startProblem("1. Longest Decreasing Subsequence")
// test.testForArrays([0], longestDecreasingSubsequence([0]), 1)
// test.testForArrays([3, 2, 1], longestDecreasingSubsequence([3, 2, 1]), 2)
// test.testForArrays([100, 5, 4], longestDecreasingSubsequence([100, 1, 3, 4, 5, 4]), 3)
// test.testForArrays([], longestDecreasingSubsequence([]), 4)
// test.endProblem()

//////////////////////////////////////////////////////////////////////////////////
// 2. strStr Variation (return all occurrences)
//
// Q. Given a string, return an array of indices of all occurrences of target string.
//
// Examples:
//     Input1: input: "hello", target: "ll"
//     Output1: [2]
//
//     Input2: input: "formation", target: "o"
//     Ouput2: [1, 7]
//
//////////////////////////////////////////////////////////////////////////////////

function strStr(inputString, target) {
    // Write your code here.
    return []
}

// // Test Cases
// test.startProblem("2. strStr Variation")
// test.testForArrays([2], strStr("hello", "ll"), 1)
// test.testForArrays([], strStr("", "a"), 2)
// test.testForArrays([0, 1, 2, 3, 4, 5, 6], strStr("aaaaaaa", "a"), 3)
// test.testForArrays([0], strStr("formation", "formation"), 4)
// test.testForArrays([1, 2], strStr("dooor", "oo"), 5)
// test.endProblem()

//////////////////////////////////////////////////////////////////////////////////
// 3. Iterative In-Order Traversal (Pre-order Variation)
// 
// Q. Return node values in a pre-order traversal, always going to left before right.
//
// Example:
//        1
//       / \
//     3    4
//    /   
//   5   
// Output: [1, 3, 5, 4]
//
//////////////////////////////////////////////////////////////////////////////////

function preOrder(root) {
    // Write your code here. 
    return []
}
        
// test.startProblem("3. Iterative In-Order Traversal Variation")
// var tree1 = new TreeNode(1, new TreeNode(3, new TreeNode(5)), new TreeNode(4))
// var tree2 = new TreeNode(1, new TreeNode(3, new TreeNode(5), new TreeNode(6, new TreeNode(7))), new TreeNode(4))
// test.testForArrays([1, 3, 5, 4], preOrder(tree1), 1)
// test.testForArrays([1, 3, 5, 6, 7, 4], preOrder(tree2), 2)
// test.testForArrays([], preOrder(null), 3)
// test.endProblem()

// test.printFinal()

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Welcome to Strength Algorithms Variation Set 3 :)
//
// This practice will help you prepare for Algo Marathon.
// You may add a helper function(s) if necessary.
// However, do not modify function signatures nor test cases.
// Some functions already have a return statement filled out for you, but
// this is just a placeholder. So you may modify it.
// Good luck, and don't forget to time yourself!
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// class Test {
//     constructor(test_name = "", printTests = false) {
//         this.total_count = 0
//         this.problem_count = 0
//         this.total_score = 0
//         this.problem_score = 0
//         this.current_problem = ""
//         this.failed_problems = []
//         this.printTests = printTests
//         console.log(`Beginning Test: ${test_name}`)
//     }
        
//     // Test Helpers
//     test(expected_outcome, outcome, case_num = 0) {
//         if (expected_outcome == outcome) {
//             if (this.printTests == true) {
//                 console.log(`\n   Test Case ${case_num} Passed!`)
//             }
//             return this.passed(case_num)
//         }
//         if (this.printTests) {
//             console.log(`\n   Test Case ${case_num} Failed.`)
//         }
//         return this.failed(case_num)
//     }

//     testForArrays(expected_outcome, outcome, case_num = 0) {
//         if (this.compareArrays(expected_outcome, outcome)) {
//             if (this.printTests == true) {
//                 console.log(`\n   Test Case ${case_num} Passed!`)
//             }
//             return this.passed(case_num)
//         }
//         if (this.printTests) {
//             console.log(`\n   Test Case ${case_num} Failed.`)
//         }
//         return this.failed(case_num)
//     }

//     compareArrays(array1, array2) {
//         return array1.length === array2.length && array1.filter((a, i) => Array.isArray(a) ? !this.compareArrays(a, array2[i]) : array2[i] !== a).length === 0;
//     }
  
//     // Test Logistics
//     startProblem(problemName) {
//         this.current_problem = problemName
//         this.problem_score = 0
//         this.problem_count = 0
//         this.failed_problems = []
//     }
//     passed(case_num) {
//         this.total_score += 1
//         this.problem_score += 1
//         this.problem_count += 1
//         this.total_count += 1
//     }
//     failed(case_num) {
//         this.problem_count += 1
//         this.total_count += 1
//         this.failed_problems.push(case_num)
//     }
//     endProblem() {
//         console.log(`\n   ${this.current_problem} Score: ${this.problem_score} / ${this.problem_count}`)
//         if (this.failed_problems.length > 0) {
//             console.log(`   ** Failed Test Cases: ${this.failed_problems}`)
//         }
//     }
//     printFinal() {
//         console.log(`\nTotal Score: ${this.total_score} / ${this.total_count}`)
//     }
// }

// class ListNode {
//     constructor(value = 0, next = null) {
//         this.value = value
//         this.next = next
//     }
// }

function arrayify(head) {
    let ptr = head
    var array = []
    while (ptr != null) {
        array.push(ptr.value)
        ptr = ptr.next
    }
    return array
}

// class TreeNode {
//     constructor(value = 0, leftChild = null, rightChild = null) {
//         this.value = value
//         this.left = leftChild
//         this.right = rightChild
//     }
// }
        
var test = new Test("Algo Marathon Variation Set #3")

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 1. Merge K Sorted Lists (remove duplicate elements)
//
// Q. Given an array of linked-lists lists, merge all the linked-lists into
//    one sorted linked-list and return it.
//    Note: - Each linked list is sorted in ascending order. 
//          - Remove all duplicates when merging linked lists.  
//
// Examples:
//     Input1: [[1,4,5],[1,3,4],[2,6]        // 1->4->5, 1->3->4, 2->6
//     Output1: [1,2,3,4,5,6]            // 1->2->3->4->5->6
//
//     Input2: []
//     Ouput2: []
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function mkl(lists) {
    // Write your code here.
    return []
}




// // Test Cases
// test.startProblem("1. Merge K Sorted Lists")
// var LL1 = new ListNode(-1, new ListNode(1, new ListNode(4, new ListNode(5))))
// var LL2 = new ListNode(1, new ListNode(3, new ListNode(4, new ListNode(4))))
// var LL3 = new ListNode(2, new ListNode(6))
// var LL4 = new ListNode(1, new ListNode(11, new ListNode(111)))
// test.testForArrays([-1, 1, 2, 3, 4, 5, 6], arrayify(mkl([LL1, LL2, LL3])), 1)
// test.testForArrays([0, 1, 11, 111], arrayify(mkl([LL4, new ListNode()])), 2)
// test.testForArrays([0], arrayify(mkl([new ListNode()])), 3)
// test.endProblem()

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 2. Reverse Words In String
//
// Q. Given a string, reverse the order of characters in each word
//    within a sentence while preserving initial word order.
//    Note: - Remove any extra white space
//            (e.g. "b  a" -> "a b" // only keep 1 whitespace)
//          - Remove any leading or trailing white spaces (e.g. "  Hi  " -> "iH")
//
// Examples:
//     Input1: "I love programming"
//     Output1: "I evol gnimmargorp"
//
//     Input2: "    "
//     Ouput2: ""
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function rw(input) {
    // Write your code here.
}



 
// // Test Cases
// test.startProblem("2. Reverse Words In String")
// test.test("olleh !dlrow", rw("  hello world!  "), 1)
// test.test("", rw(""), 2)
// test.test("", rw("   "), 3)
// test.test("a", rw("  a"), 4)
// test.endProblem()

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 3. Three Number Sum (with Target Sum)
//
// Q. Given a non-empty array of distinct integers and a target sum,
//    return all triplets in the array that sum up to the target sum
//    in 2-dimensional array format.
//    Note: The numbers in each triplet should be ordered in ascending order,
//          and the triplets themselves should be ordered in ascending order
//          with respect to the numbers they hold.
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function threeNumberSum(array, targetSum) {
    // Write your code here.
    return [[]]
}

// // Test Cases
// test.startProblem("3. Three Number Sum")
// test.testForArrays([], threeNumberSum([1, 2, 3], 1), 1)
// test.testForArrays([[1, 2, 3]], threeNumberSum([1, 2, 3], 6), 2)
// test.testForArrays([[-8, 2, 6], [-8, 3, 5], [-6, 0, 6], [-6, 1, 5], [-1, 0, 1]], threeNumberSum([12, 3, 1, 2, -6, 5, 0, -8, -1, 6], 0), 3)
// test.endProblem()

// test.printFinal()




function findLevenshteinDistance(str1, str2) {
    if (!str1) return 0
    if (str1 === str2) return 0
    
    let first = str1.split('').sort()
    let second = str2.split('').sort()
   
    //insertion
    while (first.length < second.length) {
        if (first[0] === second[0]) {
        first.shift()
        second.shift()
        }
        return second.length
    }
    
    //deletion
     while (first.length > second.length) {
        if (first[0] === second[0]) {
        first.shift()
        second.shift()
        continue
        }
       return first.length
    } 
 
    
}

/*



*/
function threeNumSum(array) {
    array = array.sort()
    const resultArr = []
    
    for (let i=0; i<array.length -2; i++) {
        let front = i+1
        let end = array.length -1
        while (front <end) {
            let currSum = array[i] + array[front] + array[end]
            if (currSum === 0) {
                resultArr.push([array[i], array[front],array[end]])
                front +=1
                end -=1
            }
            else if (currSum < 0) {
                front +=1
            }
            else if (currSum > 0) {
                end -=1
            }
        }
       
    }
    if (resultArr.length === 1) {
        return resultArr.flat()
    }
     return resultArr

}

// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function removeAllTargetFTimes(head, f, target) {
    if (!head) return []
          
          while(head && head.value === target && f>0)  {
              head = head.next
              f--
          }
          
          let curr = head
          
          while (curr && f > 0) {
              if (curr.next && curr.next.value === target) {
                  f--
                  curr.next = curr.next.next
              }
              curr = curr.next
          }
  
          return head
  }
  

  function medianOfTwoSortedArrays(array1, array2) {

//     let newArr = array1.concat(array2).sort((a,b) => a-b)
//     const mid = Math.ceil(newArr.length/2);

//  let median
 
//  if (newArr.length % 2 === 0) {
//        median = (newArr[mid] + newArr[mid-1])/2
//    } else {
//        median = newArr[mid-1]
//    }
   
//   return median

let arr = []
// Break out of loop if any one of the array gets empty
while (left.length && right.length) {
    // Pick the smaller among the smallest element of left and right sub arrays 
    if (left[0] < right[0]) {
        arr.push(left.shift())  
    } else {
        arr.push(right.shift()) 
    }
}

// Concatenating the leftover elements
// (in case we didn't go through the entire left or right array)
return [ ...arr, ...left, ...right ]

}

console.log(medianOfTwoSortedArrays([1,3], [2, 4, 5]))
// function merge(left, right) {
//     let arr = []
//     // Break out of loop if any one of the array gets empty
//     while (left.length && right.length) {
//         // Pick the smaller among the smallest element of left and right sub arrays 
//         if (left[0] < right[0]) {
//             arr.push(left.shift())  
//         } else {
//             arr.push(right.shift()) 
//         }
//     }
    
//     // Concatenating the leftover elements
//     // (in case we didn't go through the entire left or right array)
//     return [ ...arr, ...left, ...right ]
// }
//optimized solution 
var findMedianSortedArrays = function(nums1, nums2) {
    if(nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1)
    let x = nums1.length
    let y = nums2.length
    let low = 0, high = x
    while(low <= high) {
        const partitionX = (high + low) >> 1
        const partitionY = ((x + y + 1) >> 1) - partitionX
        
        const maxX = partitionX == 0 ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1]
        const maxY = partitionY == 0 ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1]
        
        const minX = partitionX == nums1.length ? Number.POSITIVE_INFINITY : nums1[partitionX]
        const minY = partitionY == nums2.length ? Number.POSITIVE_INFINITY : nums2[partitionY ]
        
        if(maxX <= minY && maxY <= minX) {
            const lowMax = Math.max(maxX, maxY)
            if( (x + y) % 2 == 1)
                return lowMax
            return (lowMax + Math.min(minX, minY)) / 2
        } else if(maxX < minY) {
            low = partitionX + 1
        } else 
            high = partitionX - 1
    }
    
};
//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function printTreeByLevel(root) {
    if (!root) return null

    const queue = []
    let resultArr = [[root.value]]
    queue.push(root)
    while (queue.length > 0) {
      let currNode = queue[0]
      if (currNode.left) {
        queue.push(currNode.left)
      }
      if (currNode.right) {
        queue.push(currNode.right)
      }
      if (currNode.left && currNode.right) {
        resultArr.push([currNode.left.value, currNode.right.value])
      } else if (currNode.left && !currNode.right) {
        resultArr.push([currNode.left.value])
      }else if (!currNode.left && currNode.right) {
        resultArr.push([currNode.right.value])
      }
      queue.shift()
    }
    return resultArr
    
 }


 function findHeightBFS(root){
    if (!root) return 0
    let height = 0
    let queue = []
    
    queue.push(root)
    
    while (queue.length > 0) {
      height++
      let levelCount = queue.length
          
      while (levelCount > 0) {
        let curr = queue.shift()
        // console.log("CURR", curr)
        if (curr.left) {
          queue.push(curr.left)
        }
        if (curr.right) {
          queue.push(curr.right)
        }
        levelCount--
      }    
    }
    
    return height
      
  }

 //
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }

// function printTreeByLevel(root) {
//  if(!root){
//     return [];
//   }
//   let currLevel = [root];
//   let nextLevel = [];
//   let output = [];
  
//   while(currLevel.length) {
//     let nums = []
    
//     for(let i  = 0; i < currLevel.length; i++) {
//       let curr = currLevel[i];
//       nums.push(currLevel[i].value)
//       if (curr.left) nextLevel.push(curr.left)
//       if (curr.right) nextLevel.push(curr.right)
//     }
    
    
//     output.push(nums);
//     currLevel = nextLevel
//     nextLevel = []
//   }
  
//   return output
// }


/*

[4, 2, 5, 1, 6, 3, 7]
     1
   2    3
  4 5  6 7
  
[1, 2, 4

output = [4, 2, 5, 1, 6, 3, 7]
stack: [] 
curr: 

when curr is null:
- pop from stack

when pop from stack:
- put into output
- set curr to its right

when processing curr:
- put curr into stack
- go to left
*/

function iterativeInOrderTraversal(node) {
    let output = []
    let stack = []
    let curr = node
    
    while (curr || stack.length) {
      if (curr) {
        stack.push(curr)
        curr = curr.left
      } else {
        curr = stack.pop()
        output.push(curr.value)
        curr = curr.right
      }
    }
    return output
  }
  
  /*
      6
    3   7
  2  4   8
  */
  
  let tree = new Tree(6,
                  new Tree(3,
                       new Tree(2),
                       new Tree(4)),
                  new Tree(7,
                       null,
                       new Tree(8)))
  console.log(iterativeInOrderTraversal(tree));
  
  function printTreeByLevel(root) {
   if(!root){
      return [];
    }
    let currLevel = [root];
    let nextLevel = [];
    let output = [];
    
    while(currLevel.length) {
      let curr = currLevel.shift();
      if (curr.left) nextLevel.push(curr.left)
      if (curr.right) nextLevel.push(curr.right)
      
      if (currLevel.length == 0) {
        output.push(nextLevel)
        currLevel = nextLevel
        nextLevel = []
      }
    }
    
    return output
  }

  //eceba -> ece if 2 

  function longestSubstringGivenK(str, k) {
    
    let dict = {}
    for (let i=0; i<str.length; i++) {
        dict[str[i]] = (dict[str[i]] || 0) +1
    }

    console.log(dict)


  }

console.log(longestSubstringGivenK('eceba', 2))