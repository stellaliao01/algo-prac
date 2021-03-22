const palindrome = (str) => {
    if (str.length === 0) return true

    if (str[0] === str[str.length - 1]) {
        return palindrome(str.slice(1, -1))
    }
    return false

}

console.log(palindrome('level')) // true
console.log(palindrome('false')) //false


//Validate Palindrome
var isPalindrome = function(str) {
    let filteredStr = ""
    for (let el of str) {
       let n = el.charCodeAt(0);
        if ((n >= 65 && n < 91) || (n >= 97 && n < 123) || (n>=47 && n <= 57)) {
            filteredStr += el.toLowerCase()
        }
    }
//     let isPalindrome
//     function recurse (string) {
//         console.log("in recurse", string)
//         if (string.length === 0) return isPalindrome = true
        
//         if (string[0] === string[string.length-1]) {
//             recurse(string.slice(1,-1))
//         } else isPalindrome = false
//     }
//     recurse(filteredStr)
//     return isPalindrome
    
     function check(str, start, end){
        if(start === end || start > end) return true
        if(str[start]!== str[end]) return false
        else{
            return check(str, start+1, end-1)
        }
    }
    return check(filteredStr, 0, filteredStr.length-1)
};