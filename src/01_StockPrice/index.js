function getMaxProfit (stockPrices) {
  if (Array.isArray(stockPrices)) {
    var maxProfit = 0;
    const maxPrice = Math.max(...stockPrices);
    if (stockPrices.indexOf(maxPrice) > 0) {
      var possibleBuys = stockPrices.slice(0, stockPrices.indexOf(maxPrice));
      var buyAt = Math.min(...possibleBuys);
      maxProfit = maxPrice - buyAt;
    } else {
      var possibleSells = stockPrices.slice(1, stockPrices.length);
      var sellAt = Math.max(...possibleSells);
      maxProfit = sellAt - maxPrice;
    }
    return maxProfit;
  } else {
    throw new TypeError('The parameter stockPrices must be an array.');
  }
}

module.exports = getMaxProfit;