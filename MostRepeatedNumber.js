function findMostRepeatedNumber(numberList) {
    // Create an object to store the frequency of each number
    let frequencyMap = {};

    // Iterate through the list of numbers
    for (let i = 0; i < numberList.length; i++) {
        // Get the current number
        let currentNumber = numberList[i];

        // Update the frequency in the map
        frequencyMap[currentNumber] = (frequencyMap[currentNumber] || 0) + 1;
    }

    // Find the number with the highest frequency
    let mostRepeatedNumber;
    let maxFrequency = 0;

    for (let number in frequencyMap) {
        if (frequencyMap[number] > maxFrequency) {
            maxFrequency = frequencyMap[number];
            mostRepeatedNumber = parseInt(number);
        }
    }

    // Return the most repeated number
    return mostRepeatedNumber;
}

// Example usage:
const numbers = [3, 5, 2, 8, 3, 9, 3, 5, 2, 3];
const mostRepeated = findMostRepeatedNumber(numbers);
console.log(`The most repeated number in the list is: ${mostRepeated}`);
