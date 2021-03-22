// Although hash tables provide fast insertion, deletion, and retrieval, they perform poorly for operations that involve searching, such as finding the minimum and maximum values in a data set. For these operations, other data structures such as the binary search tree are more appropriate.


// - Implement an algorithm to determine if a string has all unique characters.

//iterate over the string 
//store each character in an object if the char does not exist in the obj
//else return false 

// function unique(str) {
//     const obj = {}
//     for (let i = 0; i < str.length; i++) {
//         if (!obj[str[i]]) {
//             obj[str[i]] = 1
//         }
//         else if (obj[str[i]]) {
//             return false
//         }
//     }
//     return true
// }

function unique(str) {
    const map = new Map()
    for (let i = 0; i < str.length; i++) {
        if (!map[str[i]]) {
            map[str[i]] = 1
        }
        else if (map[str[i]]) {
            return false
        }
    }
    return true

}
// console.log(unique('true'))
// console.log(unique('falsee'))
// console.log(unique('lolololololol'))
// console.log(unique('abcdefghijklmnop'))

// - Given two strings, write a method to decide if one is a permutation of the other.
// add all characters into an array and check if it's included in the other array? 

// const permutation = (str1, str2) => {



// }

// permutation('hell', 'hello')
// permutation('hello', 'nope')




// - Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.





// - Write code to remove duplicates from an unsorted linked list.








// - Given a binary tree, design an algorithm which creates a linked list of all the nodes at each depth (e.g., if you have a tree with depth D, you'll have D linked lists).
// - You are given a binary tree in which each node contains an integer value (which might be positive or negative). Design an algorithm to count the number of paths that sum to a given value. The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).
// - Design and implement a hash table which uses chaining (linked lists) to handle collisions
// - Write a method to compute all permutations of a string whose characters are not necessarily unique. The list of permutations should not have duplicates.
// - Implement an algorithm to print all valid (e.g., properly opened and closed) combinations of n pairs of parentheses.
// - Imagine a web server for a simplified search engine. This system has 100 machines to respond to search queries, which may then call out using processSearch ( string query) to another cluster of machines to actually get the result. The machine which responds to a given query is chosen at random, so you cannot guarantee that the same machine will always respond to the same request. The method processSearch is very expensive. Design a caching mechanism for the most recent queries. Be sure to explain how you would update the cache when data changes.
// - Design a method to find the frequency of occurrences of any given word in a book. What if we were running this algorithm multiple times?
// - Given a list of people with their birth and death years, implement a method to compute the year with the most number of people alive. You may assume that all people were born between 1900 and 2000 (inclusive). If a person was alive during any portion of that year, they should be included in that year's count. For example, Person (birth= 1908, death= 1909) is included in the counts for both 1908 and 1909.
// - Given a two-dimensional graph with points on it, find a line which passes the most number of points
// - Given two arrays of integers, find a pair of values (one value from each array) that you can swap to give the two arrays the same sum.
//   EXAMPLE
//   Input: {4, 1, 2, 1, 1, 2} and {3, 6, 3, 3}
//   Output: {1, 3}
// - Design an algorithm to find all pairs of integers within an array which sum to a specified value.
// - Design and build a "least recently used" cache, which evicts the least recently used item. The cache should map from keys to values (allowing you to insert and retrieve a value associated with a particular key) and be initialized with a max size. When it is full, it should evict the least recently used item.
// - Each year, the government releases a list of the 10000 most common baby names and their frequencies (the number of babies with that name). The only problem with this is that some names have multiple spellings. For example, "John" and ''.Jon" are essentially the same name but would be listed separately in the list. Given two lists, one of names/frequencies and the other of pairs of equivalent names, write an algorithm to print a new list of the true frequency of each name. Note that if John and Jon are synonyms, and Jon and Johnny are synonyms, then John and Johnny are synonyms. (It is both transitive and symmetric.) In the final list, any name can be used as the "real" name.
//   EXAMPLE
//   Input:
//   Names: John (15), Jon (12), Chris (13), Kris (4), Christopher (19)
//   Synonyms: (Jon, John), (John, Johnny), (Chris, Kris), (Chris, Christopher)
//   Output: John (27), Kris (36)
// - Oh, no! You have accidentally removed all spaces, punctuation, and capitalization in a lengthy document. A sentence like "I reset the computer. It still didn't boot!" became "iresetthecomputeri tstilldidntboot''. You'll deal with the punctuation and capitalization later; right now you need to re-insert the spaces. Most of the words are in a dictionary but a few are not. Given a dictionary (a list of strings) and the document (a string), design an algorithm to unconcatenate the document in a way that minimizes the number of unrecognized characters.
//   EXAMPLE:
//   Input:
//   jesslookedjustliketimherbrother
//   Output: jess looked just like tim her brother (7 unrecognized characters)
// - The similarity of two documents (each with distinct words) is defined to be the
// size of the intersection divided by the size of the union. For example, if the documents consist of
// integers, the similarity of { 1, 5, 3} and { 1, 7, 2, 3} is 0. 4, because the intersection has size
// 2 and the union has size 5.
// We have a long list of documents (with distinct values and each with an associated ID) where the
// similarity is believed to be "sparse:'That is, any two arbitrarily selected documents are very likely to
// have similarity 0. Design an algorithm that returns a list of pairs of document IDs and the associated
// similarity.
// Print only the pairs with similarity greater than 0. Empty documents should not be printed at all. For
// simplicity, you may assume each document is represented as an array of distinct integers.
// EXAMPLE
// Input:
// 13: {14, 15, 100, 9, 3}
// 16: {32, 1, 9, 3, 5}
// 19: {15, 29, 2, 6, 8, 7}
// 24: {7, 10}
// Output:
// ID1, ID2 : SIMILARITY
// 13, 19 : 0.1
// 13, 16 : 0.25
// 19, 24 : 0.14285714285714285