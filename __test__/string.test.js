const { stringLength } = require('../src/string');

//1. Arrange
const message = {
  success: 'The string length is 8',
  error: 'The string length must be greater than 0 and less than 11',
};

//2. Act
const stringLengthGreaterThan_0_AndLessThan_11 = stringLength('shahadat');
const stringLengthIsNotGreaterThan_0_AndLessThan_11 = () => stringLength('');

//3. Assert
test(message.success, () => {
  expect(stringLengthGreaterThan_0_AndLessThan_11).toBe(8);
});

test(message.error, () => {
  expect(stringLengthIsNotGreaterThan_0_AndLessThan_11).toThrow('Error');
});
