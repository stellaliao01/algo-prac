function removeIslands(grid) {
    let islandCount = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                islandCount++
                recursiveCheck(i, j, grid)
            } else {
                continue
            }
        }
    }
    return islandCount
}

function recursiveCheck(i, j, grid) {

    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) {
        return
    }
    else {
        if (grid[i][j] === 1) {
            grid[i][j] === 0
            //check up
            recursiveCheck(i - 1, j, grid)
            //check down
            recursiveCheck(i + 1, j, grid)
            //right
            recursiveCheck(i, j + 1, grid)
            //left
            recursiveCheck(i, j - 1, grid)
        }
    }
}

console.log(removeIslands([
    [1, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1],
    [0, 0, 1, 0, 1, 0],
    [1, 1, 0, 0, 1, 0],
    [1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 1]
]))