var addDigits = function(num) {
    var sNum = num.toString();
    var sum;
    var i;
    while (sNum.length > 1) {
      sum = 0;
      for (i=0; i<sNum.length; ++i) {
        sum += Number.parseInt(sNum[i]);
      }
      sNum = sum.toString();
    }
    return Number.parseInt(sNum);
};

console.log(addDigits(38));
console.log(addDigits(359));
