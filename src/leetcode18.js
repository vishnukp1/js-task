// 1941. Check if All Characters Have Equal Number of Occurrences
// Easy
// Topics
// Companies
// Hint
// Given a string s, return true if s is a good string, or false otherwise.

// A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).

 

// Example 1:

// Input: s = "abacbc"
// Output: true
// Explanation: The characters that appear in s are 'a', 'b', and 'c'. All characters occur 2 times in s.
// Example 2:

// Input: s = "aaabb"
// Output: false
// Explanation: The characters that appear in s are 'a' and 'b'.
// 'a' occurs 3 times while 'b' occurs 2 times, which is not the same number of times. js leetcode

var areOccurrencesEqual = function(s) {
    // Create a frequency map to store the occurrences of each character
    const frequencyMap = new Map();
    
    // Iterate through each character in the string
    for (let i = 0; i < s.length; i++) {
        const char = s[i];                                                                                                                                                                                                                                                                                                                                                                                  
        // Increment the count for the current character in the frequency map
        frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
    }
    
    // Convert the frequency map values into an array
    const occurrences = Array.from(frequencyMap.values());
    
    // Check if all occurrences are the same
    return new Set(occurrences).size === 1;
};

// Test cases


 


// Test cases
console.log(areOccurrencesEqual("abacbc")); // Output: true
console.log(areOccurrencesEqual("aaabb"));  // Output: false
// In this version, I've simplified the loop to a for...of loop, making the code cleaner. The logic remains the same, counting the occurrences of each character and checking if they are all equal using a Set.





