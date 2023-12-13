function reverseWords(str) {
  
    const words = str.split(' ');
  
    const reversedWords = words.reverse();
  

    const reversedStr = reversedWords.join(' ');
  
    return reversedStr;
  }
  
  const input = "The greatest victory is that which requires no battle";
  console.log(reverseWords(input)); // Output: "battle no requires which that is victory greatest The"
  