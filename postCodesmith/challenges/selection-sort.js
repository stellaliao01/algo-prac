/*

Given an array of integers, sort the array in-place and return the array.
Do not create a new array in memory. Instead, modify the array as given. Do not
use the array sort method built in to the array prototype while solving the
problem. The integers should be in ascending order from left to right.

We will sort the array using a strategy called selection sort, which works as
follows. First, put the smallest number in the array at position 0. Then, put
the second-smallest number in the array at position 1. Then, put the
third-smallest number in the array at position 2 etc. After going through the
whole array, the array will end up being sorted.

*/

const selectionSort = array => {

};

/*

Extension:

Given an array of integers, sort the array in-place and return the array.
Do not create a new array in memory. Instead, modify the array as given. Do not
use the array sort method built in to the array prototype while solving the
problem. The integers should be in ascending order from left to right.

For this extension, we will use a strategy called insertion sort, which works as
follows. Imagine that the first k - 1 numbers of the array are in ascending
order. We take the kth number and insert it into the correct position amongst
the k - 1 numbers such that now, the first k numbers of the array are in
ascending order. In other words:

The first value in the array is considered to be already fine.
The second value is either placed before/after the first value.
The third value is inserted in the correct position amongst the first two values.
The fourth value is inserted in the correct position amongst the first three values.
etc.

*/

const insertionSort = array => {

};

module.exports = { selectionSort, insertionSort };
// Best: O(n^2) time | O(1) space
// Average: O(n^2) time | O(1) space
// Worst: O(n^2) time | O(1) space

function selectionSort(arr) {
    // the `i` loop will track the index that points to the first element of the unsorted region:
    //    this means that the sorted region is everything left of index i
    //    and the unsorted region is everything to the right of index i
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;

        // the `j` loop will iterate through the unsorted region and find the index of the smallest element
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }

        // after we find the minIndex in the unsorted region,
        // swap that minIndex with the first index of the unsorted region
        swap(arr, i, minIndex);
    }
    return arr;
}

function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

// ************************* SOLUTION 2 ***************************

// Best: O(n^2) time | O(1) space
// Average: O(n^2) time | O(1) space
// Worst: O(n^2) time | O(1) space

function selectionSort(array) {
    // keep track of index of first number in unsorted list
    let currentIdx = 0;
    // while our index is within the bounds of our aray
    while (currentIdx < array.length - 1) {
        // initialize smallest idx to be first number in unsorted list
        let smallestIdx = currentIdx;
        for (let i = currentIdx + 1; i < array.length; i++) {
            // start at second index, check if the num we have
            // is greater than current number, update smallest indx to be current idx
            if (array[smallestIdx] > array[i]) smallestIdx = i;
        }
        // swap number of current index with smallest index
        swap(array, currentIdx, smallestIdx);
        // increment start value of sorted sublist
        currentIdx++;
    }
    return array;
}

function swap(array, idx1, idx2) {
    let temp = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = temp;
}

/*
​
Extension:
​
Given an array of integers, sort the array in-place and return the array.
Do not create a new array in memory. Instead, modify the array as given. Do not
use the array sort method built in to the array prototype while solving the
problem. The integers should be in ascending order from left to right.
​
For this extension, we will use a strategy called insertion sort, which works as
follows. Imagine that the first k - 1 numbers of the array are in ascending
order. We take the kth number and insert it into the correct position amongst
the k - 1 numbers such that now, the first k numbers of the array are in
ascending order. In other words:
​
The first value in the array is considered to be already fine.
The second value is either placed before/after the first value.
The third value is inserted in the correct position amongst the first two values.
The fourth value is inserted in the correct position amongst the first three values.
etc.
​
*/

// input: unsorted array
// output: sorted array (ascending order)

/*
Iterate through the array
​
*/

// ************************* SOLUTION 1 ***************************

function insertionSort(array) {
    // Write your code here.
    for (let i = 1; i < array.length; i++) {
        let j = 1;
        while (j > 0 && array[j] < array[j - 1]) {
            swap(array, j, j - 1);
            j -= 1;
        }
    }
    return array;
}

function swap(array, idx1, idx2) {
    let temp = array[idx2];
    array[idx2] = array[idx1];
    array[idx1] = temp;
}

// ************************* SOLUTION 2 ***************************

function insertionSort(arr) {
    // the `i` loop will iterate through every element of the array
    // we begin at i = 1, because we can consider the first element of the array as a
    // trivially sorted region of only one element
    // insertion sort allows us to insert new elements anywhere within the sorted region
    for (let i = 1; i < arr.length; i++) {
        // grab the first element of the unsorted region
        let currElement = arr[i];

        // the `j` loop will iterate left through the sorted region,
        // looking for a legal spot to insert currElement
        for (var j = i - 1; j >= 0 && currElement < arr[j]; j--) {
            // keep moving left while currElement is less than the j-th element

            arr[j + 1] = arr[j];
            // the line above will move the j-th element to the right,
            // leaving a gap to potentially insert currElement
        }
        // insert currElement into that gap
        arr[j + 1] = currElement;
    }
    return arr;
}

module.exports = { selectionSort, insertionSort };