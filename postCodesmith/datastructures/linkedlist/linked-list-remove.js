/*
Write a function to delete the first instance of a node in a singly linked list.

Example: 
Given a linked list:
 
('a' -> 'b' -> 'c' -> 'b' -> 'd')
 
 And given a value, 'b', the evaluated result of calling your function should be:

 ('a' -> 'c' -> 'b' -> 'd')

How might you remove a linked list value without adding extra properties to the constructor functions?

*/

// NOTE: needs to be es5 function definition
function LinkedList() {
  this.head = null;
}

// NOTE: needs to be es5 function definition
function Node(val) {
  this.val = val;
  this.next = null;
}

const linkedListRemove = (ll, val) => {

};


/*
Extension: 
* Write a function to delete the first instance of a node in a singly linked list with a space complexity of O(1). 
* Write a function to delete the all instances of a node in a singly linked list.

Example: 
Given a linked list:
 
('a' -> 'b' -> 'd' -> 'c' -> 'd')
 
 And given a value, 'd', the evaluated result of calling your function should be:

 ('a' -> 'b' -> 'c')

*/

const linkedListRemoveMultiple = (ll, val) => {

}

module.exports = { LinkedList, Node, linkedListRemove, linkedListRemoveMultiple };


* /

// define a LinkedList with a pending head
function LinkedList() {
  this.head = null;
}
// definee a Node that takes in a value with a pending next
function Node(val) {
  this.val = val;
  this.next = null;
}

const linkedListRemove = (ll, val) => {
  // Determine whether ll's first node value matches the input value
  if (ll.head.val === val) return ll.head.next;
  // Set pointer references to the current and next nodes
  let currNode = ll.head;
  let nextNode = currNode.next;
  while (nextNode) {
    // Is the next node value === input value?
    if (nextNode.val === val) {
      // If so, skip nextNode
      currNode.next = nextNode.next;
      currNode = currNode.next;
      // Return the updated linkedList
      return ll;
    }
    // If not, keep moving down the linked list
    currNode = nextNode;
    nextNode = nextNode.next;
  }
  return ll;
};

/*
Extension:
Write a function to delete the first instance of a node in a singly linked list with a space complexity of O(1).
Write a function to delete the all instances of a node in a singly linked list.
​
Example:
Given a linked list:
​
('a' -> 'b' -> 'd' -> 'c' -> 'd')
​
 And given a value, 'd', the evaluated result of calling your function should be:
​
 ('a' -> 'b' -> 'c')
​
*/

const linkedListRemoveMultiple = (ll, val) => { };
module.exports = {
  LinkedList,
  Node,
  linkedListRemove,
  linkedListRemoveMultiple,
}