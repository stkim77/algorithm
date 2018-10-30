/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort((a, b)=>a-b);
    let rtn = 0;
    for (let i=0 ; i<nums.length ; i+=2) {
        rtn += nums[i];
    }
    return rtn;
};

let input = [1,4,3,2];
console.log(arrayPairSum(input));