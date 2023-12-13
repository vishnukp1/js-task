// Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".

// A string is palindromic if it reads the same forward and backward.

 

// Example 1:

// Input: words = ["abc","car","ada","racecar","cool"]
// Output: "ada"
// Explanation: The first string that is palindromic is "ada".
// Note that "racecar" is also palindromic, but it is not the first.
// Example 2:

// Input: words = ["notapalindrome","racecar"]
// Output: "racecar"
// Explanation: The first and only string that is palindromic is "racecar".
// Example 3:

// Input: words = ["def","ghi"]
// Output: ""
// Explanation: There are no palindromic strings, so the empty string is returned.


function findFirstPalindromic(words) {
    for (const word of words) {
      if (isPalindrome(word)) {
        return word;
      }
    }
    return "";
  }
  
  function isPalindrome(word) {
    const length = word.length;
    for (let i = 0; i < length / 2; i++) {
      if (word[i] !== word[length - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  
  // Example 1
  const example1 = findFirstPalindromic(["abc", "car", "ada", "racecar", "cool"]);
  console.log(example1); // Output: "ada"
  
  // Example 2
  const example2 = findFirstPalindromic(["notapalindrome", "racecar"]);
  console.log(example2); // Output: "racecar"
  
  // Example 3
  const example3 = findFirstPalindromic(["def", "ghi"]);
  console.log(example3); // Output: ""
  