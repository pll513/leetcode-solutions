var myAtoi = function(str) {
  // 先去空格
  while(str.charAt(0) === ' ') str = str.slice(1);
  // var isNumber = function(s){
  //   if (s === "+" || s === "-") return false;
  //   var collectionOne = ['0','1','2','3','4','5','6','7','8','9'];
  //   var collectionTwo = ['-','+','0','1','2','3','4','5','6','7','8','9'];
  //   if (collectionTwo.indexOf(s.charAt(0)) === -1) return false;
  //   for (var i=1; i<s.length; ++i) {
  //     if (collectionOne.indexOf(s[i]) === -1) return false;
  //   }
  //   return true;
  // };
  var str2 = "";
  var collectionOne = ['0','1','2','3','4','5','6','7','8','9'];
  var collectionTwo = ['-','+','0','1','2','3','4','5','6','7','8','9'];
  if (collectionTwo.indexOf(str.charAt(0)) !== -1) {
    str2 += str.charAt(0);
    for (var l=1; l<str.length; ++l) {
      if (collectionOne.indexOf(str.charAt(l)) !== -1) {
        str2 += str.charAt(l);
      } else {
        break;
      }
    }
  }

  var i;
  var j;
  var k = 1;
  var result = 0;
  var len = str2.length;
  if (str2.charAt(0) === '-') {
    str2 = str2.slice(1);
    len -= 1;
    k = -1;
  } else if (str2.charAt(0) === '+') {
    str2 = str2.slice(1);
    len -= 1;
  }
  for (i=0; i<len; ++i) {
    result += str2[len-i-1] * Math.pow(10,i);
  }
  return result * k;
};

console.log(myAtoi('-2147483648'));
