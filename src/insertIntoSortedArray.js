function insertIntoSortedArray(sortedArray, newElement) {
    // Push the new element into the array
    sortedArray.push(newElement);
  
    // Sort the array in ascending order
    sortedArray.sort((a, b) => a - b);
  
    return sortedArray;
  }
  
  // Example usage:
  const sortedArray = [2, 4, 6, 8, 10];
  const newElement = 5;
  const updatedArray = insertIntoSortedArray(sortedArray, newElement);
  
  console.log("Updated Array:", updatedArray);
  