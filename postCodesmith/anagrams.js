// function isAnagram(str1, str2) {

//     if (str1.length !== str2.length) {
//         return false;
//     }

//     var sortStr1 = str1.split('').sort().join('');
//     var sortStr2 = str2.split('').sort().join('');

//     return (sortStr1 === sortStr2);
// }

// console.log(isAnagram('dog', 'god')); // true
// console.log(isAnagram('foo', 'bar')); // false
// console.log(isAnagram('foo', 'fooo')); // false


function isAnagram(str1, str2) {

    if (str1.length !== str2.length) {
        return false;
    }

    // create a character count for the string
    var str1Count = {};

    Array.prototype.forEach.call(str1, function (ch) {
        str1Count[ch] = str1Count[ch] ? 1 + str1Count[ch] : 1;
    })

    // compare the character count with the second string
    var str2len = str2.length;
    for (var i = 0; i < str2len; i++) {
        if (!str1Count[str2[i]]) {
            return false;
        } else {
            str1Count[str2[i]] -= 1;
        }
    }
    return true;
}

console.log(isAnagram('dog', 'god')); // true
console.log(isAnagram('foo', 'bar')); // false
console.log(isAnagram('foo', 'fooo')); // false


function findAnagrams(array, target) {
    if (!array) return null
    let resultArr = []
    for (let i=0; i<array.length; i++) {
        if (isAnagram(array[i], target)) {
            resultArr.push(array[i])
        }
    }
    return resultArr
}

function isAnagram(str, target) {
    if (str.length !== target.length) {
        return false;
    }

    let sortStr = str.split('').sort().join('');
    let sortTarget = target.split('').sort().join('');

    return (sortStr === sortTarget);
}