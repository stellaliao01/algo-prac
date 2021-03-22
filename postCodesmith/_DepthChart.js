


// const player1 = {
//     playerID: 1,
//     name: "bob",
//     position: "QB"
// }

// const player2 = {
//     playerID: 2,
//     name: "bob",
//     position: "QB"
// }

// const player3 = {
//     playerID: 3,
//     name: "bob",
//     position: "QR"
// }

// const player4 = {
//     playerID: 4,
//     name: "bob",
//     position: "QB"
// }

// const player5 = {
//     playerID: 5,
//     name: "bob",
//     position: "QR"
// }

// const player6 = {
//     playerID: 6,
//     name: "bob",
//     position: "QB"
// }

// const player7 = {
//     playerID: 7,
//     name: "bob",
//     position: "QR"
// }
// const chart = {
//     "QB": []
// }

// function addPlayerToChart(player, position, position_depth) {
//     //position depth is where the player should be inserted into the array which is chart[position]
//     if (position in chart) {
//         if (!position_depth) {
//             chart[position].push(player)
//         }
//         if (position_depth > chart[position].length) {
//             chart[position].push(player)
//         }
//         else if (position_depth) {
//             // insert the player object at the index +1 in the array 
//             // so if position is 1, it we would unshift the array and add the player obj to the begining
//             chart[position].splice(position_depth - 1, 0, player)
//         }
//         // chart[position].push(player)
//     } else {
//         chart[position] = [player]
//     }

// }

// addPlayerToChart(player1, "AA")
// addPlayerToChart(player2, "QB")
// addPlayerToChart(player3, "QB")
// addPlayerToChart(player4, "QB", 2)
// addPlayerToChart(player5, "QB", 1)
// addPlayerToChart(player6, "QB", 1)
// addPlayerToChart(player7, "QB", 2)

// console.log(chart)

// // function removeEven(arr) {
// //     return arr.filter((v => (v % 2) != 0))
// // }
// // console.log(removeEven([3, 2, 41, 3, 34]))

function lev(str1, str2) {
    const grid = []
  
    for (let i=0; i<str1.length+1; i++) {
      const row = []
      for (let j=0; j<str2.length+1; j++) {
        row.push(j)
      }
      row[0] = i
      grid.push(row)
    }
    console.log(grid)
  
    for (let i=1; i<str1.length +1; i++) {
      for(let j=1; j<str2.length +1; j++) {
        if(str1[i-1] === str2[j-1]) {
          grid[i][j] = grid[i-1][j-1]
        } else {
          grid[i][j] = (1 + Math.min(grid[i-1][j-1], grid[i-1][j], grid[i][j-1]))
        }
      }
    }
    console.log(grid)
    return grid[str1.length][str2.length]
  }
  
  console.log(lev('toikr', "trek"))