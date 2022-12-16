const Calculator = require('../src/Calculator');

//initial three calculator object as required in the task
const calculator_100_10 = new Calculator(100, 10);
const calculator_10_5 = new Calculator(10, 5);
const calculator_10_2 = new Calculator(10, 2);

//testing for Add function
//Arrange
const addMessage = {
  input_100_10: 'Return 110 when input are 100,10.',
  input_10_5: 'Return 15 when input are 10,5.',
  input_10_2: 'Return 12 when input are 10,2.',
};

//Act
const sumOf_100_10 = calculator_100_10.add();
const sumOf_10_5 = calculator_10_5.add();
const sumOf_10_2 = calculator_10_2.add();

//Assert
describe('Calculator.add method', () => {
  test(addMessage.input_100_10, () => {
    expect(sumOf_100_10).toBe(110);
  });

  test(addMessage.input_10_5, () => {
    expect(sumOf_10_5).toBe(15);
  });

  test(addMessage.input_10_2, () => {
    expect(sumOf_10_2).toBe(12);
  });
});

//testing for subtract function
//Arrange
const subtractMessage = {
  input_100_10: 'Return 110 when input are 100,10.',
  input_10_5: 'Return 15 when input are 10,5.',
  input_10_2: 'Return 12 when input are 10,2.',
};

//Act
const subtractOf_100_10 = calculator_100_10.subtract();
const subtractOf_10_5 = calculator_10_5.subtract();
const subtractOf_10_2 = calculator_10_2.subtract();

//Assert
describe('calculator.subtract method', () => {
  test(subtractMessage.input_100_10, () => {
    expect(subtractOf_100_10).toBe(90);
  });

  test(subtractMessage.input_10_5, () => {
    expect(subtractOf_10_5).toBe(5);
  });

  test(subtractMessage.input_10_2, () => {
    expect(subtractOf_10_2).toBe(8);
  });
});

//testing for multiply function
//Arrange
const multiplyMessage = {
  input_100_10: 'Return 110 when input are 100,10.',
  input_10_5: 'Return 15 when input are 10,5.',
  input_10_2: 'Return 12 when input are 10,2.',
};

//Act
const multiplyOf_100_10 = calculator_100_10.multiply();
const multiplyOf_10_5 = calculator_10_5.multiply();
const multiplyOf_10_2 = calculator_10_2.multiply();

//Assert
describe('calculator.multiply method', () => {
  test(multiplyMessage.input_100_10, () => {
    expect(multiplyOf_100_10).toBe(1000);
  });

  test(multiplyMessage.input_10_5, () => {
    expect(multiplyOf_10_5).toBe(50);
  });

  test(multiplyMessage.input_10_2, () => {
    expect(multiplyOf_10_2).toBe(20);
  });
});

//testing for divide function
//Arrange
const divideMessage = {
  input_100_10: 'Return 110 when input are 100,10.',
  input_10_5: 'Return 15 when input are 10,5.',
  input_10_2: 'Return 12 when input are 10,2.',
};

//Act
const divideOf_100_10 = calculator_100_10.divide();
const divideOf_10_5 = calculator_10_5.divide();
const divideOf_10_2 = calculator_10_2.divide();

//Assert
describe('calculator.divide method', () => {
  test(divideMessage.input_100_10, () => {
    expect(divideOf_100_10).toBe(10);
  });

  test(divideMessage.input_10_5, () => {
    expect(divideOf_10_5).toBe(2);
  });

  test(divideMessage.input_10_2, () => {
    expect(divideOf_10_2).toBe(5);
  });
});
