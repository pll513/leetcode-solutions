var lengthOfLastWord = function(s) {
  var len = s.length;
  var i;
  var cnt = 0;
  var doCnt = false;

  for (i=len-1; i>=0; --i) {
    if (s[i] === ' ' && !doCnt) continue;
    if (s[i] === ' ' && doCnt) break;
    if (s[i] !== ' ') {
      doCnt = true;
      cnt += 1;
    }
  }
  return cnt;
};

console.log(lengthOfLastWord(''));
