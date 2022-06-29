/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
function factorial(num) {
let factorial = 1;
for(let i = 1; i <= num; i++)
factorial = factorial*i;
return factorial;
}

function stringReverse(str) {
let stringRev = ''.toLowerCase();
let rev = ''.toLowerCase();
for (let i = stringRev.length - 1; i >= 0; i--){
  rev += stringRev[i];
  return rev;
}

}

// do not use built in slice method.
function slicer(originalString, startIdx, endIdx) {
if (startIdx === )
}

function addTheEvens(num) {
let sumOfEven = 0;
for (let i = 1; 1 <= num; i++){
  if (i % 2 === 0){
    sumOfEven += i;
  }
}
return sumOfEven;
}

module.exports = {
  factorial, stringReverse, slicer, addTheEvens,
};
