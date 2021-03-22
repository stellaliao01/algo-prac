/*
Write a function mergeRanges that takes an array of meeting time ranges and
returns an array of condensed ranges, merging the overlapping intervals.

Example:

intervals = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
mergeRanges(intervals); -> [[0, 1], [3, 8], [9, 12]]

intervals = [[8, 10], [15, 18], [1, 3], [2, 6]]
mergeRanges(intervals); -> [[1, 6], [8, 10], [15, 18]]

Do not assume the ranges are in order. The intervals array will have at least
one range in it.

Hint:
Sort the intervals by their start value beforehand! This makes the problem
actually tractable. To do this, use a custom callback for the .sort() method,
described here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
(especially the part about compare numbers instead of strings)

After sorting, think about how to merge the intervals together.

*/

const mergeRanges = intervals => {
  // isolate the first & second elements of each inner array into difference arrays
  let firstEl = []
  let secondEl = []
  for (i = 0; i < intervals.length; i++) {
    let start
    let end
    for (j = 0; j < intervals.length; j++) {
      //   console.log(intervals[j][i])
      //   let start = intervals[i][i]
      //   let end = intervals[j]
      //   console.log(start, end)
      if (intervals[j][i] !== undefined) {  firstEl.push(intervals[j][i])}
    }
  }
  let check = intervals.length
  while(check > 0) {
    secondEl.push(firstEl.pop())
    check--
  }
  secondEL = secondEl.reverse()
  //   console.log(firstEl)
  //   console.log(secondEl)
  let result = []
  let min = -1
  let max = 0
  for (let i = 0;i < firstEl.length; i++) {
    let temp = []
    for (let j = 0; j < secondEl.length; j++) {
      while (firstEl[i] > min) {
        min = firstEl[i]
        temp.push(min)
      }
    }
    result.push(temp)
  }
  console.log(result)
}
// const sortedArr = intervals.sort((a, b) => a[0] - b[0])

// let merged = []
// intervals.sort((a,b)=>a[0]-b[0])
// for(let item of intervals){
//   if(!merged.length || merged[merged.length-1][1]<item[0]){
//       merged.push(item)
//   }else{
//       merged[merged.length-1][1] = Math.max(merged[merged.length-1][1],item[1])
//   }
// }
// return merged

intervals = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
mergeRanges(intervals); // -> [[0, 1], [3, 8], [9, 12]]

// intervals = [[8, 10], [15, 18], [1, 3], [2, 6]]
// mergeRanges(intervals); //-> [[1, 6], [8, 10], [15, 18]]
module.exports = {mergeRanges}

//ben's solution 
/*
Write a function mergeRanges that takes an array of meeting time ranges and
returns an array of condensed ranges, merging the overlapping intervals.
​
Example:
​
intervals = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
mergeRanges(intervals); -> [[0, 1], [3, 8], [9, 12]]
​
intervals = [[8, 10], [15, 18], [1, 3], [2, 6]]
mergeRanges(intervals); -> [[1, 6], [8, 10], [15, 18]]
​
Do not assume the ranges are in order. The intervals array will have at least
one range in it.
​
Hint:
Sort the intervals by their start value beforehand! This makes the problem
actually tractable. To do this, use a custom callback for the .sort() method,
described here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
(especially the part about compare numbers instead of strings)
​
After sorting, think about how to merge the intervals together.
​
*/
​
const mergeRanges = intervals => {
  intervals.sort((a, b) => a[0] - b[0]);
  const results = [intervals[0]];
  
  intervals.forEach(curr => {
    const recent = results[results.length - 1];
    
    if (curr[0] <= recent[1])
      recent[1] = Math.max(recent[1], curr[1]);
    else
      results.push(curr);
  });
  
  return results;
};
​
module.exports = {mergeRanges};
Collapse
