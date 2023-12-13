var countHillValley = function(nums) {
    let hillsAndValleys = 0;

    for (let i = 1; i < nums.length - 1; i++) {
        const left = nums[i - 1];
        const current = nums[i];
        const right = nums[i + 1];

        if (current !== left || current !== right) {
            if (current > left && current > right) {
                // Check if current is a hill peak
                hillsAndValleys++;
            } else if (current < left && current < right) {
                // Check if current is a valley bottom
                hillsAndValleys++;
            }
        }
    }

    return hillsAndValleys;
};

// Example usage:
const example1 = countHillValley([2, 4, 1, 1, 6, 5]);
console.log(example1);  // Output: 3

const example2 = countHillValley([6, 6, 5, 5, 4, 1]);
console.log(example2);  // Output: 0
