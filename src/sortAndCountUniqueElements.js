function sortAndCountUniqueElements(arr) {
    // Sort the array in ascending order
    const sortedArray = arr.slice().sort((a, b) => a - b);
  
    // Initialize a count variable for unique elements
    let uniqueCount = 0;
  
    // Iterate through the sorted array to count unique elements
    for (let i = 0; i < sortedArray.length; i++) {
      if (i === 0 || sortedArray[i] !== sortedArray[i - 1]) {
        uniqueCount++;
      }
    }
  
    return { sortedArray, uniqueCount };
  }
  
  // Example usage:
  const inputArray = [5, 2, 8, 2, 3, 5, 9, 1, 8];
  const result = sortAndCountUniqueElements(inputArray);
  
  console.log("Sorted Array:", result.sortedArray);
  console.log("Count of Unique Elements:", result.uniqueCount);
  