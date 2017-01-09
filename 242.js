var isAnagram = function(s, t) {
    var sArray = Array.prototype.slice.call(s);
    var tArray = Array.prototype.slice.call(t);
    return sArray.sort().join() === tArray.sort().join();
};

console.log(isAnagram("哈呵a","呵哈a"));
