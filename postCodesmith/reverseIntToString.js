
//convert an int to a string without native methods
//after, convert int to string thats not negative
function i2a (num) {
    // if (num === 0) return "0"
    let lookup = new Map()
    lookup.set(0, '0')
    lookup.set(1, '1')
    lookup.set(2, '2')
    lookup.set(3, '3')
    lookup.set(4, '4')
    lookup.set(5, '5')
    lookup.set(6, '6')
    lookup.set(7, '7')
    lookup.set(8, '8')
    lookup.set(9, '9')

    //handle negative cases
    let flag = true
    if (num < 0) {
        flag = false
        num *= -1
    }

    let reverseStr = ""
    while (num > 0) {
        let remainder = num % 10
        reverseStr += lookup.get(remainder)
        num = Math.floor(num/10)
    }

    let resultStr = ""
    for (let i=reverseStr.length-1; i>= 0; i--) {
        resultStr += reverseStr[i]
    }

    return flag ? resultStr : `-${resultStr}`

}



console.log(i2a(12345))
console.log(i2a(0))
console.log(i2a(-12345))


