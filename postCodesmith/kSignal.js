/*

You are given an array representing the positions of cell towers along a 2 dimensional line. You are given a second array representing positions of customers across the same 2 dimensional line. Given these two inputs, you must determine a signal strength k such that every customer is covered by at least one cell tower. All cell towers must have the exact same signal strength and covers customers to its left and right equally.

Examples

cell towers are at: [0, 2, 6, 10]
customers are at: [0, 5, 11]

expected output: k = 1

guaranteed at least one cell tower and one customer
looking for minimum cell strength
same location means signal strength of 0
we can assume sorted order

walk through each customer
  then walk through each cell tower
    if current tower's diff is bigger then continue to next tower
     keep track of min difference
     
return maximum of min

customer 0

         [0], 2, 6, 10
         
customer 5
         
         5, 3, [1], 5
         
customer 11
         
         11, 9, 5, [1]
*/

// cell towers are at: [0, 2, 6, 10]
// customers are at: [0, 5, 11]
function ksignal(towers, customers){
  
    let j = 0;
    let minDifference = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < customers.length; i++) {
      let currentDifference = Math.abs(customers[i] - towers[j]);
      /*
          i = 1
          j = 2
          customer[1] = 5
          towers[2] = 6
          currentDifference = 1
      */
      // in while loop abs(5 - 10) = 5 < 1
      while (j < towers.length && Math.abs(customers[i] - towers[j + 1]) < currentDifference) {
        currentDifference = Math.abs(customers[i] - towers[j + 1]);
        j++;
      }
      // j = 0
      // minDifference = 1
      minDifference = Math.max(minDifference, currentDifference);
    }
    return minDifference;
  }
    
  console.log(ksignal([0, 2, 6, 10], [0, 5, 11])) // 1
  console.log(ksignal([0], [0])) // 0