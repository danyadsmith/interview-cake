function productOfOtherNumbers (arr) {
  if (Array.isArray(arr)) {
    if (arr.filter(val => typeof val !== 'number').length === 0) {
      var productArray = [];
      var currentIndex = -1;
      for (let i = 0; i < arr.length; i = i + 1) {
        currentIndex = i;
        for (let j = 0; j < arr.length; j = j + 1) {
          if (j !== currentIndex) {
            productArray[i] = (productArray[i] === undefined) ? arr[j] : productArray[i] *= arr[j];
          }
        }
      }
      return productArray;
    } else {
      throw new TypeError('Invalid input. The parameter arr contains a value that is not a number.');
    }
  } else {
    throw new TypeError('The parameter arr must be an Array.');
  }
}

module.exports = productOfOtherNumbers;