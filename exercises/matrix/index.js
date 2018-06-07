// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// [ [ null, null, null, null ],
//   [ null, null, null, null ],
//   [ null, null, null, null ],
//   [ null, null, null, null ] ]

function matrix(n) {
  // make a proper structure with null in it for n
  let matrix = makeStructure(n);

  // fill in numbers
  // keep track of 
}

function makeStructure(n) {
  let outerArr = [];
  for (let i = 0; i < n; i++) {
    let innerArr = [];
    for (let j = 0; j < n; j++) {
      innerArr.push(null);
    }
    outerArr.push(innerArr);
  }
}

module.exports = matrix;
