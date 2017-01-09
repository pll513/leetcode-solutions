var reverse = function(x) {
    var countNumLen = function(n){
      n = n > 0 ? n : -n;
      var i, cnt;
      for (i=10, cnt=1; n/i>=1; i*=10, cnt+=1){
          ;
      }
      return cnt;
    };
    var j;
    var result = 0;
    var len = countNumLen(x);
    for (j=0; j<len; ++j) {
      result += x % 10 * Math.pow(10,len-j-1);
      x = (x - x % 10) / 10;
    }
    if (result > 2147483647) {
      result = 2147483647;
    } else if (result < -2147483648) {
      result = -2147483648;
    }

    return result;
};
console.log(reverse(1563847412));
