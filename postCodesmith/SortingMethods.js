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
    let startIdx = 0
    //2,3,5,4,8,1
    while (startIdx < array.length-1) {
	let smallestIdx = startIdx  
	for (let i=startIdx +1; i< array.length; i++) {
		if (array[smallestIdx] > array[i]){
			smallestIdx = i
		} 
		swap(startIdx, smallestIdx, array)
		startIdx++
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
console.log(mergeSort([8,5,2,9,5,6,3]))
console.log(mergeSort([]))
console.log(mergeSort([-10, 1, 3, 8, -13, 32, 9, 5])) // [-13, -10, 1, 3, 5, 8, 9, 32]


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