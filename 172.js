var trailingZeroes = function(n) {
  var result = 0;
  var tmp = 1;
  while (tmp<=n) {
    tmp *= 5;
    result += (n - n % tmp) / tmp;
  }
  return result;
};
console.log(trailingZeroes(100));
