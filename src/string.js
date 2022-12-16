const stringLength = (string) => {
  if (string.length >= 1 && string.length <= 10) return string.length;
  throw new Error('Error');
};

const reverseString = (string) => {
  return string.split('').reverse().join('');
};

const capitalize = (string) => {
  return string
    .slice(0, 1)
    .toUpperCase()
    .concat(string.slice(1, string.length));
};

module.exports = {
  stringLength,
  reverseString,
  capitalize,
};
