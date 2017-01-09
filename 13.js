var romanToInt = function(s) {
  var val = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  var pos = {
    'I': 0,
    'V': 1,
    'X': 2,
    'L': 3,
    'C': 4,
    'D': 5,
    'M': 6
  }
  var len = s.length;
  var i;
  var a,b;
  var result = 0;
  for (i=0; i<len; ++i) {
    a = s[i];
    b = s[i+1];
    if ( (pos[a] === 0|| pos[a] === 2 || pos[a] === 4)
    && (pos[b]-pos[a] === 1 || pos[b]-pos[a] === 2) ) {
      result += val[b];
      result -= val[a];
      i += 1;
    }
    else {
      result += val[a];
    }
  }
  return result;
};

console.log(romanToInt('XL'));
