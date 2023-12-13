const strings = ["apple", "banana", "cherry", "date", "elderberry"];

function sortByLength(a, b) {
  return a.length - b.length;
}


const sortedStrings = strings.sort(sortByLength)

console.log(sortedStrings);
