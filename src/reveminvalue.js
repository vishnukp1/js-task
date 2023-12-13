function removeSmallest(arr) {
    if (arr.length === 0) {
      return [];
    }
  
    // const min = Math.min(...arr);
    const min = Math.min(...arr)
  
    return arr.filter((element) => element !== min);
  }
  
  // Example usage:
  console.log(removeSmallest([1, 2, 3, 4, 5])); // Output: [2, 3, 4, 5]
  console.log(removeSmallest([5, 3, 2, 1, 4])); // Output: [5, 3, 2, 4]
  console.log(removeSmallest([2, 2, 1, 2, 1])); // Output: [2, 2, 2]
  