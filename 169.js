var majorityElement = function(nums) {
    nums = nums.sort(function(a,b){return a-b;});
    return nums[Math.floor(nums.length/2)];
};
console.log(majorityElement([1,1,2,3,1,1]));
