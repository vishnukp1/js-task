// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
// Example 2:

// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.
// Example 3:

// Input: nums = [1,2,3]
// Output: 0
// Sure, let's simplify the problem and the questions related to it:

// Problem: Count Identical Pairs
// You have a list of numbers. How many pairs of numbers in the list are the same? For example, in the list [1, 2, 2, 3, 1], 
// there are 3 pairs of identical numbers (2, 2 and 1, 1).

// Question 1: Count Identical Pairs
// How many pairs of numbers in a list are the same? Write a function to count them.

// Question 2: Maximum Identical Pairs
// What's the most identical pairs you can make from a list of numbers? Find and return the maximum number of pairs with the same
//  values.

// Question 3: Identify Unique Elements
// How many different numbers are there in a list? Count and return the unique (non-repeating) numbers.

// Question 4: Pair Count for Given Value
// Given a list of numbers and a target number, find how many pairs of numbers in the list add up to the target. Return the count
//  of such pairs.

// Question 5: Identical Pairs in Multiple Arrays
// If you have multiple lists of numbers, how many pairs of identical numbers can you find across all the lists? Count and return
//  the total number of such pairs.


var numIdenticalPairs = function(nums) {
    let count = 0;
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[i] === nums[j]) {
                count++;
            }
        }
    }

    return count;
};

// Example usage:
const nums1 = [1, 2, 3, 1, 1, 3];
const nums2 = [1, 1, 1, 1];
const nums3 = [1, 2, 3];

console.log(numIdenticalPairs(nums1)); // Output: 4
console.log(numIdenticalPairs(nums2)); // Output: 6
console.log(numIdenticalPairs(nums3)); // Output: 0
