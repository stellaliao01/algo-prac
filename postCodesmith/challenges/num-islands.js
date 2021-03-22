/*

Given a 2d grid map of 1s (land) and 0s (water), count the number of islands.
An island is surrounded by water and is formed by connecting adjacent lands
horizontally or vertically. You may assume all four edges of the grid are all
surrounded by water.

EXAMPLE 1:

Input:
[
  [0, 1, 1, 1, 0],
  [1, 1, 0, 1, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0]
]
Output: 1

Input:
[
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1]
]
Output: 3

Assume that the grid will be an array of arrays of numbers either 0 or 1, and
that the grid will have at least one element.

*/

const numIslands = grid => {

};

module.exports = { numIslands };

const numIslands = grid => {
  const m = grid.length, n = grid[0].length;
  let total = 0;

  const processIsland = (i, j) => {
    grid[i][j] = 0;
    // Look up
    if (i > 0 && grid[i - 1][j]) {
      processIsland(i - 1, j);
    }
    // Look down
    if (i < m - 1 && grid[i + 1][j]) {
      processIsland(i + 1, j);
    }
    // Look left
    if (j > 0 && grid[i][j - 1]) {
      processIsland(i, j - 1);
    }
    // Look right 
    if (j < n - 1 && grid[i][j + 1]) {
      processIsland(i, j + 1);
    }
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j]) {
        total++;
        processIsland(i, j);
        console.log(grid);
      }
    }
  }

  return total;
}

module.exports = { numIslands };