/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    var result = [];
    var sorted = candidates.sort(function (a, b) { return a - b; });
    var len = sorted.length;
    var solve = function (nums, remain, sum) {
        var i;
        var tmp;
        var tmpsum;
        var len = remain.length;
        var used = [];
        for (i = 0; i < len; ++i) {
            tmp = remain[i];
            if (~used.indexOf(tmp)) continue;
            tmpsum = tmp + sum;
            used.push(tmp);
            if (tmpsum < target) {
                solve(nums.concat(tmp), copydelete(remain, 0, i + 1), tmpsum);
            } else if (tmpsum == target) {
                result.push(nums.concat(tmp));
                break;
            } else {
                break;
            }
        }
    }
    solve([], sorted, 0, 0);
    return result;
};

function arraycopy(arr) {
    return Array.prototype.slice.call(arr);
}

function copydelete(arr, index, count) {
    var newarr = Array.prototype.slice.call(arr);
    newarr.splice(index, count);
    return newarr;
}