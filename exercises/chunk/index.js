// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  if (size === 0 || size >= array.length) {
    return array;
  }
  let chunked = [];
  let smallChunk = [];
  for (let i of array) {
    if (smallChunk.length < size) {
      smallChunk.push(i);
    } else if (smallChunk.length === size) {
      chunked.push(smallChunk);
      smallChunk = [];
    }
  }

  if (smallChunk.length > 0) {
    chunked.push(smallChunk);
  }
  return chunked;
}

module.exports = chunk;
