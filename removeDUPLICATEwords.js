function removeDuplicateWords(input) {

    const words = input.split(' ');
  
    const uniqueWords = new Set();
  
    const resultWords = [];

    for (const word of words) {
      if (!uniqueWords.has(word)) {
        uniqueWords.add(word);
        resultWords.push(word);
      }
    }
  
    const result = resultWords.join(' ');
  
    return result;
    
  }
  
  const input = 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta';
  console.log(removeDuplicateWords(input)); 
  