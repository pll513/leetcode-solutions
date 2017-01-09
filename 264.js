var nthUglyNumber = function(n) {
  var l1 = [1];
  var l2 = [1];
  var l3 = [1];
  var a, b, c;
  var uglyArray = [1];
  var len = 1;
  while (len < n) {
    a = l1[0] * 2;
    b = l2[0] * 3;
    c = l3[0] * 5;
    if (a<b && a<c) {
      l1.push(a);
      l2.push(a);
      l3.push(a);
      l1.shift(0);
      uglyArray.push(a);
    } else if (b<a && b<c) {
      l1.push(b);
      l2.push(b);
      l3.push(b);
      l2.shift(0);
      uglyArray.push(b);
    } else if (c<a && c<b){
      l1.push(c);
      l2.push(c);
      l3.push(c);
      l3.shift(0);
      uglyArray.push(c);
    } else if (a===b && b<c) {
      l1.push(a);
      l2.push(a);
      l3.push(a);
      l1.shift(0);
      l2.shift(0);
      uglyArray.push(a);
    } else if (a===c && c<b) {
      l1.push(a);
      l2.push(a);
      l3.push(a);
      l1.shift(0);
      l3.shift(0);
      uglyArray.push(a);
    } else if (b===c && c<a) {
      l1.push(b);
      l2.push(b);
      l3.push(b);
      l2.shift(0);
      l3.shift(0);
      uglyArray.push(b);
    } else {
      l1.push(b);
      l2.push(b);
      l3.push(b);
      l1.shift(0);
      l2.shift(0);
      l3.shift(0);
      uglyArray.push(a);
    }
    len += 1;
  }
  return uglyArray[n-1];
};

console.log(nthUglyNumber(400));
