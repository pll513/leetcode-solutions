/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    var len = nums.length;
    var i, j;
    var breakloop = false;
    if (len >= 2) {
        for (i = len - 2; i >= 0; --i) {
            for (j = len - 1; j > i; --j) {
                if (nums[j] > nums[i]) {
                    swap(nums, i, j);
                    reverse(nums, i + 1, len - 1);
                    breakloop = true;
                    break;
                }
            }
            if (breakloop == true) break;
        }
        if (i == -1) reverse(nums, 0, len - 1);
    }
};

function reverse(arr, start, end) {
    var i, j;
    var tmp;
    for (i = start, j = end; i < j; ++i, --j) {
        tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
}
    
function swap(arr, i, j) {
    var tmp;
    tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}