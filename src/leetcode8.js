// The string is called alternating if no two adjacent characters are equal. For example, the string "010" is alternating, while
// the string "0100" is not.

// Return the minimum number of operations needed to make s alternating.

// Example 1:

// Input: s = "0100"
// Output: 1
// Explanation: If you change the last character to '1', s will be "0101", which is alternating.
// Example 2:

// Input: s = "10"
// Output: 0
// Explanation: s is already alternating.
// Example 3:

// Input: s = "1111"
// Output: 2
// Explanation: You need two operations to reach "0101" or "1010".

function minOperations(s) {
  function countOperations(startChar) {
    let operations = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== startChar) {
        operations++;
      }
      startChar = startChar === "1" ? "0" : "1";
    }
    return operations;
  }

  const operationsWith0 = countOperations("0");
  const operationsWith1 = countOperations("1");

  return Math.min(operationsWith0, operationsWith1);
}

// Example usage:
const s1 = "0100";
console.log(minOperations(s1)); // Output: 1

const s2 = "10";
console.log(minOperations(s2)); // Output: 0

const s3 = "1111";
console.log(minOperations(s3)); // Output: 2
