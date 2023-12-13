//You can find the missing number in an array containing distinct numbers taken from 0 to N using the XOR operation.


function findMissingNumber(nums) {
    const n = nums.length;
    let missingNumber = n;
  
    for (let i = 0; i < n; i++) {
      missingNumber ^= i ^ nums[i];
    }
  
    return missingNumber;
  }
  
  // Example usage:
  const nums = [3, 0, 1];
  const missingNumber = findMissingNumber(nums);
  console.log(missingNumber); // Output: 2 (since the missing number is 2)
  