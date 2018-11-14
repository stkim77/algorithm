/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxprofit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1])
            maxprofit += prices[i] - prices[i - 1];
    }
    return maxprofit;
};

/*
var maxProfit = function(prices) {
    let i = 0;
    let valley = prices[0];
    let peak = prices[0];
    let maxprofit = 0;
    let maxLength = prices.length - 1;
    while (i < maxLength) {
        while (i < maxLength && prices[i] >= prices[i + 1])
            i++;
        valley = prices[i];
        while (i < maxLength && prices[i] <= prices[i + 1])
            i++;
        peak = prices[i];
        maxprofit += peak - valley;
    }
    return maxprofit;
};
 */

let prices = [7,1,5,3,6,4];
// let prices = [1,2,3,4,5];
// let prices = [7,6,4,3,1];
// let prices = [6,1,3,2,4,7];
// let prices = [];
console.log(maxProfit(prices));