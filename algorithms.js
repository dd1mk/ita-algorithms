const getDigits = (number) => {
  let numberToSplit = number;
  let digits = [];
  while (numberToSplit >= 1) {
    digits = [numberToSplit % 10, ...digits];
    numberToSplit = Math.floor(numberToSplit / 10);
  }
  return digits;
};

//  Does number (arg1) squared contain digit specified (arg2)
const task1 = (number, digitToFind = 3) => {
  const numberSq = number * number;
  const digits = getDigits(numberSq);
  return digits.includes(digitToFind);
};

const reverseNumber = (number) => {
  const digits = getDigits(number);
  let reversedNumber = 0;
  for (let i = digits.length - 1; i >= 0; i -= 1) {
    reversedNumber += digits[i] * (10 ** i);
  }
  return reversedNumber;
};


const getDividers = (number) => {
  if (number === 1) {
    return [1];
  }

  let dividers = [1, number];
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      dividers = [...dividers, i];
    }
  }
  return dividers;
};

const task3 = (start, end) => {
  if (start > end) {
    throw Error('End of range must be greater than the star');
  }
  let maxNum = 1;
  let maxSum = 1;
  for (let i = parseInt(start, 10); i < parseInt(end, 10); i += 1) {
    const dividers = getDividers(i);
    const dividersSum = dividers.reduce((accumulator, currentValue) => accumulator + currentValue);
    if (dividersSum > maxSum) {
      maxSum = dividersSum;
      maxNum = i;
    }
  }
  return maxNum;
};

module.exports = { task1, reverseNumber, task3 };
