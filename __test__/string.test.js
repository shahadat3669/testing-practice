const { stringLength, reverseString } = require('../src/string');

// checking string length function
//1. Arrange
const stringLengthMessage = {
  success: 'The string length is 8',
  error: 'The string length must be greater than 0 and less than 11',
};

//2. Act
const stringLengthGreaterThan_0_AndLessThan_11 = stringLength('shahadat');
const stringLengthIsNotGreaterThan_0_AndLessThan_11 = () => stringLength('');

//3. Assert
test(stringLengthMessage.success, () => {
  expect(stringLengthGreaterThan_0_AndLessThan_11).toBe(8);
});

test(stringLengthMessage.error, () => {
  expect(stringLengthIsNotGreaterThan_0_AndLessThan_11).toThrow('Error');
});
