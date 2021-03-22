var removeDuplicates = function (nums) {
    nums = nums.sort((a, b) => a - b)
    let right = 0
    for (let i = 1; i < nums.length; i++) {
        if (nums[right] !== nums[i]) {
            right++
            nums[right] = nums[i]
        }
    }
    return right + 1
};
