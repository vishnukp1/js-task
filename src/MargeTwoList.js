var mergeTwoLists = function(list1, list2) {
  const merged = [...list1, ...list2];
  const uniqueValues = Array.from(new Set(merged)); // Create a new array of unique values
  uniqueValues.sort((a, b) => a - b); // Sort the unique values
  return uniqueValues;
};

const list1 = [1, 2, 4];
const list2 = [1, 3, 4];

const mergedResult = mergeTwoLists(list1, list2);
console.log(mergedResult);
