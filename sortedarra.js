function customSort(arr) {
    const sortedArray = [...arr]; // Create a copy of the original array to avoid modifying it.
  
    sortedArray.sort((a, b) => a - b); // Sort the array in ascending order.
  
    return sortedArray;
  }
  
  const unsortedArray = [5, 2, 9, 1, 5, 6];
  const sortedArray = customSort(unsortedArray);
  
  console.log("Unsorted Array:", unsortedArray);
  console.log("Sorted Array:", sortedArray);
  