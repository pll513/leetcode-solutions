/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var i;
    var tmp;
    var len = s.length;
    var stack = [];
    var map = {'[':']','{':'}','(':')'};
    for (i = 0; i < len; ++i) {
        tmp = s[i];
        if (tmp == '[' || tmp == '{' || tmp == '(') {
            stack.push(tmp);
        } else {
            if (stack.length == 0) return false;
            if (map[stack[stack.length - 1]] == tmp) stack.pop();
            else return false;
        }
    }
    if (stack.length > 0) return false;
    return true;
};