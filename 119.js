var getRow = function(rowIndex) {
  var a = [1];
  var b = [];
  var i = 0;
  var j;
  var len;
  while (i < rowIndex) {
    b.push(1);
    len = a.length;
    for (j=0; j<len-1; ++j) {
      b.push(a[j]+a[j+1])
    }
    b.push(1);
    a = b;
    b = [];
    i += 1;
  }
  return a;
};

console.log(getRow(0));
console.log(getRow(1));
console.log(getRow(2));
console.log(getRow(3));
console.log(getRow(4));
console.log(getRow(5));
