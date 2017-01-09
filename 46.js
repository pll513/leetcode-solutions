var permute = function(nums) {

  var len = nums.length;

  var p = function(nums) {
    var numsCopy = nums.slice(0);
    var i;
    var l = nums.length;
    var arr;
    var arrReturn;

    if (nums.length === 1) {
      return nums;
    }

    for (i = 0; i < l; ++i) {
      arr = [];
      arr.push(numsCopy[i]);
      numsCopy.splice(i , 1);
      arrReturn = arr.concat(p(numsCopy));
      if ( l === len) {
        console.log(arrReturn);
      }
    }
    return arrReturn;
  }

  p(nums);

};

permute([1,2,3,4]);