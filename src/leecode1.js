// Problem Statement:
// You are given an array of integers called nums. An integer x is considered "special" if there are exactly x numbers in the array 
// that are greater than or equal to x. Your task is to find and return the largest "special" integer. If there is no such integer,
//  return -1.

// In other words, you need to find the maximum integer x such that there are exactly x elements in the array nums that are greater
//  than or equal to x.

// The provided code defines a function specialArray(nums) that takes an array of integers as input and solves this problem by
//  iterating through possible values of x and checking if the condition is met.

// Here are the example outputs for the given test cases:

// For nums1 = [3, 5], the largest "special" integer is 2, as there are two elements in the array that are greater than or equal
//  to 2.
// For nums2 = [0, 0], there is no "special" integer, so the function returns -1.
// For nums3 = [0, 4, 3, 0, 4], the largest "special" integer is 3, as there are exactly three elements in the array that are
//  greater than or equal to 3.
// So, the problem is to find the largest "special" integer in the given array nums.

var specialArray = function(nums) {
    for (let x = 0; x <= nums.length; x++) {
        let count = 0;
        for (let num of nums) {
            
            if (num >= x) {
                count++;
            }
        }
        if (count === x) {
            return x;
        }
    }
    return -1;
};

// Example 1
const nums1 = [3, 5];
console.log("Example 1:", specialArray(nums1));  // Output: 2

// Example 2
const nums2 = [0, 0];
console.log("Example 2:", specialArray(nums2));  // Output: -1

// Example 3
const nums3 = [0, 4, 3, 0, 4];
console.log("Example 3:", specialArray(nums3));  // Output: 3
