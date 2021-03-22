function threeNumberSum(array, targetSum) {
    // Write your code here.
    array.sort((a, b) => a - b)
    const resultArr = []

    //
    for (let i = 0; i < array.length - 2; i++) {
        let front = i + 1
        let end = array.length - 1
        while (front < end) {
            // console.log("i:", i, 'front:', front, "end:", end, "array:", array)
            let currentSum = array[i] + array[front] + array[end]
            if (currentSum === targetSum) {
                resultArr.push([array[i], array[front], array[end]])
                // console.log('resultArr', resultArr)
                front += 1
                end -= 1
            }
            else if (currentSum < targetSum) {
                front += 1
            }
            else if (currentSum > targetSum) {
                end -= 1
            }
        }
    }
    return resultArr

}

// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;

var threeSum = function (nums) {
    const resultArr = []
    let sortedNums = nums.sort((a, b) => a - b)

    for (let i = 0; i < sortedNums.length - 2; i++) {
        let frontPointer = i + 1
        let endPointer = sortedNums.length - 1

        /* -1 0 0 0 0 1 1 
           i 
                      f
                    e
         */
        while (frontPointer < endPointer) {
            let sum = sortedNums[i] + sortedNums[frontPointer] + sortedNums[endPointer]
            if (sum === 0) {
                resultArr.push([sortedNums[i], sortedNums[frontPointer], sortedNums[endPointer]])
                while((frontPointer <endPointer) && sortedNums[frontPointer] === sortedNums[frontPointer+1]) {
                    frontPointer +=1
                }

                while((frontPointer <endPointer) && (sortedNums[endPointer] === sortedNums[endPointer-1])) {
                    endPointer-=1
                }
                frontPointer += 1
                endPointer -= 1
            }
            else if (sum < 0) {
                frontPointer += 1
            }
            else if (sum > 0) {
                endPointer -= 1
            }
        }
    }

    return resultArr
};


// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var threeSum = function(nums) {
//     const resultArr = []
//     let sortedNums = nums.sort((a,b) => a-b)

//     for (let i=0; i<sortedNums.length-2; i++) {
//     let frontPointer = i+1
//     let endPointer = sortedNums.length-1 

//         while (frontPointer < endPointer) {
//          let sum = sortedNums[i] + sortedNums[frontPointer] + sortedNums[endPointer]
//              if (sum === 0) {
//                  console.log(frontPointer,i)
//                else {
//                    resultArr.push([sortedNums[i], sortedNums[frontPointer],         sortedNums[endPointer]])
//                  frontPointer +=1
//                  endPointer -=1
//                }
//              } 
//              else if (sum <= 1) {
// 				frontPointer += 1
// 			}
// 	        else if (sum >= 1) {
// 				endPointer -= 1
// 			}
//         }

//     }

//     return resultArr


// };


var threeSum = function (nums) {
    const resultArr = []
    let sortedNums = nums.sort((a, b) => a - b)
    for (let i = 0; i < sortedNums.length - 2; i++) {
        // ex [-2,-1,0,1,2,3] if sortedNum[i] = 0 [...,0,1,2,3] no combination of these numbers will equal to 0 so we just break
        if (sortedNums[i] > 0) break;
        //no need to worry about out of bounds cause we're looping over the length-2
        if (i > 0 && sortedNums[i] === sortedNums[i - 1]) {
            continue;
        }
        let frontPointer = i + 1
        let endPointer = sortedNums.length - 1
        while (frontPointer < endPointer) {
            let sum = sortedNums[i] + sortedNums[frontPointer] + sortedNums[endPointer]
            if (sum === 0) {
                resultArr.push([sortedNums[i], sortedNums[frontPointer], sortedNums[endPointer]])
                while (sortedNums[frontPointer] === sortedNums[frontPointer + 1]) { frontPointer += 1 }
                while (sortedNums[endPointer] === sortedNums[endPointer - 1]) { endPointer -= 1 }{
                    en
                }
                frontPointer += 1
                endPointer -= 1
            }
            else if (sum < 0) {
                frontPointer += 1
            }
            else if (sum > 0) {
                endPointer -= 1
            }
        }
    }
    return resultArr
};

