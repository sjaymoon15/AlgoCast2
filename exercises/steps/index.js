// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//         123
//    1   '#  '
//    2   '## '
//    3   '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  // nested for loop. outer for looping through row
  // inner loop for each row. colums

  // keep track of indexes columnIndex and rowIndex
  // inner loop should make a string and console log at the end

  for(let row = 1; row <= n; row++) {
    let step = '';
    for(let column = 1; column <= n; column++) {
      if (column <= row) {
        step += '#';
      } else {
        step += ' ';
      }
    }
    console.log(step);
  }
}

module.exports = steps;
