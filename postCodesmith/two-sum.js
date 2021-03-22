// // // /*
// // //   Given an array of numbers and a target number,
// // //   return true if two of the numbers in the array add up to the target.
// // //   Otherwise, return false.

// // //   You may assume that each input would have exactly one solution, and you may not use the same element twice.
// // //   The straightforward way to solve this problem would take O(n²)time. Is it possible to do this in O(n) time? 

// // //   Example:

// // //   const nums = [2, 5, 11, 15]
// // //   twoSum(num, 7) -> true
// // //   Rational:  nums[0] + nums[1] = 2 + 5 = 7,

// // //   twoSum(nums, 9) -> false
// // //   Rational: No elements inside the array sum up to the target number
// // // */


// // // const twoSum = (arr, target) => {
// // //   let obj = {};
// // //   for (let i = 0; i < arr.length; i++) {
// // //     let thisNum = arr[i];
// // //     obj[thisNum] = i;
// // //   }
// // //   // console.log(obj)
// // //   for (let i = 0; i < arr.length; i++) {
// // //     let diff = target - arr[i];
// // //     if (obj.hasOwnProperty(diff) && obj[diff] !== i) {
// // //       return true
// // //       //[i, obj[diff]];
// // //     }
// // //     return false
// // //   }


// // // }
// // // //brute force way - O(N^2) | O(1) space
// // // function twoNumberSum(array, targetSum) {
// // //   // Write your code here.
// // //   //if array is empty return []
// // //   //if it does not succeed in finding two numbers, return []

// // //   //iterate over the array and check if the first element + the second element = the target num
// // //   //if it doesnt, then check the first element and the 3rd element, first and 4th element etc. 
// // //   //if it does add to the target num, we want the current index, and the compliment index 

// // //   // let length = array.length
// // //   // console.log(array)
// // //   for (let i = 0; i < array.length; i++) {
// // //     for (let j = i + 1; j < array.length; j++) {
// // //       // console.log(array[i],array[j])
// // //       if ((array[i] + array[j]) === targetSum) {
// // //         // console.log(i,j)
// // //         return [array[j], array[i]]
// // //       }
// // //     }
// // //   }
// // //   return []


// // // }

// // // //for faster time complexity O(n)
// // // //use a cache or object to store the complement and the index
// // // //iterate over the input array and check if 

// // // //[1,2,3,4,5] || 7
// // // function twoNumberSum(array, targetSum) {
// // //   let cache = {}
// // //   for (const el of array) {
// // //     const complement = targetSum - el
// // //     if (complement in cache) {
// // //       return [complement, el]
// // //     } else {
// // //       cache[el] = true
// // //     }
// // //   }
// // //   return []
// // //   /*
// // //   Extension:
// // //   Given an array of numbers and a target number, 
// // //   return true if three of the numbers in the array add up to the target. 
// // //   Otherwise, return false.

// // //   The straightforward way to solve this problem would take O(n³) time. Is it possible to do this in O(n²) time?

// // //   */

// // //   const threeSum = (arr, target) => {

// // //   }





// // //   module.exports = { twoSum, threeSum };

// // const balancedStrAll = (str) => {
// //   const cache = {}

// //   for (let i = 0; i < str.length; i++) {
// //     if (cache[str[i]]) {
// //       cache[str[i]] += 1
// //     }
// //     else {
// //       cache[str[i]] = 1
// //     }
// //   }
// //   let values = Object.values(cache)
// //   for (let el of values) {
// //     if (values[el] !== values[el + 1]) {
// //       return false
// //     }
// //   }
// //   return true
// // }

// // console.log(balancedStrAll('aaabbb')) // true
// // console.log(balancedStrAll('abcdefghi')) //true
// // console.log(balancedStrAll('aabc')) // false

// /**
//   Takes a Date instance and returns a Date which is the first day
//   of that month. For example:
//   firstDayOfMonth(new Date(2019, 2, 7)) // => new Date(2019, 2, 1)
//   Input type: Date
//   Output type: Date
// **/
// function firstDayOfMonth(date) {
//   return new Date(date.getFullYear(), date.getMonth(), 1)
// }
// console.log(firstDayOfMonth(new Date(2019, 2, 7)))

// /**
//   Takes a Date object and returns a Date which is the last day
//   of that month. For example:
//   lastDayOfMonth(new Date(2019, 2, 7)) // => new Date(2019, 2, 28)
//   Input type: Date
//   Output type: Date
// **/
// function lastDayOfMonth(date) {
//   return new Date(date.getFullYear(), date.getMonth() + 1, 0)
// }
// /**
//   Takes a Date object and returns a Date which is the next day.
//   For example:
//   nextDay(new Date(2019, 2, 7))  // => new Date(2019, 2, 8)
//   nextDay(new Date(2019, 2, 28)) // => new Date(2019, 3, 1)
//   Input type: Date
//   Output type: Date
// **/
// function nextDay(date) {
//   return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1)
// }


// var twoSum = function (nums, target) {
//   //brute force
//   // for (let i=0; i<nums.length; i++) {
//   //     for (let j=i+1; j <nums.length; j++) {
//   //         if (nums[i] + nums[j] === target) {
//   //             return [i,j]
//   //         }
//   //     }
//   // }
//   //cache / complement method
//   const cache = {}

//   for (let i = 0; i < nums.length; i++) {
//     let complement = target - nums[i]
//     if (complement in cache) {
//       return [cache[complement], i]
//     }
//     else {
//       cache[nums[i]] = i
//     }
//   }
//   return []
// };










function twoSumlol (array, target) {
  // //brute force
  // for(let i=0; i<array.length; i++) {
  //   for(let j=i+1; j <array.length; j++) {
  //     if ((array[i] + array[j]) === target) {
  //       return [i, j]
  //     }
  //   }
  // }
  // return false

  const obj = {}
  //store complement in obj if there is one
  for (let i=0; i<array.length; i++) {
    let complement = target - array[i] 
    if (complement in obj) {
      return [obj[complement], i]
    } else {
      obj[array[i]] = i
    }
  }
 return false
}

unction staircase(n) {
  for (let i = 0; i <= n; i++) {
      console.log(' '.repeat(n - i) + '#'.repeat(i))
  }
}



console.log(twoSumlol([1,2,3,4,5,6], 9)) // 3, 4

