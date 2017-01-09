var removeElement = function(nums, val) {
    var i;
    var tmp;
    var cnt = 0;
    var len = nums.length;
    for (i=0; i<len; ++i) {
      if (nums[i] !== val) {
        tmp = nums[cnt]; nums[cnt] = nums[i]; nums[i] = tmp;
        cnt += 1;
      }
    }
    return cnt;
};

var nums = [2,3,3,2];
var length = removeElement(nums,2);
console.log(length);
console.log(nums);
