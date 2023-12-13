// 2148. Count Elements With Strictly Smaller and Greater Elements 
// Solved
// Easy
// Topics
// Companies
// Hint
// Given an integer array nums, return the number of elements that have both a strictly smaller and a strictly greater element appear in nums.

// Example 1:

// Input: nums = [11,7,2,15]
// Output: 2
// Explanation: The element 7 has the element 2 strictly smaller than it and the element 11 strictly greater than it.
// Element 11 has element 7 strictly smaller than it and element 15 strictly greater than it.
// In total there are 2 elements having both a strictly smaller and a strictly greater element appear in nums.
// Example 2:

// Input: nums = [-3,3,3,90]
// Output: 2
// Explanation: The element 3 has the element -3 strictly smaller than it and the element 90 strictly greater than it.
// Since there are two elements with the value 3, in total there are 2 elements having both a strictly smaller and a strictly greater
//  element appear in nums.


var countElements = function(nums) {
    let count = 0;

    for (const num of nums) {
        let hasSmaller = false;
        let hasGreater = false;

        for (const otherNum of nums) {
            if (num !== otherNum) {
                if (otherNum < num) {
                    hasSmaller = true;
                } else if (otherNum > num) {
                    hasGreater = true;
                }
            }
        }

        if (hasSmaller && hasGreater) {
            count++;
        }
    }

    return count;
};

// Example 1
const nums1 = [11, 7, 2, 15];
console.log(countElements(nums1)); // Output: 2

// Example 2
const nums2 = [-3, 3, 3, 90];
console.log(countElements(nums2)); // Output: 2
