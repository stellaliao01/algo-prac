var intersect = function (nums1, nums2) {

    let resultArr = []
    const obj = {}

    for (let i = 0; i < nums1.length; i++) {
        if (nums1[i] in obj) {
            obj[nums1[i]] += 1
        } else {
            obj[nums1[i]] = 1
        }
    }
    for (let el of nums2) {
        if (el in obj && obj[el] > 0) {
            resultArr.push(el)
            obj[el] -= 1
        }

    }
    return resultArr
};