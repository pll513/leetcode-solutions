var reverseString = function(s){
  var len = s.length;
  var i;
  var result = "";
  for (i=len-1; i>=0; --i) {
    result += s.charAt(i);
  }
  return result;
}

var s = 'hello';
var result = reverseString(s);
console.log(result);
