// 1920. Build Array from Permutation
// Easy
// Topics
// Companies
// Hint
// Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.

// A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).

// Example 1:

// Input: nums = [0,2,1,5,3,4]
// Output: [0,1,2,4,5,3]
// Explanation: The array ans is built as follows: 
// ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
//     = [nums[0], nums[2], nums[1], nums[5], nums[3], nums[4]]
//     = [0,1,2,4,5,3]
// Example 2:

// Input: nums = [5,0,1,2,3,4]
// Output: [4,5,0,1,2,3]
// Explanation: The array ans is built as follows:
// ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
//     = [nums[5], nums[0], nums[1], nums[2], nums[3], nums[4]]
//     = [4,5,0,1,2,3]

var buildArray = function(nums) {
    const n = nums.length;
    const ans = new Array(n);

    for (let i = 0; i < n; i++) {
        ans[i] = nums[nums[i]];
    }

    return ans;
};

const nums1 = [0, 2, 1, 5, 3, 4];
const ans1 = buildArray(nums1);
console.log(ans1); // Output: [0, 1, 2, 4, 5, 3]

const nums2 = [5, 0, 1, 2, 3, 4];
const ans2 = buildArray(nums2);
console.log(ans2); // Output: [4, 5, 0, 1, 2, 3]
