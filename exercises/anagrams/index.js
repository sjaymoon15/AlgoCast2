// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  // put them in obj key: num value
  // way to only store character ?
  // const letters = 'abced...A..'?
  const letterReg = /[a-zA-Z]/;
  let trackObj = {};

  for (let str of stringA.toLowerCase()) {
    if (letterReg.test(str)) {
      if (trackObj[str]) {
        trackObj[str]++;
      } else {
        trackObj[str] = 1;
      }
    }
  }

  for (let str of stringB.toLowerCase()) {
    if (letterReg.test(str)) {
      if (trackObj[str]) {
        trackObj[str]--;
      } else {
        return false;
      }
    }
  }

  for (let key in trackObj) {
    if (trackObj[key] !== 0) {
      return false;
    }
  }

  return true;
}

module.exports = anagrams;
