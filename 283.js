var moveZeroes = function(nums) {
    var len = nums.length;
    var tmp;
    var i;
    var cnt = 0;
    for (i=0; i<len; ++i) {
      if (nums[i] !== 0) {
        tmp = nums[cnt]; nums[cnt]=nums[i]; nums[i]=tmp;
        cnt += 1;
      }
    }
};
var nums = [0,1,0,3,12];
moveZeroes(nums)
console.log(nums);
