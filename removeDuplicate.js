//remove duplicate by morethan given number

function deleteNth(arr, n) {
    const result = [];
    const count = {};
  
    for (const element of arr) {
      if (!count[element]) {
        count[element] = 1;
        result.push(element);
      } else if (count[element] < n) {
        count[element]++;
        result.push(element);
      }
    }
    return result;
  }
  
  // Example usage:
  const arr = [1, 2, 3, 1, 2, 1, 2, 3];
  const n = 2;
  console.log(deleteNth(arr, n)); // Output: [1, 2, 3, 1, 2, 2, 3]
  