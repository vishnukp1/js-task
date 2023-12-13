function reverse(x) {
    const reversed = parseInt(x.toString().split('').reverse().join('')) * Math.sign(x);
    if (reversed < Math.pow(-2, 31) || reversed > Math.pow(2, 31) - 1) {
        return 0;
    }
    return reversed;
}

// Example Input
const x = 123;
console.log(reverse(x)); // Output: 321
