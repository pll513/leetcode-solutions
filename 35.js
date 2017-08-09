/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var len = nums.length;
    var i;
    for (i = 0; i < len; ++i) {
        if (target <= nums[i]) break;
    }
    return i;
};