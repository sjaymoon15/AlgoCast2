// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let nStr = n.toString();
  let posNeg = '';
  if (nStr[0] === '-') {
    posNeg = '-';
    nStr = nStr.slice(1);
  }
  const resultStr = posNeg + nStr.split('').reverse().join('');
  return +resultStr;
}

module.exports = reverseInt;
