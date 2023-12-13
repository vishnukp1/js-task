function deleteTwoAfterEven(arr) {
    const result = [];
  
    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i]);
  
      if (arr[i] % 2 === 0) {
      
        i += 2;

      }
    }
  
    return result;
  }
  

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const modifiedArray = deleteTwoAfterEven(arr);
  console.log(modifiedArray); // Output: [ 1, 2, 5, 6, 9 ]
  