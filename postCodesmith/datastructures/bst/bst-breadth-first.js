function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

/*

Given the root of a binary search tree and a callback function, apply the
callback to the values of the BST in breadth-first order.

Example:

If the tree is

     4
   /   \
  2     7
 / \     \
1   3     9
         /
        8

then apply the callback on the numbers in the order:
4, 2, 7, 1, 3, 9, 8.

Hint:

Maintain a queue (array) consisting of the nodes we need to operate on.
For each node in the queue, push the left and right children (if applicable) to
the end of the queue. Keep consuming the queue (using the shift method) until
there are no more nodes in the queue.

Utilizing recursion is not necessary, nor recommended.

*/

const bfs = (root, callback) => {
  const queue = []
  let resultArr = [[root.value]]
  queue.push(root)
  while (queue.length > 0) {
    let currNode = queue[0]
    if (currNode.left) {
      queue.push(currNode.left)
    }
    if (currNode.right) {
      queue.push(currNode.right)
    }
    if (currNode.left && currNode.right) {
      resultArr.push([currNode.left.value, currNode.right.value])
    } else if (currNode.left && !currNode.right) {
      resultArr.push([currNode.left.value])
    }else if (!currNode.left && currNode.right) {
      resultArr.push([currNode.right.value])
    }
    // callback(currtNode)
    queue.shift()
  }
  return resultArr
};

/*

Extension:

Given a 2D grid of 0s, 1s, and a single 2, with the start position the top-left
corner, determine the minimum distance need to travel to the 2.

0s represent traversable land.
1s represent "water" that we cannot traverse.
2 represents our final goal.

The top-left corner will always be a 0. We will try to reach the 2 by
traversing through land. We are only allowed to traverse up/left/down/right,
with no diagonal movement allowed. If the 2 cannot be reached, return -1.

Examples:

Input:
[
  [0, 0, 1, 1],
  [2, 0, 1, 0],
  [1, 0, 0, 0]
]
Output: 1 (starting at the top-left corner, move down)

Input:
[
  [0, 0, 1, 1],
  [0, 0, 1, 2],
  [1, 0, 0, 0]
]
Output: 6 (starting at the top-left corner, either move
down-right-down-right-right-up, or right-down-down-right-right-up)

Input:
[
  [0, 0, 0, 1, 1, 0, 2, 0]
]
Output: -1 (the 2 is not reachable by land)

Hint:

Apply the general principles of breadth-first search. Maintain a queue of
positions with their distances. When consuming each position, check to see which
neighbors are traversable and haven't already been visited.

*/

// const minimumDistance = grid => {

// };

// module.exports = { BinarySearchTree, bfs, minimumDistance };
// const bfs = (tree, cb) => {
//   const queue = [];

//   tree ? queue.push(tree) : null;

//   while (queue.length > 0) {
//     const firstInQueue = queue.shift();
//     cb(firstInQueue.value);

//     firstInQueue.left ? queue.push(firstInQueue.left) : null;
//     firstInQueue.right ? queue.push(firstInQueue.right) : null;
//   }
// }

///////// TESTS ///////////////
const cb = (value) => {
  return value * 2;
}

bst = new BinarySearchTree(6);
bst.left = new BinarySearchTree(3);
bst.right = new BinarySearchTree(10);
bst.left.left = new BinarySearchTree(2);
bst.right.left = new BinarySearchTree(9);

console.log(bfs(bst, cb), '<=== 12, 6, 20, 4, 18');
/////////////////////////////////

/*
​
Extension:
​
Given a 2D grid of 0s, 1s, and a single 2, with the start position the top-left
corner, determine the minimum distance need to travel to the 2.
​
0s represent traversable land.
1s represent "water" that we cannot traverse.
2 represents our final goal.
​
The top-left corner will always be a 0. We will try to reach the 2 by
traversing through land. We are only allowed to traverse up/left/down/right,
with no diagonal movement allowed. If the 2 cannot be reached, return -1.
​
Examples:
​
Input:
[
  [0, 0, 1, 1],
  [2, 0, 1, 0],
  [1, 0, 0, 0]
]
Output: 1 (starting at the top-left corner, move down)
​
Input:
[
  [0, 0, 1, 1],
  [0, 0, 1, 2],
  [1, 0, 0, 0]
]
Output: 6 (starting at the top-left corner, either move
down-right-down-right-right-up, or right-down-down-right-right-up)
​
Input:
[
  [0, 0, 0, 1, 1, 0, 2, 0]
]
Output: -1 (the 2 is not reachable by land)
​
Hint:
​
Apply the general principles of breadth-first search. Maintain a queue of
positions with their distances. When consuming each position, check to see which
neighbors are traversable and haven't already been visited.
​
*/

const minimumDistance = (grid) => {
  /*** The helper function that checks the neighboring elem. *****
   *** Takes in 3 integers: i, j, and steps; 
   *** adds the position to the Set (visitedPositions); 
   *** adds the position and updated steps to the queue if neighbor is valid;
   *** and returns an integer ("steps") if the goal is reached,
   *** or null otherwise.
   ***/
  const checkNeighbor = (i, j, steps) => {
    const neighbor = grid[i][j];

    // Is neighbor a 2? If yes, return a truthy value right away.
    if (neighbor === 2) {
      const finalNumOfSteps = steps + 1;
      return finalNumOfSteps;
    }

    // Add position to visitedPositions if it hasn't been visited
    // and it's not 1.
    if (!visitedPositions.has(`${i}${j}`) && neighbor !== 1) {
      visitedPositions.add(`${i}${j}`);
      queue.push([i, j, steps + 1]);
    }

    // Return falsy value by default, unless '2' has been found.
    return null;
  }
  /***************************************************************/

  // Use a set to keep track of the visited positions.
  // This way we don't have to mutate the elem/sub-elems in the grid.
  const visitedPositions = new Set();

  // "Seed" the queue and visitedPostions with the top-left elem's position and with 0 steps.
  const queue = [[0, 0, 0]];
  visitedPositions.add(`00`);

  // Traverse with a while loop until there's no more elems in queue.
  while (queue.length > 0) {
    // console.log('queue:', queue); // <-- visualize the steps

    // Remove the first elem in queue.
    // Destructure the positions and steps from the elem.
    const firstInQueue = queue.shift(); // an array --> [i, j, steps]
    const [i, j, steps] = firstInQueue;

    // Check bottom if a bottom row exists.
    if (i < grid.length - 1) {
      const outputOf_checkNeighbor = checkNeighbor(i + 1, j, steps);

      // If output of checkNeighbor is truthy, we've found the target.
      if (outputOf_checkNeighbor) return outputOf_checkNeighbor;
    }

    // Check right if a right column exists.
    if (j < grid[0].length - 1) {
      const outputOf_checkNeighbor = checkNeighbor(i, j + 1, steps);

      if (outputOf_checkNeighbor) return outputOf_checkNeighbor;
    }

    // Check top if a top row exists.
    if (i > 0) {
      const outputOf_checkNeighbor = checkNeighbor(i - 1, j, steps);

      if (outputOf_checkNeighbor) return outputOf_checkNeighbor;
    }

    // Check left if a left column exists.
    if (j > 0) {
      const outputOf_checkNeighbor = checkNeighbor(i, j - 1, steps);

      if (outputOf_checkNeighbor) return outputOf_checkNeighbor;
    }
  }

  // Return -1 (ie. false) if we cannot find/reach a 2.
  return - 1;
};


////// TESTS //////////////////
// console.log(minimumDistance([[0, 0, 0, 1, 1, 0, 2, 0]]), `==> -1`);
// console.log(minimumDistance([[0, 0, 1, 1], [2, 0, 1, 0], [1, 0, 0, 0]]), `==> +1`);
// console.log(minimumDistance([[0, 0, 1, 1], [0, 0, 1, 2], [1, 0, 0, 0]]), `==> +6`);
// console.log(minimumDistance([[0, 0, 1, 1], [0, 0, 1, 0], [1, 0, 0, 0]]), `==> -1 (no goals at all)`);
// console.log(minimumDistance([[0, 0, 2, 0], [0, 0, 1, 0], [0, 0, 0, 0]]), `==> 2`);
// console.log(minimumDistance([[0, 1, 2, 0], [0, 1, 1, 0], [0, 0, 0, 0]]), `==> 8`);
///////////////////////////////

module.exports = { BinarySearchTree, bfs, minimumDistance };