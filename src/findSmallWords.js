function findShort(s) {
    const words = s.split(' ');
    let shortestWord = words[0];
  
    for (let i = 1; i < words.length; i++) {
      const currentWord = words[i];

  
      if (currentWord.length < shortestWord.length) {
        shortestWord = currentWord;
      }
    }
  
    return shortestWord;
  }
  
 
  console.log(findShort("The quick brown fox"));   // Output: "fox"
  console.log(findShort("A brown dog jumps"));     // Output: "A"
  console.log(findShort("Hello world!"));          // Output: "world!"
  