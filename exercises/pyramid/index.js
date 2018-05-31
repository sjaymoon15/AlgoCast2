// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//        1
//       '#'1
//   pyramid(2)
//        123
//       ' # '1
//       '###'2
//   pyramid(3)
//        12345
//       '  #  '1
//       ' ### '2
//       '#####'3
//   pyramid(4)
//       1234567
//      '   #   '1
//      '  ###  '2
//      ' ##### '3
//      '#######'4

function pyramid(n) {
  // 1, 3, 5, 7
  // 2n - 1
  // for n row there will be 2n - 1 columns

  const columnWidth = 2 * n - 1;

  for(let row = 1; row <= n; row++) {
    let newRow = '';
    for(let column = 1; column <= columnWidth; column++) {
      if (column >= n - (row - 1) && column <= n + (row - 1)) {
        newRow += '#';
      } else {
        newRow += ' ';
      }
    }
    console.log(newRow);
  }
}

module.exports = pyramid;
