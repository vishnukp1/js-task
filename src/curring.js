function add(x) {
    return function(y) {
      return x + y;
    };
  }
  
  console.log(add(3)(4)); // Output: 7
  