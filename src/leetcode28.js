
// Code

// Testcase
// Test Result
// Test Result

// 2180. Count Integers With Even Digit Sum
// Easy
// Topics
// Companies
// Hint
// Given a positive integer num, return the number of positive integers less than or equal to num whose digit sums are even.

// The digit sum of a positive integer is the sum of all its digits.

 

// Example 1:

// Input: num = 4
// Output: 2
// Explanation:
// The only integers less than or equal to 4 whose digit sums are even are 2 and 4.    
// Example 2:

// Input: num = 30
// Output: 14
// Explanation:
// The 14 integers less than or equal to 30 whose digit sums are even are
// 2, 4, 6, 8, 11, 13, 15, 17, 19, 20, 22, 24, 26, and 28.
function countNumbersWithEvenDigitSum(num) {
    function isEvenDigitSum(n) {
        let digitSum = 0;
        while (n > 0) {
            digitSum += n % 10;
            n = Math.floor(n / 10);
        }
        return digitSum % 2 === 0;
    }

    let count = 0;
    for (let i = 1; i <= num; i++) {
        if (isEvenDigitSum(i)) {
            count++;
        }
    }

    return count;
}

// Example 1
let num1 = 4;
console.log(countNumbersWithEvenDigitSum(num1)); // Output: 2

// Example 2
let num2 = 30;
console.log(countNumbersWithEvenDigitSum(num2)); // Output: 14
