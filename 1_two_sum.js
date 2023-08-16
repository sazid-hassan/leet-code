/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  let newArr = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = nums.length - 1; j > i; j--) {
      if (nums[i] + nums[j] === target) {
        newArr.push(i);
        newArr.push(j);
        break;
      }
    }
  }

  return newArr;
};

console.log(twoSum([3, 2, 4], 6));
