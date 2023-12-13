// need to give a number and find the repeatancy of user defined number in the number in js

function findFrequency(numberToFind, numberList) {
    // Initialize a variable to count the frequency
    let frequency = 0;
    // Iterate through the list of numbers
    for (let i = 0; i < numberList.length; i++) {
        // Check if the current number in the list is equal to the number to find
        if (numberList[i] === numberToFind) {
            // If they are equal, increment the frequency
            frequency++;
        }
    }
    // Return the frequency of the number in the list
    return frequency;
}

// Example usage:
const numbers = [3, 5, 2, 8, 3, 9, 3, 5, 2];
const numberToFind = 3;

const result = findFrequency(numberToFind, numbers);
console.log(`The frequency of ${numberToFind} in the list is: ${result}`);
