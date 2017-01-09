/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  var result = 0;
  var i = 0;
  var len = nums.length;
  for (i = 0; i < len; ++i) {
    result = result ^ nums[i];
  }
  return result;
};

console.log(singleNumber([1,1,3,2,2,4,3]));