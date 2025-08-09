/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let array=[];
    let merge=nums1.slice(0,m).concat(nums2)
    merge.sort((a,b) => a-b);
    for(i=0;i<merge.length;i++){
        nums1[i]=merge[i]
    }
    return nums1;
    
};