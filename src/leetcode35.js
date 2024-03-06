var mostCommonWord = function(paragraph, banned) {
    // Convert paragraph to lowercase and split into words
    const words = paragraph.toLowerCase().match(/[a-zA-Z]+/g);
    
    // Create a map to store word frequencies
    const frequencyMap = {};
    
    // Count word frequencies, excluding banned words
    words.forEach(word => {
        if (!banned.includes(word)) {
            frequencyMap[word] = (frequencyMap[word] || 0) + 1;
        }
    });
    
    // Find the most common word
    let maxCount = 0;
    let mostCommonWord = "";
    for (let word in frequencyMap) {
        if (frequencyMap[word] > maxCount) {
            maxCount = frequencyMap[word];
            mostCommonWord = word;
        }
    }
    
    return mostCommonWord;
};

let paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.";
let banned = ["hit"];
console.log(mostCommonWord(paragraph, banned)); // Output: "ball"