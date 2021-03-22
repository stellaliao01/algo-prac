
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

// Create a dictionary mapping from elements in the array to the counts. Iterate through the array, incrementing their counts in the array. If you ever hit k, return the element.

function firstKTimes(array, k) {
//     // Write your code here.
   const dict = {}
   for (let i=0; i<array.length; i++) {
     if (array[i] in dict) {
       dict[array[i]] += 1
     } else {
       dict[array[i]] = 1
     }
   }

    for (let key in dict) {
      if (dict[key] === k) {
        return key
      }
    }
  return -1
}
function firstToK(input, k) {
  const dict = {}
  let completed = []
  for (let i=0; i<input.length; i++) {
    dict[input[i]] = (dict[input[i]] || 0) + 1
    
    if (dict[input[i]] === k) {
      completed.push(input[i])
    }
  }
  return completed
}
  
//     const counts = new Map();

//   for (const el of array) {
//     const count = (counts.get(el) || 0) + 1;
//     console.log("count", count, "el", el)
//     if (count === k) return el;
//     counts.set(el, count);
//   }
// return -1
// }

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
      if (array[i] in count) {
        count[array[i]] +=1
      }
      count[array[i]] =1
    }
    for (let key in count) {
      if (count[key] === 1) {
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
  // or return map.size
}

// return [...new Set(input)]
// return new Set(input).size

function maxElem (input) {
  let max
  let occurences = 0
  const dict = {}
  
  for (let i=0; i<input.length; i++) {
     dict[input[i]] = (dict[input[i]] || 0) +1
    if (dict[input[i]] > occurences){
      max = input[i]
      occurences = dict[input[i]
    }
  }
  
  return max
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
  console.log("count", count)
  
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
  // let targetIndex = -1;
  // let middle;
  
  // while (targetIndex === -1 && first <= last) {
  //     middle = Math.floor((first + last) / 2);
  //     if (array[middle] === target) {
  //         targetIndex = middle;
  //     } else if (array[middle] > target) {
  //         last = middle - 1;
  //     } else {
  //         first = middle + 1;
  //     }
  // }
  // return targetIndex;
  return search(array, target, first, last)
}

function search(array, target, first, last) {
  if (first > last) return -1
  
  let middle = Math.floor((first+last)/2)
  // console.log(first, last, middle)
  if (array[middle] === target) {
    return middle
  }
  else if (array[middle] > target) {
            return search(array, target, first, middle-1)
        } else {
            return search(array, target, middle+1, last)
        }

}

function shiftedBinarySearch(array, target) {
  // Write your code here.
	let low = 0
	let high = array.length-1
	
	while (low <= high) {
		mid = Math.floor((low+high)/2)
		console.log(mid)
		if (array[mid] === target) {
			return mid
		} 
		
		if (array[low] <= array[mid]) {
			if (array[low] <= target && target <= array[mid]) {
				high = mid -1
			} else {
				low = mid + 1
			}
		} else{
			if (array[mid] <= target && target <= array[high]) {
				low = mid+1
			} else {
				high = mid-1
			}
		}
	}
	return -1
}


// Test Cases
var array = [1, 2, 3, 6, 8, 13, 113, 153, 200]
console.log(binarySearch(array, 1)) // 0
console.log(binarySearch(array, 200)) // 8
console.log(binarySearch(array, 8)) // 4
console.log(binarySearch(array, 154)) // -1

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




/* 8 5 2 9 5 6 3 
   j
     i
-  5 8| 2 9 5 6 3 
       j
        i
-  5 2 8| 9 6 6 3 
   2 5 8
  
*/
function insertionSort(array) {
  for(let i=1; i<array.length; i++) {
    let j=i
    while (j > 0 && array[j] < array[j-1]) {
      swap(j, j-1, array)
      j-=1
    }
  }
  return array
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    console.log('for', arr)
      let key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
        console.log("while", arr)
      }
      arr[j + 1] = key;
  }
  return arr;
};

function swap (i, j, array) {
	let temp = array[j]
	array[j] = array[i]
	array[i] = temp 
}

// console.log(insertionSort([8,5,2,9,5,6,3]))



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
const selectionSort = (arr) => {

for (let i = 0; i < arr.length; i++) {
  let min = i;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[min] > arr[j]) {
      min = j;
    }
    [arr[i], arr[min]] = [arr[min], arr[i]]
  }
}
return arr;
}

// console.log("SELECTION", selectionSort([2,3,5,4,8,1]))

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

/*
Binary Search


*/





// Firefox uses merge sort. Chrome, as of version 70, uses a hybrid of merge sort and insertion sort called Timsort.

// The time complexity of merge sort is O(n log n). While the specification does not specify the sorting algorithm to use, in any serious environment, you can probably expect that sorting larger arrays does not take longer than O(n log n) (because if it did, it would be easy to change to a much faster algorithm like merge sort, or some other log-linear method).

// While comparison sorts like merge sort have a lower bound of O(n log n) (i.e. they take at least this long to complete), Timsort takes advantages of "runs" of already ordered data and so has a lower bound of O(n).


/*
Both insertion sort and selection sort have an outer loop (over every index), and an inner loop (over a subset of indices). Each pass of the inner loop expands the sorted region by one element, at the expense of the unsorted region, until it runs out of unsorted elements.
The difference is in what the inner loop does:
In selection sort, the inner loop is over the unsorted elements. Each pass selects one element, and moves it to its final location (at the current end of the sorted region).
In insertion sort, each pass of the inner loop iterates over the sorted elements. Sorted elements are displaced until the loop finds the correct place to insert the next unsorted element.
So, in a selection sort, sorted elements are found in output order, and stay put once they are found. Conversely, in an insertion sort, the unsorted elements stay put until consumed in input order, while elements of the sorted region keep getting moved around.
*/



function firstKTimes(array, k) {
  if (!array) return null
  const cache = {}
  for (let i=0; i<array.length; i++) {
      if (array[i] in cache) {
          cache[array[i]] += 1
      } else {
          cache[array[i]] = 1
      }
  }
  for (let key in cache) {
      if (cache[key] === k || cache[key] > key) {
          return Number(key)
      }
  }
  return -1
}



function alternate (array) {
  let output = []

  array.sort((a,b) => a-b)
  
  let lastEl = array.pop()
  
  let min = 0
  let max = array.length-1

  while (output.length < array.length) {
    if (array.length % 2 === 0) {
       output.push(array[max])

       if (min !== max) {
       output.push(array[min])
       }
     min++
     max--
    } else {
      output.push(array[min])
    //odd cases
        if (min !== max) {
          output.push(array[max])
        }
    
    min++
    max--
    }
    
 }
  output.push(lastEl)
  return output
}

console.log(alternate([1, 5, 6, 2, 3]))
console.log(alternate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13])) 
console.log(alternate([9, 8, 5, 4, 22, 17, 13, 10]))