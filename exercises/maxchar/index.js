// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let count = {};
  for (let elem of str) {
    if (count[elem]) {
      count[elem]++;
    } else {
      count[elem] = 1;
    }
  }

  let currentMax = 0;
  let maxKey = '';
  for (let key in count) {
      if (currentMax < count[key]) {
        currentMax = count[key];
        maxKey = key;
      }
  }

  return maxKey;
}

module.exports = maxChar;
