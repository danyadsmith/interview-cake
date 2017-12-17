function getMaxProfit (stockPrices) {
  if (Array.isArray(stockPrices)) {
    if (stockPrices.length > 2) {
      var minPrice = stockPrices[0];
      var maxProfit = stockPrices[1] - stockPrices[0];
      for (let i = 1; i < stockPrices.length; i = i + 1) {
        var currentPrice = stockPrices[i];
        var potentialProfit = currentPrice - minPrice;
        maxProfit = Math.max(maxProfit, potentialProfit);
        minPrice = Math.min(minPrice, currentPrice);
      }
      return maxProfit;
    } else {
      throw new Error('A profit cannot be calculated with less than two stock prices.');
    }
  } else {
    throw new TypeError('The parameter stockPrices must be an array.');
  }
}

module.exports = getMaxProfit;