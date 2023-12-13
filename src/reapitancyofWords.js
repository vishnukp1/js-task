function findMostUsedLetter(word) {
    const letterCount = {};
  
    for (const letter of word) {
      letterCount[letter] = (letterCount[letter] || 0) + 1;
    }
  
    let mostUsedLetter = "";
    let maxCount = 0;
  
    for (const letter in letterCount) {
      if (letterCount[letter] > maxCount) {
        maxCount = letterCount[letter];
        mostUsedLetter = letter;
      }
    }
  
    return mostUsedLetter;
  }
  
  const word = "javascript momo";
  const mostUsedLetter = findMostUsedLetter(word);
  console.log(`Most used letter: ${mostUsedLetter}`);
  