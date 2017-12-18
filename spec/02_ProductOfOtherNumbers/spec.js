/* globals describe it */

const expect = require('chai').expect;
const productOfOtherNumbers = require('../../src/02_ProductOfOtherNumbers/');

describe('02. Product of All Integers Except at Index', () => {
  describe('#productOfOtherNumbers(arr)', () => {
    it('should be a function', () => {
      expect(productOfOtherNumbers).to.be.a('function');
    });
    it('should return an array', () => {
      expect(productOfOtherNumbers([1, 2, 3, 4])).to.be.a('array');
    });
    it('should throw an error when the first parameter is not an Array', () => {
      expect(function () {
        productOfOtherNumbers(true);
      }).to.throw(TypeError, 'The parameter arr must be an Array.');
      expect(function () {
        productOfOtherNumbers(20);
      }).to.throw(TypeError, 'The parameter arr must be an Array.');
      expect(function () {
        productOfOtherNumbers({});
      }).to.throw(TypeError, 'The parameter arr must be an Array.');
      expect(function () {
        productOfOtherNumbers(null);
      }).to.throw(TypeError, 'The parameter arr must be an Array.');
      expect(function () {
        productOfOtherNumbers(undefined);
      }).to.throw(TypeError, 'The parameter arr must be an Array.');
    });
    it('should throw an error when the array contains values that are not numbers', () => {
      expect(function () {
        productOfOtherNumbers([1, 2, 'apple', 4]); 
      }).to.throw(TypeError, 'Invalid input. The parameter arr contains a value that is not a number.');
      expect(function () {
        productOfOtherNumbers([1, 2, true, 4]); 
      }).to.throw(TypeError, 'Invalid input. The parameter arr contains a value that is not a number.');
      expect(function () {
        productOfOtherNumbers([1, 2, {}, 4]); 
      }).to.throw(TypeError, 'Invalid input. The parameter arr contains a value that is not a number.');
      expect(function () {
        productOfOtherNumbers([1, 2, null, 4]); 
      }).to.throw(TypeError, 'Invalid input. The parameter arr contains a value that is not a number.');
      expect(function () {
        productOfOtherNumbers([1, 2, undefined, 4]); 
      }).to.throw(TypeError, 'Invalid input. The parameter arr contains a value that is not a number.');
    });
    it('should return an array that contains the product of all values in the array excluding the index', () => {
      expect(productOfOtherNumbers([1, 2, 3, 4])).to.eql([24, 12, 8, 6]);
      expect(productOfOtherNumbers([1, 7, 3, 4])).to.eql([84, 12, 28, 21]);
      expect(productOfOtherNumbers([10, 20, 30, 40])).to.eql([24000, 12000, 8000, 6000]);
    });
  });
});