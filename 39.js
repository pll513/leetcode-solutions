/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    var result = [];
    var sorted = candidates.sort(function (a, b) { return a - b; });
    var len = sorted.length;
    var solve = function (nums, sum, start) {
        var i;
        var tmp;
        var tmpsum;
        for (i = start; i < len; ++i) {
            tmp = sorted[i];
            tmpsum = tmp + sum;
            if (tmpsum < target) {
                solve(nums.concat(tmp), tmpsum, i);
            } else if (tmpsum == target) {
                result.push(nums.concat(tmp));
                break;
            } else {
                break;
            }
        }
    }
    solve([], 0, 0);
    return result;
};