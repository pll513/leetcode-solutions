var isPalindrome = function(x) {
    var i;
    var xCopy = x;
    var reverse = 0;
    for (i=1; x!==0; ++i) {
      reverse = reverse * 10 + x % 10;
      x = (x - x % 10) / 10;
      console.log(reverse);
      console.log(x);
    }
    if (reverse === xCopy) return true;
    return false;
};

console.log(isPalindrome(123454321));
