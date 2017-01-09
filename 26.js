var removeDuplicates = function(nums) {
  var len = nums.length;
  var i;
  for (i=0; i<len-1; ++i) {
    if (nums[i] === nums[i+1]) {
      nums.splice(i,1);
      len -= 1;
      i -= 1;
    }
  }
  console.log(nums);
  return len;
};

console.log(removeDuplicates([1,1,1,2,2,2,3,3]));
