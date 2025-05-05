// Operations of data structures in JavaScript to use in interviews

// -------------------------------- array methods --------------------------------
// 1. Create an array
const array = [1, 2, 3, 4, 5];
// 2. Access an element
const firstElement = array[0]; // 1
// 3. Update an element
array[0] = 10; // [10, 2, 3, 4, 5]
// 4. Delete an element
array.splice(0, 1); // [2, 3, 4, 5]
// 5. Iterate through an array
for (let i = 0; i < array.length; i++) {
  console.log(array[i]); // 2, 3, 4, 5
}
// 6. Add an element to the end
array.push(6); // [2, 3, 4, 5, 6]
// 7. Remove the last element
array.pop(); // [2, 3, 4, 5]
// 8. Add an element to the beginning
array.unshift(1); // [1, 2, 3, 4, 5]
// 9. Remove the first element
array.shift(); // [2, 3, 4, 5]
// 10. Find the index of an element
const index = array.indexOf(3); // 1
// 11. Check if an element exists
const exists = array.includes(3); // true
// 12. Sort an array
const sortedArray = array.sort((a, b) => a - b); // [2, 3, 4, 5]
// 13. Reverse an array
const reversedArray = array.reverse(); // [5, 4, 3, 2]
// 14. Slice an array
const slicedArray = array.slice(1, 3); // [4, 3]
// 15. Splice an array
const splicedArray = array.splice(1, 2); // [4, 3] and array is now [5, 2]
// 16. Join an array
const joinedArray = array.join(", "); // "5, 2"
// 17. Map an array
const mappedArray = array.map((item) => item * 2); // [10, 4]
// 18. Filter an array
const filteredArray = array.filter((item) => item > 2); // [5]
// 19. Reduce an array
const reducedValue = array.reduce((acc, item) => acc + item, 0); // 7
// 20. Find an element
const foundElement = array.find((item) => item > 2); // 3
// 21. Find index of an element
const foundIndex = array.findIndex((item) => item > 2); // 1
// 22. Fill an array
const filledArray = array.fill(0); // [0, 0, 0, 0, 0]
// 23. Copy within an array
const copiedArray = array.copyWithin(0, 2); // [4, 5, 5, 2, 3]
// 24. Flat an array
const nestedArray = [1, [2, 3], [4, 5]];
const flatArray = nestedArray.flat(); // [1, 2, 3, 4, 5]
// 25. FlatMap an array
const flatMappedArray = nestedArray.flatMap((item) => item); // [1, 2, 3, 4, 5]
// 26. Fill an array with a value
const filledArrayWithValue = new Array(5).fill(0); // [0, 0, 0, 0, 0]
// 27. Array.from
const arrayFrom = Array.from("hello"); // ['h', 'e', 'l', 'l', 'o']
// 28. Array.isArray
const isArray = Array.isArray(array); // true
// 29. Array.of
const arrayOf = Array.of(1, 2, 3); // [1, 2, 3]
// 30. Array.prototype.entries
const entries = array.entries(); // [0, 1], [1, 2], [2, 3], [3, 4], [4, 5]
// 31. Array.prototype.keys
const keys = array.keys(); // [0, 1, 2, 3, 4]
// 32. Array.prototype.values
const values = array.values(); // [1, 2, 3, 4, 5]
// 33. Array.prototype.concat
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const concatenatedArray = array1.concat(array2); // [1, 2, 3, 4, 5, 6]
// 34. Array.prototype.every
const every = array.every((item) => item > 0); // true
// 35. Array.prototype.some
const some = array.some((item) => item > 3); // true
// 36. Array.prototype.fill
const filledArray2 = array.fill(0, 1, 3); // [1, 0, 0, 4, 5]

// -------------------------------- string methods --------------------------------
// 1. Create a string
const str = "Hello, World!";
// 2. Access a character
const firstChar = str[0]; // 'H'
// 3. Update a character (strings are immutable)
// str[0] = 'h'; // Error
// 4. Delete a character (strings are immutable)
// str[0] = ''; // Error
// 5. Iterate through a string
for (let i = 0; i < str.length; i++) {
  console.log(str[i]); // 'H', 'e', 'l', 'l', 'o', ',', ' ', 'W', 'o', 'r', 'l', 'd', '!'
}
// 6. String length
const strLength = str.length; // 13
// 7. Convert to uppercase
const upperStr = str.toUpperCase(); // 'HELLO, WORLD!'
// 8. Convert to lowercase
const lowerStr = str.toLowerCase(); // 'hello, world!'
// 9. Trim whitespace
const trimmedStr = str.trim(); // 'Hello, World!'
// 10. Split a string into an array
const splitStr = str.split(", "); // ['Hello', 'World!']
// 11. Join an array into a string
const joinedStr = splitStr.join(", "); // 'Hello, World!'
// 12. Find the index of a substring
const indexOfSubstring = str.indexOf("World"); // 7
// 13. Check if a substring exists
const includesSubstring = str.includes("World"); // true
// 14. Replace a substring
const replacedStr = str.replace("World", "JavaScript"); // 'Hello, JavaScript!'
// 15. Slice a string
const slicedStr = str.slice(0, 5); // 'Hello'
// 16. Substring a string
const substringStr = str.substring(0, 5); // 'Hello'
// 17. CharAt
const charAtStr = str.charAt(0); // 'H'
// 18. CharCodeAt
const charCodeAtStr = str.charCodeAt(0); // 72
// 19. String.prototype.startsWith
const startsWithStr = str.startsWith("Hello"); // true
// 20. String.prototype.endsWith
const endsWithStr = str.endsWith("!"); // true
// 21. String.prototype.includes
const includesStr = str.includes("Hello"); // true
// 22. String.prototype.repeat
const repeatedStr = str.repeat(2); // 'Hello, World!Hello, World!'
// 23. String.prototype.split
const splitStr2 = str.split(" "); // ['Hello,', 'World!']

// -------------------------------- object methods --------------------------------
// 1. Create an object
const obj = { name: "John", age: 30 };
// 2. Access a property
const name = obj.name; // 'John'
// 3. Update a property
obj.name = "Jane"; // { name: 'Jane', age: 30 }
// 4. Delete a property
delete obj.age; // { name: 'Jane' }
// 5. Iterate through an object
for (const key in obj) {
  console.log(key, obj[key]); // name Jane
}
// 6. Check if a property exists
const hasName = "name" in obj; // true
// 7. Get object keys
const keys2 = Object.keys(obj); // ['name']
// 8. Get object values
const values2 = Object.values(obj); // ['Jane']
// 9. Get object entries
const entries2 = Object.entries(obj); // [['name', 'Jane']]
// 10. Merge two objects
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObj = { ...obj1, ...obj2 }; // { a: 1, b: 3, c: 4 }
// 11. Object.assign
const assignedObj = Object.assign({}, obj1, obj2); // { a: 1, b: 3, c: 4 }
// 12. Object.freeze
const frozenObj = Object.freeze(obj); // { name: 'Jane' }
// 13. Object.seal
const sealedObj = Object.seal(obj); // { name: 'Jane' }
