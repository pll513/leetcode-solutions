var plusOne = function(digits) {
    var len = digits.length;
    var i;
    var one = 1;
    for (i=len-1; i>=0; --i) {
      digits[i] += one;
      if (digits[i]<10) {
        one = 0;
        break;
      } else {
        digits[i] %= 10;
        one = 1;
      }
    }
    if (one === 1) {
      digits.unshift(1);
    }
    return digits;
};

console.log(plusOne([9,9,9,9,9]));
