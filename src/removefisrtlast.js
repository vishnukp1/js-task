function removeFirstAndLastCharacter(str) {
    if (str.length <= 2) {
      return '';
    } else {
      // return str.substring(1, str.length - 1);
      return str.subString(1,str.length-1)
    }
  }
  
  // Example usage:
  console.log(removeFirstAndLastCharacter("Hello"));    // Output: "ell"
  console.log(removeFirstAndLastCharacter("12345"));    // Output: "234"
  console.log(removeFirstAndLastCharacter("A"));        // Output: ""
  console.log(removeFirstAndLastCharacter(""));         // Output: ""
  