function Node(value) {
  this.value = value;
  this.next = null;
}

/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 * If the input is null, your function should return null
 *
 * Example:
 * If the linked list is:
 *
 *      1 -> 2 -> 3 -> 4 -> 5
 *
 * The result should like like:
 *
 *      5 -> 4 -> 3 -> 2 -> 1
 *
 * Extension:
 * Do it in place
 *
 */

const reverseLinkedList = head => {

};

module.exports = { Node, reverseLinkedList }
  / not in place solution, O(n) time, O(n) space
const reverseLinkedList = head => {
  // create a stack with all the values in the linked list
  const stack = [];
  // traverse linked list and push values into stack
  while (head) {
    stack.push(head.value);
    head = head.next;
  }
  // create a new head with the last element as the value
  const newHead = new Node(stack.pop());
  let current = newHead;
  // once the length is 0, condition will elavaluate to false which will break out of the loop
  while (stack.length) {
    current.next = new Node(stack.pop());
    current = current.next;
  }
  return newHead;
};

// recursive solution, O(n) time, O(n) space (new stack frame added for each recursive call)
const reverseLinkedList = head => {
  // base case: return head if is head is null or head.next is null
  if (!head || !head.next) return head;

  // assign pointer variables
  let current = head;
  let next = current.next
  // use recursion with the next node to traverse to the end of the linked list
  let end = reverseLinkedList(next);

  // rearrange pointers, reversing the order of the nodes
  current.next.next = current;
  current.next = null;

  // return end which is the new head
  return end;
};

// iterative, in place solution, O(n) time, O(1) space
const reverseLinkedList = head => {
  // check if head is null, or if linked list only has a head
  if (!head || !head.next) return head;

  // set pointer variables
  let previous = null;
  let current = head;
  let next;

  // rearrange pointers while traversing linked list until end is reached
  while (current) {
    // assign next to the next node in the list
    next = current.next;
    // move current.next to point to the previous node
    current.next = previous;
    // reassign previous to be equaled to the current node for the next loop
    previous = current;
    // traverse to the next node in the linked list;
    current = next;

  }
  // set head to be the last node visited
  head = previous;
  // return new head
  return head;
};

