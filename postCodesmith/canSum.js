
//time complexity O(n^2)?
function canSum(targetSum, nums) {
    //iterate over nums array
    //have a pointer to the current index + 1
    //check if the current index and next index sum to the targetSum
    //return true if it satisfies condition 
    //else return false

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if ((nums[i] + nums[j]) === targetSum) {
                return true
            }
        }
    }
    return false
}

// o(n^m) time  
function canSumRecurse(target, arr) {
    if (target === 0) return true
    if (target < 0) return false

    for (let num of arr) {
        const remainder = target - num
        if (canSumRecurse(remainder, arr) === true) {
            return true
        }
    }
    return false
}

console.log(canSumRecurse(10, [1, 2, 3, 4, 5, 6, 8])) // true
console.log(canSumRecurse(300, [1, 3, 5, 6, 7])) // false