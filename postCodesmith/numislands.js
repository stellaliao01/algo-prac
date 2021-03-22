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
    let islandCount = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                islandCount++
                recursiveIslandCheck(i, j, grid)
            } else {
                continue
            }
        }
    }
    return islandCount
};
function recursiveIslandCheck(i, j, grid) {
    // base case
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) {
        return
    }
    else {
        if (grid[i][j] === 1) {
            grid[i][j] = 0
            //down
            recursiveIslandCheck(i + 1, j, grid)
            //left
            recursiveIslandCheck(i, j - 1, grid)
            //right
            recursiveIslandCheck(i, j + 1, grid)
            //up
            recursiveIslandCheck(i - 1, j, grid)
        }
    }
}


// function numIslands(g) {

//     if (!g) return 0
//     let rows = g.length
//     let cols = g[0].length
//     let islandCount = 0
//     for (let i = 0; i < rows; i++) {
//         for (let j = 0; j < cols; j++) {
//             if (g[i][j] === 0) {
//                 continue
//             } else {
//                 islandCount++
//                 dfs(i, j)
//             }
//         }
//     }
//     function dfs(i, j) {
//         if (i < 0 || i >= rows || j < 0 || j >= cols) {
//             return
//         } else {
//             if (g[i][j] === 1) {
//                 g[i][j] = 0
//                 //up
//                 dfs(i - 1, j) // returns
//                 //down
//                 dfs(i + 1, j) // 0 
//                 //left
//                 dfs(i, j - 1) // returns
//                 //right 
//                 dfs(i, j + 1) // 0
//             }
//         }

//     }
//     return islandCount
// }




const newNumIslands = (array) => {
    //have a counter variable to keep track of islands
    let islandCount = 0

    //iterate over the array nested loop
        //check if it's a 1, if it is then incrememnt islandCount
            //call recursive helper func, passing in the indexs and array
        //else we continue to loop 
        for (let i=0; i< array.length; i++) {
            for (let j=0; j<array.length; j++) {
                if (array[i][j] === 1) {
                    islandCount++
                    recursiveHelp(i, j, array)
                }
                continue
            }
        }

    return islandCount

    //recursive helper function to traverse if it's an island
    //make sure its not on the edge 
    //then change all the islands to 0
    function recursiveHelp (i, j) {
        if (i<0 || j< 0|| i >= array.length || j >=array.length) {
            return
        }
        else if (array[i][j] === 1) {
            //check all possible directions and change it to a 0 if it is
            array[i][j] = 0
            //check right
                recursiveHelp(i, j+1)
            //check left
                recursiveHelp(i,j-1)
            //check up
                recursiveHelp(i-1,j)
        
             //check down
                recursiveHelp(i+1,j)
            }
           
        } 
    }



console.log(newNumIslands([
    [0, 1, 1, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0]
])) // 1

console.log(newNumIslands([
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1]
])) // 3