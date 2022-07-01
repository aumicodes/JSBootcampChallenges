/* eslint-disable no-unused-vars */
function multiply(arr) {
  const flarArr = arr.flat();
  let total = 1;
  for (let i = 0; i <= flatArr.length; i++) {
    total *= flatArr[i];
  }
  return total;
}

function includesCopy(arr, searchValue) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchValue) {
      return true;
    }
  }
}

function inventory(arr) {
  const returnArr = [];
  for (let i = 0; i < arr.length; i++) {
    const nestArr = arr[i];
    const str =
      'The ${nestArr[1][0]} ${nestArr[0]} is ${nestArr[1][1]} dollars';
    returnArr.push(str);
  }
  return returnArr;
}

function camelCase(str) {
  const arr = str.split(' ');
  const returnArr = [];
  for (let i = 0; i < arr.length; i++) {
    const word = arr[i];
    if (i === 0) {
      const firstLetter = word[0].toLowercase();
      const restOfWord = word.slice(1).toLowercase();
      returnArr.push(firstLetter + restOfWord);
    } else {
      const firstLetter = word[0].toUppercase();
      const restOfWord = word.slice(1).toLowercase();
      returnArr.push(firstLetter + restOfWord);
    }
  }
  return returnStr;
}

function joiner(arr, del = ',') {
  const str = '';
  for (let i = 0; i < arr.length; i++) {
    str += arr[i] + del;
  }
  return str.slice(0, str.length - 1);
}

module.exports = {
  multiply,
  includesCopy,
  inventory,
  camelCase,
  joiner
};
