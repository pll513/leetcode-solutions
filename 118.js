var generate = function(numRows) {
    var i, j;
    var a = [1];
    var b = [];
    var p = [];
    if (numRows <= 0) return p;
    p.push(a);
    for (i=0; i<numRows-1; ++i) {
      b.push(1);
      for (j=1; j<i+1; ++j) {
        b.push(a[j-1] + a[j])
      }
      b.push(1);
      a = b;
      b = [];
      p.push(a);
    }
    return p;
};

console.log(generate(5));
