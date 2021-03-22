// const _ = require('lodash');

// function sayHello() {
//   console.log('Hello, World');
// }

// _.times(5, sayHello);

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

/* 
Your previous Python 3 content is preserved below:

# def say_hello():
#     print('Hello, World')

# for i in range(5):
#     say_hello()


# 
# Your previous JavaScript content is preserved below:
# 
# // const _ = require('lodash');
# 
# // function sayHello() {
# //   console.log('Hello, World');
# // }
# 
# // _.times(5, sayHello);
# 

# def mystery_function(input):
#     e_cnt = 0
#     o_cnt = 0
#     for i in input:
#         if i % 2 == 0:
#             e_cnt += 1
#         else:
#             o_cnt += 1
#     return min(e_cnt, o_cnt)

# print(mystery_function([1, 2, 3])) 
# print(mystery_function([2, 2, 2, 3, 3])) 
# print(mystery_function([1, 100, 101, 200]))

def mystery_function(S):
    output = []
    for ch in S:
        if output and ch == output[-1]: 
            print("pre pop", output)
            output.pop()
            print("post pop", output)
        else: 
            print("else", ch)
            output.append(ch)
    return ''.join(output)

print(mystery_function('boo')) 
print(mystery_function('kitty'))
 */


// const dups = (str) => {
//   let result = ""
//   for (let el of str) {
//     if (result && el === result[result.length-1]) {
//      result = result.substring(0,result.length-1)
//         console.log('if', result)
//     } else {
//       console.log('else', result)
//       result += el
//     }
//   }
//   return result
// }

// console.log(dups('boo'))
// console.log(dups('kittty'))


// Create a dictionary mapping from elements in the array to the counts. Iterate through the array, incrementing their counts in the array. If you ever hit k, return the element.

function firstKTimes(array, k) {
    //     // Write your code here.    
        const counts = new Map();
    
      for (const el of array) {
        const count = (counts.get(el) || 0) + 1;
        if (count === k) return el;
        counts.set(el, count);
      }
    return -1
    
// other way
        if (!array) return -1
        const dict = {}
        for (let i=0; i<array.length; i++) {
          dict[array[i]] = (dict[array[i]] || 0) +1
          if (dict[array[i]] === k) {
            return dict[array[i]]
          }
        }
        return -1
    }

    // // Test Cases
    // console.log(firstKTimes([1, 2, 2, 3, 3], 2)) // 2
    // console.log(firstKTimes([1, 2, 2, 3, 3], 3)) // -1
    // console.log(firstKTimes([], 1)) // -1
    
    
    // Approach # 1. Iterate through the array, keeping track of the count of each element by incrementing them as you go through. Iterate through the dictionary, keeping track of the number of elements whose values are 1.
    // Approach #2. Iterate through the array, keeping track of the count of each element by incrementing them as you go through. When you the count of a number is 1, increment the unique count. When the count of a number os 2, decrement the unique count. When it is any other value, skip.
    function numUniques(array) {
      const dict = {}
      let totalCount = 0
      for (let i=0; i<array.length; i++) {
      dict[input[i]] = (dict[input[i]] || 0) +1
        if (array[i] in dict) {
          dict[array[i]] +=1
        }
        dict[array[i]] =1
      }
      for (let key in dict) {
        if (dict[key] === 1) {
          totalCount++
        }
      }
    return totalCount
      // const counts = new Map();
    
      // array.forEach(el => {
      //   counts.set(el, (counts.get(el) || 0) + 1);
      // });
    
      // return Array.from(counts.values())
      //   .filter(count => count === 1)
      //   .length;
    }
    
    // // Test Cases
    // console.log(numUniques([])) // 0
    // console.log(numUniques([3, 1, 1, 2, 3, 1, 1, 1, 4])) // 4
    // console.log(numUniques([1])) // 1
    
    // Iterate through the array, keeping track of the count of each element by incrementing them as you go through. Whenever the count of an element is 2, increment the number of duplicated values. When the element is any other value, do nothing.
    function numDuplicates(array) {
        // Write your code here.
      let count = {}
        for (let el of array) {
          if (el in count) {
            count[el] +=1
          } else {
            count[el] = 1
          }
        }
      let dups = 0
      
      for (let key in count) {
        if (count[key] >= 2) {
          dups++
        }
      }
      return dups
    
      // const counts = new Map();
    
      // array.forEach(el => {
      //   counts.set(el, (counts.get(el) || 0) + 1);
      // });
    
      // return Array.from(counts.values())
      //   .filter(count => count > 1)
      //   .length;
    }
    
    // Test Cases
    // console.log(numDuplicates([])) // 0
    // console.log(numDuplicates([3, 1, 1, 2, 3, 1, 1, 1, 4])) // 2
    // console.log(numDuplicates([1])) // 0
    
    
    // • Sort the array as just a normal unsorted array.
    // • Two passes. First pass: count the number of 0s, 1s and 2s. Second pass: overwrite the original array with the correct number of 0s, then 1s, then 2s.
    // • One pass (read about this on Leetcode)
    
    const dnf = function(nums) {
        //insertion sort this ish
        // let count = 0
        // while (count < nums.length) {
        //     for (let i=0; i<nums.length; i++) {
        //         if (nums[i] > nums[i+1]) {
        //             swap(i, i+1, nums)
        //         }
        //     }
        //     count++
        // }
        // return nums
        
        //two passes?
    //      let zero =0
    //      let one= 0
    //      let two =0
         
    //      for (let el of nums) {
    //          if (el === 0) zero++
    //          if (el === 1) one++
    //          if (el === 2) two++
    //      }
    //     let i=0
    //          while (zero > 0) {
    //                 nums[i] = 0
    //                 zero--
    //                 i+=1
    //          }
    //          while (one > 0) {
    //              nums[i] = 1
    //              one--
    //              i+=1
    
    //          }
    //          while  (two >0) {
    //             nums[i] = 2
    //             two--
    //             i+=1
    //         }
    //     return nums
        
        //one pass
        /*
        -create a pointer at the begining of the array
        -create a pointer for the end of the array
        -iterate over the array until i <= to high
    
    
      */
        let low = 0
        let high = nums.length-1
        
        //[2,0,2,1,1,0]
        //[0,0,2,1,1,2]
        //[0,0,2,1,1,2]
        //[0,0,1,1,2,2]
          for (let i = 0; i <= high; i++) {
            console.log(i)
            if (nums[i] === 0) {
                // [nums[i], nums[low]] = [nums[low], nums[i]]
                swap(i, low, nums)
                low++;
            } else if (nums[i] == 2) {
                // [nums[i], nums[high]] = [nums[high], nums[i]]
                swap(i, high, nums)
                high--;
                i--
            } 
        }
        return nums
        
    };
    
    function swap (i, j, array) {
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    
    // // console.log(dnf([2,0,2,1,1,0]))
    // console.log(dnf([0, 0, 1, 1, 2, 2]))
    
    // test.startProblem("Dutch National Flag")
    // var array1 = []; dnf(array1) // return []
    // var array2 = [2, 1, 1, 0]; dnf(array2)
    // var array3 = [0, 2, 1, 0, 1, 2]; dnf(array3)
    // // test.testForArrays([], array1, 1)
    // // test.testForArrays([0, 1, 1, 2], array2, 2)
    // test.testForArrays([0, 0, 1, 1, 2, 2], array3, 3)
    // test.endProblem()
    
    function binarySearch(array, target) {
      // Write your code here.  
      let first = 0;
      let last = array.length - 1; //9
      let targetIndex = -1;
      let middle;
      
      while (targetIndex === -1 && first <= last) {
          middle = Math.floor((first + last) / 2);
            //middle = 4 
          // middle = (0 + 3)/2 1.5, so 1
          // middle == 0/2 = 0
        
          if (array[middle] === target) {
              targetIndex = middle;
          } else if (array[middle] > target) {
            //want to target the left, so setting last to middle which is 4 -1 = 3
            //last == 0 (1-1)
              last = middle - 1;
          } else {
            //first 5
              first = middle + 1;
          }
      }
      return targetIndex;
      return search(array, target, first, last)
    }
    
    function search(array, target, first, last) {
      if (first > last) return -1
      
      let middle = Math.floor((first+last)/2)
      if (array[middle] === target) {
        return middle
      }
      else if (array[middle] > target) {
                return search(array, target, first, middle-1)
            } else {
                return search(array, target, middle+1, last)
            }
    
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
      //have a counter to decrement the length after swapping 
      let counter = 0
      //have a boolean to check if the array was sorted
      let isSorted = false
      //iterate over the array as long as isSorted is false
      while(!isSorted) {
          //set isSorted to be true long as array[i] and array[j] is not greater, then we continue looping until evenutally isSorted will remain true 
          isSorted = true
          for (let i=0;i<array.length-counter; i++) {
              if (array[i] > array[i+1]) {
                  swap(i,i+1,array)
                  isSorted = false
              }
          }
          //increases counter after the loop because we've shortening the loop after each loop because the end of the array is always sorted
          counter++
      }
      return array
    
      //alternative approach
      // for(let i=0; i<array.length; i++) {
      //     for (let j=0; j< array.length-1; j++) {
      //         if(array[j] <array[j-1]) {
      //             swap(i, j, array)
    
      //         }
      //     }
      // }
      // return array
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
      //iterate over the array as long as count variable is less than the array length
      let count = 0
      while (count < array.length) {
          for (let i=0;i<array.length; i++) {
              if (array[i] > array[i+1]) {
                  swap(i, i+1, array)
              }
          }
          count++
      }
    return array
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
        for (let i = 0; i < array.length; i++) {
            for (let j = i + 1; j < array.length; j++) {
                if (array[i] > array[j]) {
                  swap(i,j,array)
                }
            }
          }
          return array
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
      // check to see if array is splittable - if not, return array
      if (array.length < 2) return array;
    
      // split array into two arrays down the middle
      const midpoint = Math.floor(array.length / 2);
      const left = array.slice(0, midpoint);
      const right = array.slice(midpoint);

      // console.log('in org function', left, right)
      // run merge function on the subarrays passing through the merge sort function
      return merge(mergeSort(left), mergeSort(right));
    };
    
    // * Merge helper function
    const merge = (left, right) => {
      //   console.log('in helper func', left, right)
      // decleare an empty result array
      const result = [];
      // while both halves have length
      while (left.length && right.length) {
          // console.log("in while - result", result, "left", left, "right:", right)
        // if left at first idx is smaller or equal to right at first idx
        if (left[0] <= right[0]) {
          //   console.log('in if', left, right)
          // push left at first idx into result
          result.push(left.shift());
          // if not, push right into result
        } else {
          // console.log('in else', left, right)
          result.push(right.shift());
        }
      }
      // if there's anything left in left, push the remainder in left into result
      while (left.length) result.push(left.shift());
      // if there's anything left in right, push the remainder in right into result
      while (right.length) result.push(right.shift());
      // console.log("result", result)
      // when both arrays are empty, return merge-sorted array
      return result;
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
    
    //The swap functionality // helper function 
    
    function swap (i, j, array) {
      let temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }

function countTreeNodesRecursive(root) {
    // Write your code here.
    if (!root) return null
    let count = 1
     function dfs(root) {
     if (root) {
          if( root.left){
                count +=1
                 dfs(root.left)
           }
          if( root.right){
                count +=1
                 dfs(root.right)
           }
      }
}
    dfs(root)
    return count
}

// function countTreeNodesIterative(root) {
//     // Write your code here.
//     // if (!root) return null
//     // let result = [];
//     // if (!root.left) result.push(countTreeNodesIterative(root.left));
//     // result = result.push(root.val);
//     // if (!root.right) result.push(countTreeNodesIterative(root.right));
//     // return result.length;
// }

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
    if (!root) return 0
    let sum = 0
    function dfs(root) {
        if (root) {
            sum+=root.value
             if(root.left){
                dfs(root.left)
              }
             if(root.right){
                dfs(root.right)
              }
         }
   }
       dfs(root)
       return sum
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
    if (!root) return null
    let max = -Infinity
    function dfs(root) {
        if (root) {
            if (root.value > max) {
                max = root.value
            }
             if(root.left){
                dfs(root.left)
              }
             if(root.right){
                dfs(root.right)
              }
         }
   }
       dfs(root)
       return max    
}

// // Test Cases
// console.log(findMaxBT(null)) // null
// console.log(findMaxBT(new TreeNode(1, new TreeNode(2), new TreeNode(3)))) // 3
// console.log(findMaxBT(new TreeNode(2, new TreeNode(29, new TreeNode(26)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9)))))) // 29
// console.log(findMaxBT(new TreeNode(1))) // 1

//Find the height of a binary tree
function findHeight(root) {
    if (!root) return null
    let leftH = 1
    let rightH = 1
    function dfs(root) {
        if (root) {
             if(root.left){
                leftH+=1
                dfs(root.left)
              }
             if(root.right){
                rightH+=1
                dfs(root.right)
              }
         }
   }
       dfs(root)
       return Math.max(leftH, rightH)
}


function height(node) {
  if (!node || (!node.left && !node.right)) {
    return 0
  }
  
  return Math.max(height(node.left),
                  height(node.right)) + 1
}
//time complexity: O(n) visiting each node once(n = # of nodes)
//space complexity: O(height of tree) 
function findHeightRecursive(root){
    if (!root) return 0
    
    const leftSide = findHeightRecursive(root.left)
    const rightSide = findHeightRecursive(root.right)
    
    return Math.max(leftSide,rightSide) + 1
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


function findHeightDFS(root){
    if(!root) return 0
     let maxHeight = 0
     let stack =[[root,1]]
   
     while (stack.length > 0){
       let [curr, height] = stack.pop()
       
         if (curr.left) {
           stack.push([curr.left, height+1])
         }
         if (curr.right) {
           stack.push([curr.right, height+1])
         }
       maxHeight = Math.max(maxHeight, height)
     }
     return maxHeight
   }
   
  
// Test Cases
// console.log(findHeight(null)) // 0
// console.log(findHeight(new TreeNode(1, new TreeNode(2), new TreeNode(3)))) // 2
// console.log(findHeight(new TreeNode(2, new TreeNode(29, new TreeNode(26)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9)))))) // 4
// console.log(findHeight(new TreeNode())) // 1

//Find an element in a binary tree using DFS or BFS
function searchBT(root, target) { 
    // Write your code here.
    if (!root) return false
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
    if (root.value === target) return true

    let leftSearch = searchBT(root.left, target)
    if (leftSearch) return true
    let rightSearch = searchBT(root.right, target)
    return rightSearch
}

// Test Cases
// var tree1 = new TreeNode(3, new TreeNode(29, new TreeNode(2)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9))))
// console.log(searchBT(null, 1)) // false
// console.log(searchBT(tree1, 9)) // true
// console.log(searchBT(tree1, 1)) // false
// console.log(searchBT(tree1, 2)) // true
// console.log(searchBT(new TreeNode(1), 2)) // false

function searchBST(root, target) {
      if (!root) return false
      if (root.value === target) return true
      if (root.left && root.value > target) {
        return searchBST(root.left, target)
      }
      else if (root.right && root.value < target) {
        return searchBST(root.right, target)
      }
      else {
        return false
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
function countElements(head, count=0) {
    // Write your code here.
//iterative approach
//     let curr = head
//     let count = 0
    
//     while (curr) {
//       count++
//       curr = curr.next
//     }
//     return count
  
  //recursive approach
  //base case 
  if (!head) return count
  //recursive call - set head to head.next and increment count by 1
  return countElements(head=head.next, count+=1)
}

// // Test Cases
// var LL1 = new ListNode(1, new ListNode(4, new ListNode(5)))
// console.log(countElements(null)) // 0
// console.log(countElements(LL1)) // 3
// console.log(countElements(new ListNode())) // 1


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
   // edge case to handle null
    if (!head) return new ListNode(target)
    //pointer so we don't lose track of of the original list
    // let curr = head
    //iterate over the list until we reach the last element
    while (curr.next){
      curr = curr.next
    }
    //set the next element to the next new target
    curr.next = new ListNode(target)
    //return the original ll
    return head
  
  //recursive approach
    //edge case
    if (!head) return new ListNode(target)
    if (!curr.next) {
      curr.next = new ListNode(target)
      return head
    }
    return append(head, target, curr = curr.next)
  
}

function appendRecursive(node, value) {
  if (node.next) {
    appendRecursive(node.next, value);
  } else {
    node.next = new ListNode(value);
  }
  return node
}

// // Test Cases
// var LL1 = new ListNode(1, new ListNode(4, new ListNode(5)))
// console.log(arrayify(append(null, 1))) // [1]
// console.log(arrayify(append(LL1, 7))) // [1, 4, 5, 7]
// console.log(arrayify(append(new ListNode(), 7))) // [0, 7]
// console.log(arrayify(appendRecursive(LL1, 7))) // [1, 4, 5, 7]

function sumElements(head) {
    // Write your code here.
  //iterative approach
    if (!head) return 0
    let sum = 0
    while (head) {
      sum += head.value
      head = head.next
    }
    return sum
    //recursive approach
//   if (!head) return 0
//   if (!head.next) return head.value
  
//   return head.value += sumElements(head=head.next)
}

// // // Test Cases
// var LL1 = new ListNode(1, new ListNode(4, new ListNode(5)))
// console.log(sumElements(null)) // 0
// console.log(sumElements(LL1)) // 10
// console.log(sumElements(new ListNode(1))) // 1

        
function findMax(head, max=-Infinity) {
    // Write your code here.
    //iterative approach
  //   let max = -Infinity
  //   while (head) {
  //     if (head.value > max) {
  //       max = head.value
  //     }
  //     head = head.next
  //   }
  // return max
  
  //recursive approach
  if (!head) return max
  if (head.value > max) {
    max=head.value
  }
  return findMax(head.next, max)

}


// // Test Cases
// var LL1 = new ListNode(1, new ListNode(4, new ListNode(5, new ListNode(1))))
// var LL2 = new ListNode(7, new ListNode(1, new ListNode(5, new ListNode(1))))
// var LL3 = new ListNode(-1, new ListNode(-3, new ListNode(-5, new ListNode(0, new ListNode(-11)))))
// console.log(findMax(LL1)) // 5
// console.log(findMax(LL2)) // 7
// console.log(findMax(LL3)) // 0
// console.log(findMax(new ListNode(1))) // 1

function searchLL(head,  target) { 
    // Write your code here.
    //iterative 
    // while (head) {
    //   if (head.value === target) {
    //     return true
    //   } else if (head.value > target) {
    //     return false
    //   } else {
    //     head = head.next
    //   }
    // } 
    // return false
  
  //recursive approach
  if (head && head.value === target) return true
  if (head) {
      return searchLL(head.next, target)
  }

  return false
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

   //     if (!head) return null
  
//    while (head && head.value === target) {
//      head = head.next
//    } 
  
//   let curr = head
  
//   while (curr) {
//     if (curr.next && curr.next.value === target) {
//       curr.next = curr.next.next
//     }
//     curr = curr.next
//   }
//   return head
  // recursive
  if (!head) {
    return null;
  } else if (head.value === target) {
    return remove(head.next, target);
  } else {
    head.next = remove(head.next, target);
    return head;
  }
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
   //iterative
    // if (!head) return new ListNode(target)
//     if (target <= head.value) {
//       let newll = new ListNode(target, head)
//       return newll
//     }
  
//     let curr = head

//     let prev
//     while (curr && target > curr.value ) {
//         prev = curr
//         curr = curr.next   
//     }
//     prev.next = new ListNode(target)
//     prev.next.next = curr
    
//    return head
  //recursive
  if (!head) return new ListNode(target)
  else if (target < head.value) {
  return new ListNode(target, head);
} else {
  head.next = insert(head.next, target);
}

return head;
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
    //if there's no head, return null
    if (!head) return null
    //edge case --checks if head exists && the first node in the linked list is === target 
    while (head && head.value === target) {
        head = head.next
    }
    //reference to head
    let curr = head

    // //reference to previous 
    // let prev = curr
    // //iterate over curr until curr is null
    // while(curr) {
    //     //checks if the curr value is not the target, then we update prev to curr and set curr head to the next
    //     if (curr.value !== target)  {
    //         prev = curr
    //         curr = curr.next
    //     }
    //     //checks if curr value is the target
    //     else {
    //         //if curr.next is not null then we move the pointer from the previous's next = to curr.next -- "removing the node"
    //        if (curr.next) {
    //           prev.next = curr.next
    //         }
    //         //else if there is no node after the current node, we set the previous's next to null -- "removing the node"
    //         else {
    //             prev.next = null
    //         }
    //         //update curr to curr.next
    //         curr = curr.next
    //     }
    // }
    // return head
   
//     let curr = head;

//     while (head && head.value === target) {
//       head = head.next;
//     }

    while (curr) {
      if (curr.next && curr.next.value === target) {
        curr.next = curr.next.next;
      } else {
        curr = curr.next;
      }
    }
  
    return head;
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

    let dummy = new ListNode(0)
    dummy.next = head
    if (!head) return null
    //two pointers, one faster than the slow
    let fast = dummy
    let slow = dummy
    
    //iterate until fast.next.next is null
    while(fast && fast.next) {
       slow = slow.next
       fast = fast.next.next
    }
    return slow
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
    //two pass
//     if (!head || k<1) {
//         return null
//     }

    // let length = 0
    // let curr = head

    // while(curr){
    //   length += 1
    //   curr = curr.next
    // }
    // let kthNode = head
    // if (k <= length){
    //    for (let i = 0; i<length - k; i++){
    //       kthNode = kthNode.next
    //    }
    // }else{
    //     //kth node is out of range
    //    return -1
    // }
    // return kthNode.value 

    // 13, 1, 5, 3, 7, 10
    //                 f  
    //              s
    let slow = head
    let fast = head
    for(let i = 0; i<k-1; i++){
       //if its out of bounds
        if(!fast.next) return -1
        fast = fast.next;    
    }
    while(fast.next){
     slow = slow.next
     fast = fast.next
    }
    return slow.value
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
    //have a copy of head1 to reference
    //iterate over the second 
    //sum the values of head 
    let curr1 = head1
    while(head2) {
        curr1.value = curr1.value + head2.value
        head2=head2.next
        curr1=curr1.next
    }
    return head1
}

// // Test Cases
// var LL1 = new ListNode(1, new ListNode(3, new ListNode(5)))
// var LL2 = new ListNode(-1, new ListNode(3, new ListNode(-10)))
// console.log(arrayify(sumLinkedLists(LL1, LL2))) // [0, 6, -5]
// console.log(arrayify(sumLinkedLists(new ListNode(0), new ListNode(0)))) // [0]

//reverse linked list
function reverseLL(head) {
    // Write your code here.
    if (!head) return null

    //create a variable to update and store each node
    let prev

    while(head) {
        let tempHead = head.next
        head.next = prev
        prev = head
        head = tempHead
    }
    return prev
}

// // // Test Cases
// var LL1 = new ListNode(13, new ListNode(1, new ListNode(5, new ListNode(3, new ListNode(7, new ListNode(10))))))
// console.log(arrayify(reverseLL(new ListNode(1)))) // [1]
// console.log(arrayify(reverseLL(new ListNode(1, new ListNode(2))))) // [2, 1]
// console.log(arrayify(reverseLL(LL1))) // [10, 7, 3, 5, 1, 13]


//removing kth node
function removeKthFromLast(head, k) {
    // Write your code here.
    //iterative
    //dummy node, slow, fast
    let dummy = new ListNode(0)
    //how we associate head with the dummy node
    dummy.next = head
    let slow = dummy
    let fast = dummy

    while (fast.next) {
        console.log("FAST", fast, "slow", slow)
        fast = fast.next
        if (k <= 0) {
            slow = slow.next
        }
        k--
    }

    slow.next = slow.next.next
    console.log("DUMMY", dummy)
    return dummy.next

}


function constructLL(target, count) {
  let list = new ListNode(0)
  let curr = list
  
  while (count > 0) {
      curr.next = new ListNode(target)
      curr = curr.next
      count--
  }    
  return list.next
}

function insertZerosInLL(head) {
  if (!head) return null

  let curr = head
  let prev = null

  while (curr) {
      prev = curr.next
      curr.next = new ListNode(0)
      curr.next.next = prev
      curr = curr.next.next
  }
  return head
}

function convertArrayToLL(array) {
if (!array) return null
let head = new ListNode(0)
let curr = head


for(let i=0; i<array.length; i++) {
    curr.next = new ListNode(array[i])
    curr = curr.next
}

return head.next

}

function firstKTimesLL(head, k) {
  if (!head) return -1
  const dict = {}
  let curr = head
  while(curr) {
      dict[curr.value] = (dict[curr.value] || 0) +1
      if (dict[curr.value] === k) {
          return curr.value
        } 
      curr = curr.next
  }
  return -1
}

function limitToKTimesLL(head, k) {
  if (!head) return null
  const dict = {} 
  
  let sentinel = new ListNode(0)
  sentinel.next = head
  let curr = sentinel
  let prev = curr
  
  while(curr) {
      dict[curr.value] = (dict[curr.value] || 0) +1
      if (dict[curr.value] > k) {
          while (curr) {
          prev.next = curr.next
          }
      } else {
      prev = curr
      }
      curr = curr.next
  }
  return sentinel.next
}

