/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp = []
    const find = (coins, amount) => {
        let min = Infinity
        if (amount === 0 ) return 0
        if (amount < 0) return Infinity
        if (dp[amount] !== undefined) {
            return dp[amount]
        }
        
        for (let coin of coins) {
            min = Math.min(min, find(coins, amount - coin) + 1)
        }
        dp[amount] = min
        return dp[amount]
    }
    let res = find(coins, amount)
    return res === Infinity ? -1 : res
};