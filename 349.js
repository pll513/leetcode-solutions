var intersection = function(nums1, nums2) {
    var result = [];
    var i;
    var j;
    var len1;
    var len2;
    var tmp;
    for (i=0, len1=nums1.length; i<len1; ++i) {
      for (j=0, len2=nums2.length; j<len2; ++j) {
        tmp = nums1[i];
        if (tmp === nums2[j] && result.indexOf(tmp) === -1)
          result.push(tmp);
      }
    }
    return result;
};

console.log(intersection([1,2,2,1],[2,2]));
