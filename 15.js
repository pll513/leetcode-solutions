var threeSum = function(nums) {
   var i, j, k;
   var p, q, r;
   var skipP = null;
   var skipQ = null;
   var result = [];
   var tmp = [];
   var len = nums.length;
   nums = nums.sort(function(a,b){return a-b;});
   for (i=0; i<len-2,nums[i]<=0; ++i) {
     p = nums[i];
     if (skipP === p)
      continue;
     if (p === nums[i+1])
      skipP = p;
     for (j=i+1; j<len-1; ++j) {
       q = nums[j]
       for (k=j+1; k<len; ++k) {
         r = nums[k];
         if (nums[k+1] === r)
          continue;
         if (p + q + r === 0) {
           tmp.push(p); tmp.push(q); tmp.push(r);
           result.push(tmp);
           tmp = [];
           while (nums[j] === q) {
             j += 1;
           }
           q = nums[j];
           k = j;
         }
       }
     }
   }
   return result;
};

console.log(threeSum([-2,0,1,1,2]));
