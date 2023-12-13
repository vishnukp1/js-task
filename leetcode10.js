// You are given two strings s1 and s2 of equal length. A string swap is an operation where you choose two indices in a string (not necessarily different) and swap the characters at these indices.

// Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings. Otherwise, return false.

 

// Example 1:

// Input: s1 = "bank", s2 = "kanb"
// Output: true
// Explanation: For example, swap the first character with the last character of s2 to make "bank".
// Example 2:

// Input: s1 = "attack", s2 = "defend"
// Output: false
// Explanation: It is impossible to make them equal with one string swap.
// Example 3:

// Input: s1 = "kelb", s2 = "kelb"
// Output: true
// Explanation: The two strings are already equal, so no string swap operation is required.

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    // Step 1: Check if the strings are already equal.
    if (s1 === s2) {
        return true;
    }

    // Step 2: Check if they have the same characters but in different positions.
    const sortedS1 = s1.split('').sort().join('');
    const sortedS2 = s2.split('').sort().join('');
 

    if (sortedS1 === sortedS2) {
        // Count the number of character pairs that are in different positions.
        let countDiff = 0;
        for (let i = 0; i < s1.length; i++) {
            if (s1[i] !== s2[i]) {
                countDiff++;
            }
        }

        // If there's exactly one pair of characters in different positions, it's possible to swap them.
        return countDiff === 2;
    }

    return false;
};

// Test cases
console.log(areAlmostEqual("bank", "kanb"));  // Output: true
console.log(areAlmostEqual("attack", "defend"));  // Output: false
console.log(areAlmostEqual("kelb", "kelb"));  // Output: true
