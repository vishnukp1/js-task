const mySet = new Set();

mySet.add('apple');
mySet.add('banana');
mySet.add('cherry');

console.log(mySet.has('apple')); // true
console.log(mySet.has('grape')); // false
console.log(!mySet.has('grape')); //true
