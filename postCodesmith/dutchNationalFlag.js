
// • Sort the array as just a normal unsorted array.
// • Two passes. First pass: count the number of 0s, 1s and 2s. Second pass: overwrite the original array with the correct number of 0s, then 1s, then 2s.
// • One pass (read about this on Leetcode)

var sortColors = function(nums) {
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
    let low = 0
    let high = nums.length-1
    
      for (let i = 0; i <= high;i++) {
        if (nums[i] === 0) {
            // [nums[i], nums[low]] = [nums[low], nums[i]]
            swap(i, low, nums)
            low++;
        } else if (nums[i] == 2) {
            // [nums[i], nums[high]] = [nums[high], nums[i]]
            swap(i, high, nums)
            high--;i--
        } 
    }
    
};

function swap (i, j, array) {
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
}

console.log(sortColors([2,0,2,1,1,0]))