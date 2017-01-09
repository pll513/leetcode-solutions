var isPowerOfThree = function(n) {
    if (n<=0) return false;
    var a = Math.log(n)/Math.log(3);
    var b = Math.round(a);
    console.log(a);
    console.log(b);
    return Math.abs(a-b)<=0.00000001;
};

console.log(isPowerOfThree(9536));
