/**
 * 
 * First, create a Stack which contains the following methods:
 * - push: add value to top (end) of stack
 * - pop: remove value from top (end) of stack
 * 
 * Second, create a Queue which consists of two stacks: stack1 and stack2
 * and contains the following methods:
 * - enqueue: add value to queue
 * - dequeue: remove value from queue
 * Queue methods should follow First In, First Out rule.
 * 
 * DO NOT USE NATIVE JS METHODS
 * 
 */
//stepahnies method 
function Stack() {
  // create an empty array variable 
  // push method - iterate starting at the end 
  // pop method - iterate at the end and 
  //FIFO

  this.stack = {}
  this.length = 0

}
Stack.proptotype.push = function (value) {
  this.stack(this.length++) = value
  //vs this.stack[--this.length]
  return this.length
}

Stack.proptotype.pop = function () {
  if (!this.length) return
  const popped = this.stack(this.length - 1)
  delete this.stack[--this.length]
  return popped
}



//LIFO
function Queue() {
  this.inStack = new Stack()
  this.outStack = new Stack()
}

Queue.proptotype.enqueue = function (value) {
  // this.Queue(this.length++) = value
  // //vs this.stack[--this.length]
  // return this.length 
  this.inStack.push(value)
}

Queue.proptotype.dequeue = function (value) {
  if (!this.inStack.length && !this.outStack.length) return

  if (!this.inStack.length) {
    while) this.instack.length) {
      this.outStack.push(this.inStack.pop())

    }
    return this.outStack.pop()
  }




  module.exports = { Stack, Queue }


  /* eslint-disable no-plusplus */
  /**
   *
   * First, create a Stack which contains the following methods:
   * - push: add value to top (end) of stack
   * - pop: remove value from top (end) of stack
   *
   * Second, create a Queue which consists of two stacks: stack1 and stack2
   * and contains the following methods:
   * - enqueue: add value to queue
   * - dequeue: remove value from queue
   * Queue methods should follow First In, First Out rule.
   *
   * DO NOT USE NATIVE JS METHODS
   *
   */

  function Stack() {
    this.stack = {};
    this.length = 0;
  }

  Stack.prototype.push = function (value) {
    this.stack[this.length++] = value;
    // vs. this.stack[++this.length]
    return this.length;
  };

  Stack.prototype.pop = function () {
    if (!this.length) return;
    const popped = this.stack[this.length - 1];
    delete this.stack[--this.length];
    return popped;
  };

  function Queue() {
    this.inStack = new Stack();
    this.outStack = new Stack();
  }

  Queue.prototype.enqueue = function (value) {
    this.inStack.push(value);
  };

  //  *   1) If both stacks are empty then error.
  //  *   2) If stack2 is empty
  //  *        While stack1 is not empty, push everything from stack1 to stack2.
  //  *   3) Pop the element from stack2 and return it.
  //  * Here time complexity will be O(n)

  Queue.prototype.dequeue = function () {
    if (!this.inStack.length && !this.outStack.length) return;
    if (!this.outStack.length) {
      while (this.inStack.length) {
        this.outStack.push(this.inStack.pop());
      }
    }
    return this.outStack.pop();
  };

