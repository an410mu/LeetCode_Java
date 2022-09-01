/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    //calculate the max diff between two stocks, must buy before sell
    //iterate the array, and compare the stoack price after selected day 
    //define an maxProfit, if the new diff is greater, then replace 
    
    let maxProfit = 0;
    let minPrice = prices[0] || 0;
    for (let i = 1; i < prices.length; i++) {
       if (prices[i] < minPrice) {
           minPrice = prices[i]
       } else if (prices[i] - minPrice > maxProfit){
           maxProfit = prices[i] - minPrice
       }
    }
    return maxProfit; 
};