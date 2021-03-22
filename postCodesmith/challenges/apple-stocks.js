/*

Consider an array called apple-stock as an argument. This array 
represents the variation of an Apple stock during a single day. 
The values in the array are in chronological order.

ex: [1000, 500, 1500, 2000, 0] --> The stock began at 1000 and closed at 0;

Write a function called highestProfit that calculates the highest profit 
you can make in a day by buying and selling a single Apple stock. Keep your
worst case time complexity in O(n^2).

Return 0 if no profit is possible OR if input is invalid.

** Extension **
Refactor your function to improve your time complexity to O(n).
Hint: Use pointers to keep track of the indices of max, min to 
calculate profit along the array.

*/

const highestProfit = apple_stock => {
    const highestProfit = (apple_stock) => {
        // initialize profit to 0
        let profit = 0;
        // verify that input is array
        if (!Array.isArray(apple_stock)) return profit;
        // iterate through apple_stock array
        for (let i = 0; i < apple_stock.length; i++) {
            // save value of bought stock (buy first then sell)
            const buyPrice = apple_stock[i];
            // check if element is valid
            if (typeof buyPrice !== 'number') return 0;
            // for each element iterate through rest of the array
            for (let j = i + 1; j < apple_stock.length; j++) {
                // save value of sellPrice
                const sellPrice = apple_stock[j];
                // update profit value with max diff in that loop btwn current profit value & profit btwn buy & sell
                profit = Math.max(profit, sellPrice - buyPrice);
            }
        }
        // if profit is positive, return it, else 0
        return profit > 0 ? profit : 0;
    };

    // Time complexity: O(n)
    // Space complexity O(1);
    // Iterative: One single loop (using reduce)


    //stphanies solution
    function highestProfit2(apple_stock) {
        // initialize the position on the lowest value to buy stock
        let minIndex = 0;
        // check if input is an array
        if (!Array.isArray(apple_stock)) return 0;
        // accumulate the highest profit by iterating through the array
        // and saving the index of the lowest value
        return apple_stock.reduce((acc, curr, index) => {
            // if the current stock is smaller than the smallest saved,
            // update the index position of the lowest value
            if (curr < apple_stock[minIndex]) minIndex = index;
            // save the value of selling the stock at this index
            const sellPrice = curr;
            // save the value of buying the stock at the minIndex saved
            const buyPrice = apple_stock[minIndex];
            // calculate the current profit for the minimum value saved
            const profit = sellPrice - buyPrice;
            // if the current profit is greater than the profit saved, update accumulator
            if (profit > acc) acc = profit;
            // return the accumulated value
            return acc;
        }, 0);

    }

    module.exports = { highestProfit }