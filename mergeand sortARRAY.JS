function mergeAndSortArrays(arr1, arr2) {
    // Concatenate the two arrays to create a combined array
    const combinedArray = arr1.concat(arr2);
  
    // Sort the combined array
    const sortedArray = combinedArray.sort((a, b) => a - b);
  
    return sortedArray;
  }
  
  // Example usage:
  const unsortedArray1 = [3, 1, 4, 6];
  const unsortedArray2 = [2, 8, 5, 7];
  const sortedArray = mergeAndSortArrays(unsortedArray1, unsortedArray2);
  console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
  