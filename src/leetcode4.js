// Example 1:

// Input: n = 4
// Output: 10
// Explanation: After the 4th day, the total is 1 + 2 + 3 + 4 = 10.
// Example 2:

// Input: n = 10
// Output: 37
// Explanation: After the 10th day, the total is (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4) = 37. Notice that on the 2nd Monday,
// Hercy only puts in $2.
// Example 3:

// Input: n = 20
// Output: 96
// Explanation: After the 20th day, the total is (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4 + 5 + 6 + 7 + 8) + (3 + 4 + 5 + 6 + 7 + 8)
// = 96. leetcode js

let totalMoney = (n) => {
  let total = 0;
  let currentDay = 1;
  let weekDay = 1;

  for (let i = 1; i <= n; i++) {
    total += currentDay;
    currentDay++;

    if (weekDay === 7) {
      currentDay = i - weekDay + 2;
      weekDay = 0;
    }

    weekDay++;
  }

  return total;
};

// Example usage:
console.log(totalMoney(4)); // Output: 10
console.log(totalMoney(10)); // Output: 37
console.log(totalMoney(20)); // Output: 96
