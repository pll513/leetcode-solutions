/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    var result = [];
    var sorted = candidates.sort(function(a,b){return a-b;});
    var len = sorted.length;
    var solve = function(nums, sum, start) {
        var i;
        var tmp;
        var tmpsum;
        var numscopy = arraycopy(nums);
        for (i = start; i < len; ++i) {
            tmp = sorted[i];
            tmpsum = tmp + sum;
            numscopy = arraycopy(nums)
           
            if (tmpsum < target) {
                numscopy.push(tmp);
                solve(arraycopy(numscopy), tmpsum, i);
            } else if (tmpsum == target) {
                numscopy.push(tmp);
                result.push(numscopy);
                break;
            } else {
                break;
            }
        }
    }
    solve([], 0, 0);
    return result;
};
    
function arraycopy(arr) {
    return Array.prototype.slice.call(arr);
}