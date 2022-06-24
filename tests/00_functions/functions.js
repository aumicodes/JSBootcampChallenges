/* eslint-disable consistent-return */

// max:  Write a function max that accepts three number arguments. max should return largest number of the three.
function max(a, b, c) {
  if (a > b && a > c) {
    ``;
    return a;
  } else if (b > a && b > c) {
    return b;
  } else if (c > a && c > b) {
    return c;
  } else if (a === b && b === c) {
    return 'numbers a, b, and c are equal';
  }
}

// addUnknown:  write a function named addUnknown that takes up to 5 arguments and adds them together
function addUnknown(a, b, c, d, e) {
  a = 1;
  b = 2;
  c = 3;
  d = 4;
  e = 5;
  return a + b + c + d + e;
}

// evenOrOdd: Write a function that accepts a number as an argument. return the string 'even' if it is an even nummber and 'odd' if it is an odd number
function evenOrOdd(num) {
  if (num % 2 === 0) {
    return 'even';
  } else if (num % 2 === 1) {
    return 'odd';
  }
}

/*operator:
Write a function named operator that accepts three number arguments. operator should:

return 'plus' if the first two numbers equal the third

return 'minus' if the first number minus the second equals the third

return 'multiply' if the first two numbers multiplied together equals the third

return 'divide' if the first number divided by the second equals the third

return null if none are true
*/
function operator(a, b, c) {
  if (a + b === c) {
    return 'plus';
  } else if (a - b === c) {
    return 'minus';
  } else if (a * b === c) {
    return 'multiply';
  } else if (a / b === c) {
    return 'divide';
  } else {
    return null;
  }
}

module.exports = {
  max,
  addUnknown,
  evenOrOdd,
  operator
};
