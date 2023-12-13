function isPalindrome(x) {
    if (x < 0) return false;
    const reverse = parseInt(x.toString().split('').reverse().join(''));
    return x === reverse;
}

// Example Input
const x = 121;
console.log(isPalindrome(x)); // Output: true
