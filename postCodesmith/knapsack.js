
function knapsackProblem(items, capacity) {
    const knapsackValues = [];
    // create additional rows and fill them with zeros to create the correct grid
    for (let i = 0; i < items.length + 1; i++) {
        const row = new Array(capacity + 1).fill(0)
        console.log("row", row)
        knapsackValues.push(row);
        console.log(knapsackValues)
    }
    for (let i = 1; i < items.length + 1; i++) {
        // get the current weight and value for each item in the items array
        const currentWeight = items[i - 1][1];
        const currentValue = items[i - 1][0];
        for (let c = 0; c < capacity + 1; c++) {
            if (currentWeight > c) {
                // if the currentWeight is creater than capacity, copy the value above
                // please note the first array is filled with zeros
                knapsackValues[i][c] = knapsackValues[i -1][c]
            } else {
                knapsackValues[i][c] = Math.max(
                    knapsackValues[i - 1] [c],
                    knapsackValues[i - 1] [c - currentWeight] + currentValue,
                );
            }
        }
    }
    return knapsackValues[items.length][capacity]
}
items = [[1,2],[4,3],[5,6],[6,7]]
capacity = 10
console.log(knapsackProblem(items, capacity))