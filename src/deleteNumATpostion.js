function deleteNumberAtPosition(arr, position) {
    if (position >= 0 && position < arr.length) {
      arr.splice(position, 1);
      // arr.splice(position, 1);
      return arr;
    } else {
      return "Position is out of range";
    }
  }
  
  // Example usage:
  const myArray = [10, 20, 30, 40, 50];
  const position = 2;
  const updatedArray = deleteNumberAtPosition(myArray, position);
  
  console.log("Updated Array:", updatedArray);
  