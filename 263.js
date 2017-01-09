var isUgly = function(num) {
  if (num == 0) return false;
  while (num % 2 == 0 || num % 3 == 0 || num % 5 == 0) {
    if (num % 2 == 0) {
      num /= 2;
    } else if (num % 3 == 0) {
      num /= 3;
    } else {
      num /= 5;
    }
  }
  if (num == 1) {
    return true;
  } else {
    return false;
  }
};

console.log(isUgly(1));
console.log(isUgly(4));
console.log(isUgly(6));
console.log(isUgly(8));
console.log(isUgly(7));
console.log(isUgly(14));
