var containsDuplicate = function(nums) {
    nums = nums.sort(function(a,b){return a-b;});
    console.log(nums);
    var i;
    var len = nums.length;
    for (i=0; i<len-1; ++i) {
        if (nums[i] === nums[i+1]) return true;
    }
    return false;
};

console.log(containsDuplicate([1,1,1]));
