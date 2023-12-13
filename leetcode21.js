// Example 1:

// Input: s = "abcdefghi", k = 3, fill = "x"
// Output: ["abc","def","ghi"]
// Explanation:
// The first 3 characters "abc" form the first group.
// The next 3 characters "def" form the second group.
// The last 3 characters "ghi" form the third group.
// Since all groups can be completely filled by characters from the string, we do not need to use fill.
// Thus, the groups formed are "abc", "def", and "ghi".
// Example 2:

// Input: s = "abcdefghij", k = 3, fill = "x"
// Output: ["abc","def","ghi","jxx"]
// Explanation:
// Similar to the previous example, we are forming the first three groups "abc", "def", and "ghi".
// For the last group, we can only use the character 'j' from the string. To complete this group, we add 'x' twice.
// Thus, the 4 groups formed are "abc", "def", "ghi", and "jxx".

function groupStrings(s, k, fill) {
    const result = [];
  
    for (let i = 0; i < s.length; i += k) {
      const group = s.slice(i, i + k);
      const remaining = k - group.length;
  
      if (remaining > 0) {
        const fillChars = fill.repeat(remaining);
        result.push(group + fillChars);
      } else {
        result.push(group);
      }
    }
  
    return result;
  }
  
  // Example 1
  const example1 = groupStrings("abcdefghi", 3, "x");
  console.log(example1); // Output: ["abc", "def", "ghi"]
  
  // Example 2
  const example2 = groupStrings("abcdefghij", 3, "x");
  console.log(example2); // Output: ["abc", "def", "ghi", "jxx"]
  