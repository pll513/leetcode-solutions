var reverseVowels = function(s) {
    var isVowel = function(l){
      return collection.indexOf(l) !== -1;
    }
    var collection = ['a','e','i','o','u','A','E','I','O','U'];
    var i = 0;
    var j = s.length - 1;
    var sArray = Array.prototype.slice.call(s);
    var tmp = '';
    while (i<j) {
      if (!isVowel(sArray[i])) {
        ++i
      } else if (!isVowel(sArray[j])) {
        --j
      } else {
        tmp = sArray[i]; sArray[i] = sArray[j]; sArray[j] = tmp;
        ++i; --j;
      }
    }
    return sArray.join("");
};
var s = 'leetcode';
var result = reverseVowels(s);

console.log(result);
