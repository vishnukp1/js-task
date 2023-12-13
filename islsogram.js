function isIsogram(str) {
  const words = str.toLowerCase();
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (words[i] === words[j]) {
        return false;
      }
    }
  }
  return true;
}

console.log(isIsogram("hey"));
console.log(isIsogram("heytony"));
