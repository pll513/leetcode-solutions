var maxSubArray = function(nums) {

  var len = nums.length;
  var i;
  var sums = new Array(len);

  sums[len - 1] = nums[len - 1];

  for (i = len - 2; i >= 0; --i ) {
    sums[i] = sums[i + 1] > 0 ? nums[i] + sums[i + 1] : nums[i];
  }

  return Math.max.apply(Math, sums);
};