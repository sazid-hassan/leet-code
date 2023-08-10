var merge = function (nums1, m, nums2, n) {
for(let n = nums2.length - 1; n >= 0; n--) {
        nums1[n + m] = nums2[n];
    }

    nums1.sort((a, b) => a - b);

    return nums1;
};

let arr1 = [1, 2, 3, 0, 0, 0],
  arr2 = [2, 5, 6];

console.log(merge(arr1, 3, arr2, 3));
