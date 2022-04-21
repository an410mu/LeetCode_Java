/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    
  let a = k%nums.length;
let l=0;
let r=nums.length-1;
    while(l<r){
        [nums[l],nums[r]]=[nums[r],nums[l]];
        l++;r--;
    }
 
 l=0;
 r=a-1;
    while(l<r){
        [nums[l],nums[r]]=[nums[r],nums[l]];
        l++;r--;
    }
l=a;
    r=nums.length-1;
    while(l<r){
        [nums[l],nums[r]]=[nums[r],nums[l]];
        l++;r--;
    }
  return nums;
};