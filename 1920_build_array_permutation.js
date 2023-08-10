var buildArray = function (nums) {
  let midArr = [];

  for (let i = 0; i < nums.length; i++) {
    midArr.push(nums[nums[i]]);
  }
  
    return midArr;
};

buildArray([2, 3, 0, 1]);
