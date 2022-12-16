const { stringLength, reverseString, capitalize } = require('../src/string');

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

// checking string reverse function
//Arrange
const reverseStringMessage = 'The function return the string in reversed';

//Act
const reverseStringTest = reverseString('shahadat');

//Assert
test(reverseStringMessage, () => {
  expect(reverseStringTest).toBe('tadahahs');
});

// checking string capitalize function
//Arrange
const capitalizeStringMessage =
  'The function return the string with first character in capital';

//Act
const capitalizeStringTest = capitalize('shahadat');

//Assert
test(capitalizeStringMessage, () => {
  expect(capitalizeStringTest).toBe('Shahadat');
});
