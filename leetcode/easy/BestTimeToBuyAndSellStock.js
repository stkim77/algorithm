/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buyPrice=prices[0], sellPrice=prices[0], profit=0;
    console.log(`buyPrice=${buyPrice}, sellPrice=${sellPrice}`);

    for (let i=1 ; i<prices.length ; i++) {
        let price = prices[i];
        if (buyPrice > price) {
            buyPrice = price;
        }
        else {
            let tmpProfit = price-buyPrice;
            if (profit < tmpProfit) {
                sellPrice = price;
                profit = tmpProfit;
            }
        }
        console.log(`buyPrice=${buyPrice}, sellPrice=${sellPrice}`);
    }

    return profit;
};


// let prices = [7,1,5,3,6,4];
// let prices = [7,6,4,3,1];
let prices = [1, 2];
console.log(maxProfit(prices));