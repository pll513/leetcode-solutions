var countAndSay = function (n) {
    var count = 1;
    var str = '1';
    var index;
    var len;
    var newstr = '';
    var cntrepeat;
    while (count < n) {
        cntrepeat = 1;
        newstr = "";
        for (i = 0, len = str.length; i < len - 1; ++i) {
            if (str[i] == str[i + 1]) {
                cntrepeat += 1;
            } else {
                newstr += cntrepeat;
                newstr += str[i];
                cntrepeat = 1;
            }
        }
        newstr += cntrepeat;
        newstr += str[i];
        str = newstr;
        count += 1;
    }
    return str;
};