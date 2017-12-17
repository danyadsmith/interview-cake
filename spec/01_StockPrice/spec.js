/* globals describe it */

const expect = require('chai').expect;
const getMaxProfit = require('../../src/01_StockPrice/');

describe('Get Max Profit', () => {
  describe('#getMaxProfit(stockPrices)', () => {
    it('should be a function', () => {
      expect(getMaxProfit).to.be.a('function');
    });
    it('should return a number', () => {
      expect(getMaxProfit([10, 7, 5, 8, 11, 9])).to.be.a('number');
    });
    it('should throw an error when the first parameter is not an array', () => {
      expect(function () {
        getMaxProfit(true);
      }).to.throw(TypeError, 'The parameter stockPrices must be an array.');
      expect(function () {
        getMaxProfit(20);
      }).to.throw(TypeError, 'The parameter stockPrices must be an array.');
      expect(function () {
        getMaxProfit({});
      }).to.throw(TypeError, 'The parameter stockPrices must be an array.');
      expect(function () {
        getMaxProfit(null);
      }).to.throw(TypeError, 'The parameter stockPrices must be an array.');
      expect(function () {
        getMaxProfit(undefined);
      }).to.throw(TypeError, 'The parameter stockPrices must be an array.');
    });
    it('should throw an error when less than two prices are in the array', () => {
      expect(function () {
        getMaxProfit([0]);
      }).to.throw(Error, 'A profit cannot be calculated with less than two stock prices.');
    });
    it('should return the maximum profit when a profit can be made', () => {
      expect(getMaxProfit([10, 7, 5, 8, 11, 9])).to.eql(6);
      expect(getMaxProfit([10, 7, 5, 8, 11, 2, 9])).to.eql(7);
      expect(getMaxProfit([10, 11, 12, 13, 14, 15, 16, 17, 18])).to.eql(8);
    });
    it('should return the minimum loss when a profit cannot be made', () => {
      expect(getMaxProfit([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])).to.eql(-1);
    });
  });
});