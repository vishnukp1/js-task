// The power of the string is the maximum length of a non-empty substring that contains only one unique character.

// Given a string s, return the power of s.

 

// Example 1:

// Input: s = "leetcode"
// Output: 2
// Explanation: The substring "ee" is of length 2 with the character 'e' only.
// Example 2:

// Input: s = "abbcccddddeeeeedcba"
// Output: 5
// Explanation: The substring "eeeee" is of length 5 with the character 'e' only.



var maxPower = function(s) {
    let maxLen = 1;  // Initialize maxLen to 1, as any character has a power of at least 1.
    let currentLen = 1;  // Initialize currentLen to 1 for the first character.

    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            currentLen++;
        } else {
            maxLen = Math.max(maxLen, currentLen);
            currentLen = 1;
        }
    }

    // After the loop, calculate maxLen one last time (for the last character sequence).
    maxLen = Math.max(maxLen, currentLen);

    return maxLen;
};

// Example usage:
console.log(maxPower("leetcode"));  // Output: 2
console.log(maxPower("abbcccddddeeeeedcba"));  // Output: 5
