// So you'll be given an array of integers and another array of 3 distinct integers. The first array is guaranteed to only contain integers that are in the second array, and the second array represents a desired order for the integers in the first array. 
// Write a function that sorts the first array according to the desired order in the second array. Note that the desired order doesn't have to be in numerically in order but it has to follow the second array's order. 
// Sample input: 
// array = [1,0,0,-1,-1,0,1,1]
// order = [0, 1, -1]
// Output: [0,0,0,1,1,1,-1,-1]
// PS: Function should perform this in place and not create and auxiliary space(any new arrays). 
// Boilerplate: 
/* Plan of Attack
-sort first element of the ordered array to the front of the array
-have a pointer to keep track of the sorted index

[1,0,0,-1,-1,0,1,1] -> [0,1,0,-1,-1,0,1,1]
[0,1,0,-1,-1,0,1,1] -> [0,0,1,-1,-1,0,1,1]
[0,0,1,-1,-1,0,1,1] -> [0,0,0,1,-1,-1,1,1]

-sort the last element of the ordered array to the end of the array
-have a pointer to keep track of the sorted index

[0,0,0,-1,-1,1,1] -> [0,0,0,-1,1,1,-1]
[0,0,0,-1,1,1,-1] -> [0,0,0,1,1,-1,-1]
*/

// O(n) time | O(1) space - where n is th length of the array
function threeNumberSort(array, order) {
    // Write your code here.

    //store the first and last variables in the order array
    const firstVal = order[0]
    const thirdVal = order[2]

    //have a pointer to keep track of the swapped idx so that after it swaps, it'll add the next swap to the next index
    let zerothIdx = 0
    for (let i = 0; i < array.length; i++) {
        //check if the element of the array === the value of the 0th index of the order array
        if (array[i] === firstVal) {
            swap(zerothIdx, i, array)
            zerothIdx++
        }
    }
    //after the first loop the array will now be [0,0,0,-1,-1,1,1]
    let lastIdx = array.length - 1 // 6
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] === thirdVal) {
            swap(lastIdx, i, array)
            lastIdx--
        }
    }
    return array
}

function swap(first, second, array) {
    const temp = array[second]
    array[second] = array[first]
    array[first] = temp
}




let testArray = [1, 0, 0, -1, -1, 0, 1, 1]
let orderArray = [0, 1, -1]
console.time("start")
threeNumberSort(testArray, orderArray)
console.timeEnd("start") //[ 0, 0,  0,  1, 1, 1, -1, -1]
// console.log(threeNumberSort([8, 8, 7, 7, 9, 9, 9, 9, 9, 9, 9, 9], [8, 7, 9])) //[8, 8, 7, 7, 9, 9, 9, 9, 9, 9, 9, 9]
// console.log(threeNumberSort([], [0, 7, 3])) // []
// console.log(threeNumberSort([6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6], [4, 5, 6]))




