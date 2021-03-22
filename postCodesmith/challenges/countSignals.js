// function countSignals(frequencies, filterRanges) {
//     //use filter 
//     return frequencies.filter((el) => {
//         for(let i=0; i<filterRanges.length; i++) {
//             if (el >= filterRanges[i][0] && el <= filterRanges[i][1]) {
//                 continue
//             }
//             else return false 
//         }
//         return true
//     }).length
// }

// function countSignals(frequencies, filterRanges) {
//     //use filter
//     let range = [0,0]
//     for(let i = 0; i<filterRanges.length; i++){
//       if(filterRanges[i][0] > range[0]){
//         range[0] = filterRanges[i][0]
//       }
//       if(filterRanges[i][1] > range[1]){
//         range[1] = filterRanges[i][1]
//       }
//     }
//     return frequencies.filter((el) => (el >= range[0] && el <= range[1])).length
// }



// ([5,20,5,6,7,12,3,2], [[10, 20], [5, 15], [5,30])

// const reverse = (str) => {
//     let newStr = ""
//     for (let i = str.length-1; i>=0; i--) {
//         newStr += str[i]
//     }
//     return newStr
// }

// console.log(reverse('hello'))   
function repeatedString(s, n) {
    let as = s.split("").filter((el) => el === "a").length
    let lol = Math.floor(n/s.length)
    let rem = n % s.length
    for (let i=0; i<rem; i++) {
        if (s[i] === "a") count++
    }
    return count
}

console.log(repeatedString("gfcaaaecbg", 547602))
// console.log(repeatedString("aab", 882787))
