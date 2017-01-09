var countPrimes = function(n) {
  var isPrime = function(n) {
    var i;
    if (n === 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (i=3; i<=Math.sqrt(n); i+=2) {
      if (n % i === 0) return false;
    }
    return true;
  }
  var j;
  var cnt = 0;
  if (n >= 3) cnt += 1;
  for (j=3; j<n; j+=2) {
    cnt += isPrime(j) ? 1 : 0;
  }
  return cnt;
};
console.log(countPrimes(1));
console.log(countPrimes(2));
console.log(countPrimes(3));
console.log(countPrimes(5));
console.log(countPrimes(1500000));
