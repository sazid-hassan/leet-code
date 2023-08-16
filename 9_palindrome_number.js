/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
  let myBool = true;

  if (x < 0) {
    myBool = false;
  } else {
    let y = x.toString();

    for (
      let i = 0, j = y.length - 1;
      i <= y.length / 2, j >= y.length / 2;
      i++, j--
    ) {
      if (y[i] != y[j]) {
        myBool = false;
      }
    }
  }

  return myBool;
};

console.log(isPalindrome(120621));
