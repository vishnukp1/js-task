// Reversing an integer means to reverse all its digits.

// For example, reversing 2021 gives 1202. Reversing 12300 gives 321 as the leading zeros are not retained.
// Given an integer num, reverse num to get reversed1, then reverse reversed1 to get reversed2. Return true if reversed2 equals num. Otherwise return false.

 

// Example 1:

// Input: num = 526
// Output: true
// Explanation: Reverse num to get 625, then reverse 625 to get 526, which equals num.
// Example 2:

// Input: num = 1800
// Output: false
// Explanation: Reverse num to get 81, then reverse 81 to get 18, which does not equal num.
// Example 3:

// Input: num = 0
// Output: true
// Explanation: Reverse num to get 0, then reverse 0 to get 0, which equals num.

function isDoubleReversedEqual(num) {
    // Helper function to reverse a string
    function reverseString(s) {
      return s.split('').reverse().join('');
    }
  
    // Convert num to a string, reverse it, and convert it back to an integer
    const reversed1 = parseInt(reverseString(num.toString()), 10);
    
    // Reverse reversed1 to get reversed2
    const reversed2 = parseInt(reverseString(reversed1.toString()), 10);
  
    // Check if reversed2 equals num
    return reversed2 === num;
  }
  
  // Example 1
  console.log(isDoubleReversedEqual(526)); // Output: true
  
  // Example 2
  console.log(isDoubleReversedEqual(1800)); // Output: false
  
  // Example 3
  console.log(isDoubleReversedEqual(0)); // Output: true
  