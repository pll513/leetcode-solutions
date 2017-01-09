var twoSum = function(nums, target) {
    var i, j;
    var len = nums.length;
    var result = [];
    for (i=0; i<len-1; ++i) {
        for (j=i+1; j<len; ++j) {
            if (nums[i] + nums[j] === target){
                result.push(i);
                result.push(j);
                return result;
            }
        }
    }
    return result;
};

console.log(twoSum([1,2,3],5));
