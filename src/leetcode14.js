// 1848. Minimum Distance to the Target Element
// Easy
// Topics
// Companies
// Hint
// Given an integer array nums (0-indexed) and two integers target and start, find an index i such that nums[i] == target and 
// abs(i - start) is minimized. Note that abs(x) is the absolute value of x.

// Return abs(i - start).

// It is guaranteed that target exists in nums.

// Example 1:

// Input: nums = [1,2,3,4,5], target = 5, start = 3
// Output: 1
// Explanation: nums[4] = 5 is the only value equal to target, so the answer is abs(4 - 3) = 1.
// Example 2:

// Input: nums = [1], target = 1, start = 0
// Output: 0
// Explanation: nums[0] = 1 is the only value equal to target, so the answer is abs(0 - 0) = 0.
// Example 3:

// Input: nums = [1,1,1,1,1,1,1,1,1,1], target = 1, start = 0
// Output: 0
// Explanation: Every value of nums is 1, but nums[0] minimizes abs(i - start), which is abs(0 - 0) = 0.

function getMinDistance(nums, target, start) {
    let minDistance = Infinity;  // Initialize with a large value
    let minIndex = -1;  // Initialize with an invalid index
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            const distance = Math.abs(i - start);
            if (distance < minDistance) {
                minDistance = distance;
                minIndex = i;
            }
        }
    }
    
    return minDistance;
}

// Example usage:
const nums1 = [1, 2, 3, 4, 5];
const target1 = 5;
const start1 = 3;
console.log(getMinDistance(nums1, target1, start1));  // Output: 1

const nums2 = [1];
const target2 = 1;
const start2 = 0;
console.log(getMinDistance(nums2, target2, start2));  // Output: 0

const nums3 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const target3 = 1;
const start3 = 0;
console.log(getMinDistance(nums3, target3, start3));  // Output: 0
