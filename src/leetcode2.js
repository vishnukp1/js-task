// Example 1:

// Input: s = "book"
// Output: true
// Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.
// Example 2:

// Input: s = "textbook"
// Output: false
// Explanation: a = "text" and b = "book". a has 1 vowel whereas b has 2. Therefore, they are not alike.
// Notice that the vowel o is counted twice.

var halvesAreAlike = function (s) {
  // Split the string into two halves
  const halfLength = s.length / 2;
  const a = s.slice(0, halfLength);
  const b = s.slice(halfLength); 

  // Helper function to count vowels in a string
  const countVowels = (str) => {
    const vowels = "aeiouAEIOU";
    let count = 0;

    for (const char of str) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  };
  // Compare vowel counts in the two halves
  return countVowels(a) === countVowels(b);
};

// Example usage:
const s1 = "book";
const s2 = "textbook";

console.log(halvesAreAlike(s1)); // Output: true
console.log(halvesAreAlike(s2)); // Output: false
