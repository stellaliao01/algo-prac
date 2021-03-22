// One Away: There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.

// Example
// pale, ple --> true
// pales, pale --> true
// pale, bale --> true
// pale, bake --> false

//brute force method 

//Time complexity O(n) Space Complexity O(n)
const strings = (str1, str2) => {
    //find the difference between the string lengths
    const stringsDiff = Math.abs(str1.length - str2.length);
    //if strings are the same length
    if (stringsDiff === 0) {
        //if the strings are the same, return true
        if (str1 === str2) return true
        //otherwise, check if there's only one difference
        else {
            //initialize a variable that keeps track of differences between the two strings
            let diffs = 0;
            //iterate through the strings, comparing characters at each index
            for (let i = 0; i < str1.length; i++) {
                //if there is a difference at an index, increment diffs
                if (str1[i] !== str2[i]) diffs++;
            }
            //there's more than one diff, return false
            if (diffs > 1) return false
            //otherwise, return true
            else return true;
        }
    }
    //if strings are one character length away
    if (stringsDiff === 1) {
        let longest = str1;
        let shortest = str2;
        //if str2 is longer, reassign
        if (str2.length > str1.length) {
            longest = str2;
            shortest = str1;
        }
        //iterate through the strings to find point of difference (i.e. the deleted char)
        for (let i = 0; i < longest.length; i++) {
            //when the point of difference is found
            if (longest[i] !== shortest[i]) {
                //split longest into two substrings (minus deleted char)
                const longest1 = longest.substr(0, i - 1);
                const longest2 = longest.substr(i + 1);
                //split shortest into two substrings (automatically excluding deleted char)
                const shortest1 = shortest.substr(0, i - 1);
                const shortest2 = shortest.substr(i);
                //if both halves around the deleted char are the same, return true
                if (longest1 === shortest1 && longest2 === shortest2) return true
                //otherwise return false
                else return false;
            }
        }
    }
    //if strings are more than one character length away, return false
    if (stringsDiff > 1) return false;
}



console.log(strings("pale", "ple")) // --> true
console.log(strings("pales", "pale")) // true
console.log(strings("pale", "bale")) // true
console.log(strings("pale", "bake")) // false
