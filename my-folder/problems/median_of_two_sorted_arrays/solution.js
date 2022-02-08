/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */




var findMedianSortedArrays = function(nums1, nums2) {
    var sorted = nums1.concat(nums2).sort(function(a,b){return a-b;});
    console.log(sorted);
    if(sorted.length %2 ==0){
        var median = (sorted[sorted.length/2]+sorted[sorted.length/2-1])/2;
    }else{
        var median = sorted[Math.floor(sorted.length/2)];
    }
    return median
};

