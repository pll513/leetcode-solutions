var isHappy = function(n) {
    var result = [];
    var sum;
    var i;
    result.push(n);
    while (true) {
      sum = 0;
      for (i=0; i<n.toString().length; ++i) {
        sum += Math.pow(Number.parseInt(n.toString().charAt(i)),2);
      }
      // console.log("sum: " + sum);
      if (sum === 1) {
        return true;
      } else if (result.indexOf(sum) !== -1) {
        return false;
      } else {
        result.push(sum);
        n = sum;
      }
    }
};

console.log(isHappy(1));
console.log(isHappy(2));
console.log(isHappy(82));
