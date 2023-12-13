function findShort(s) {
   
    const words = s.split(' ');
    let shortestLength = Infinity;

    // Infinity
  
    for (const word of words) {
      const wordLength = word.length;
      if (wordLength < shortestLength) {
        shortestLength = wordLength;
      }
    }
  
    return shortestLength;
  }
  
  // Example usage:
  console.log(findShort("Simple, given aa string of words, return the length of the shortest word(s).")); // Output: 1
  