// You are given a 2D integer array ranges and two integers left and right. Each ranges[i] = [starti, endi] represents an inclusive interval between starti and endi.

// Return true if each integer in the inclusive range [left, right] is covered by at least one interval in ranges. Return false otherwise.

// An integer x is covered by an interval ranges[i] = [starti, endi] if starti <= x <= endi.

 

// Example 1:

// Input: ranges = [[1,2],[3,4],[5,6]], left = 2, right = 5
// Output: true
// Explanation: Every integer between 2 and 5 is covered:
// - 2 is covered by the first range.
// - 3 and 4 are covered by the second range.
// - 5 is covered by the third range.
// Example 2:

// Input: ranges = [[1,10],[10,20]], left = 21, right = 21
// Output: false
// Explanation: 21 is not covered by any range.


function isCovered(ranges, left, right) {
    // Create an array of booleans to represent the coverage of integers from left to right
    const covered = new Array(right - left + 1).fill(false);

    // Mark the covered integers as true
    for (const [start, end] of ranges) {
        for (let i = Math.max(left, start); i <= Math.min(right, end); i++) {
            covered[i - left] = true;
        }
    }

    // Check if all integers in the range are covered
    return covered.every((isCovered) => isCovered);
}

// Example usage:
const ranges1 = [[1, 2], [3, 4], [5, 6]];
const left1 = 2;
const right1 = 5;

console.log(isCovered(ranges1, left1, right1)); // Output: true

const ranges2 = [[1, 10], [10, 20]];
const left2 = 21;
const right2 = 21;

console.log(isCovered(ranges2, left2, right2)); // Output: false
