/**
 * Write a function that takes two parameters (an integer, and the head of a
 * singly linked list) and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 * 
 * Additional Information:
 *  - invalid inputs should return undefined
 *  - should find the last node by passing in 1
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {

}

//Do not delete! 
module.exports = { Node, kthToLastNode };

function Node(val) {
  this.value = val;
  this.next = null;
}

// Strategy 1: Finding the length.
// Find the length of the linked list, then traverse the linked list up to (length - k) and return the value.
function kthToLastNode(k, head) {
  let length = 0;
  // start current at the head
  let current = head;
  // 1st pass: traverse the ll to find the length
  while (current) {
    current = current.next;
    length += 1
  };

  // determine position of desired node
  let targetPosition = length - k;

  // edge case: invalid k input
  if (targetPosition < 0) return undefined;

  // reset current to start at head again
  current = head
  // 2nd pass: traverse the ll, stop at target position
  while (targetPosition > 0) {
    current = current.next;
    targetPosition -= 1;
  };

  // return value at current pointer
  return current ? current.value : undefined;
};

// Strategy 2: Two Counters.
function kthToLastNode(k, head) {
  // Create a LEAD and a FOLLOW counter. 
  let lead = head;
  let follow = head;
  let count = 0;
  // The first loop sets the value of LEAD K nodes ahead of FOLLOW. 
  while (count < k && lead) {
    lead = lead.next;
    count += 1;
  };

  // Then, if we don't have enough values to be k nodes ahead, return undefined.
  if (count !== k) return undefined;

  // Otherwise, The while loop traverses the linked list with the two counters.
  while (lead && follow) {
    lead = lead.next;
    follow = follow.next;
  };
  // Once the LEAD reaches the end, since FOLLOW is K nodes behind it, we return FOLLOW.VALUE
  return follow ? follow.value : undefined;
};


const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(kthToLastNode(2, a)); // -> returns 'D'(the value on the second to last node)

//Do not delete! 
module.exports = { Node, kthToLastNode };
Collapse



New

Serena Kuo  12: 55 PM
Thank you for your excellent questions! And shoutout to Elise for going over her approach for the extension.
  linked - list - remove.js
/*
Write a function to delete the first instance of a node in a singly linked list.
​
Example:
Given a linked list:
​
('a' -> 'b' -> 'c' -> 'b' -> 'd')
​
 And given a value, 'b', the evaluated result of calling your function should be:
​
 ('a' -> 'c' -> 'b' -> 'd')
​
Without adding extra properties to the constructor functions?
​
*/

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
};