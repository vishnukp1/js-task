var maxRepeating = function(sequence, word) {
    let num = 0;
    const j = word.length;
    for (let i = 0; i <= sequence.length - j; i++) {
        const new1 = sequence.slice(i, i + j);
        if (new1 === word) {
            let k = i + j;
            let count = 1;
            while (sequence.slice(k, k + j) === word) {
                k += j;
                count += 1;
            }
            num = Math.max(num, count);
        }
    }
    return num;
};

const sequence = "aaabaaaabaaabaaaabaaaabaaaabaaaaba";
const word = "a";

console.log(maxRepeating(sequence, word)); 
