/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let elementsum=0;
    let digitsum =0;
    for(i=0;i<nums.length;i++){
        elementsum+=nums[i];

         let spli = nums[i].toString().split("");
    for(j=0;j<spli.length;j++){
        digitsum+=Number(spli[j]);
    }
    }
   
    return elementsum-digitsum;
    
};