function swapArithmetic(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
    return [a, b];
  }
  
  // Example usage:
  let x = 5;
  let y = 10;
  [x, y] = swapArithmetic(x, y);
  console.log("x:", x); // Output: 10
  console.log("y:", y); // Output: 5
  