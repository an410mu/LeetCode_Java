/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var numbers = {};
  for(var i=0; i<nums.length; i++){
    numbers[nums[i]] = i;
  }
  for(var j=0; j<nums.length; j++){
    var complement = target - nums[j];
    if(numbers[complement] !== undefined && numbers[complement] !== j){
      return [j,numbers[complement]];
    }
  }
    
};