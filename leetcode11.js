// Topics
// Companies
// Hint
// A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each of the words 
//consists of only uppercase and lowercase English letters (no punctuation).

// For example, "Hello World", "HELLO", and "hello world hello world" are all sentences.
// You are given a sentence s​​​​​​ and an integer k​​​​​​. You want to truncate s​​​​​​ such that it contains only the first k​​​​​​ words. Return 
//s​​​​​​ after truncating it.

 

// Example 1:

// Input: s = "Hello how are you Contestant", k = 4
// Output: "Hello how are you"
// Explanation:
// The words in s are ["Hello", "how" "are", "you", "Contestant"].
// The first 4 words are ["Hello", "how", "are", "you"].
// Hence, you should return "Hello how are you".
// Example 2:

// Input: s = "What is the solution to this problem", k = 4
// Output: "What is the solution"
// Explanation:
// The words in s are ["What", "is" "the", "solution", "to", "this", "problem"].
// The first 4 words are ["What", "is", "the", "solution"].
// Hence, you should return "What is the solution".
// Example 3:

// Input: s = "chopper is not a tanuki", k = 5
// Output: "chopper is not a tanuki"
 
function truncateSentence(s, k) {
    // Split the sentence into words using space as a delimiter
    const words = s.split(' ');
  console.log(words);
    // Join the first k words to create the truncated sentence
    const truncatedSentence = words.slice(0, k).join(' ');
  
    return truncatedSentence;
  }
  
  // Example 1
  const s1 = "Hello how are you Contestant";
  const k1 = 4;
  const result1 = truncateSentence(s1, k1);
  console.log(result1);  // Output: "Hello how are you"
  
  // Example 2
  const s2 = "What is the solution to this problem";
  const k2 = 4;
  const result2 = truncateSentence(s2, k2);
  console.log(result2);  // Output: "What is the solution"
  
  // Example 3
  const s3 = "chopper is not a tanuki";
  const k3 = 5;
  const result3 = truncateSentence(s3, k3);
  console.log(result3);  // Output: "chopper is not a tanuki"
  