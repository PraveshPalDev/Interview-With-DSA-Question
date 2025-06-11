// 📚 What is an Array in Data Structures (DS)?

// An array is a linear data structure that stores elements of the same data type in contiguous memory locations.
// Arrays allow random access using indices and are widely used for storing and manipulating collections of data
// efficiently.

// Theory of Arrays
// .Fixed Size: Array size must be declared initially (in static arrays).
// .Index-based Access: Elements can be accessed using their index, starting from 0.
// .Homogeneous Data: All elements are of the same data type.
// .Stored Contiguously: Elements are stored in continuous memory locations.
// .Efficient Access: Accessing an element takes constant time — O(1).
// .Insertion/Deletion: Costly in terms of time complexity (O(n)) unless at the end.

// Example (in JavaScript)
let numbers = [10, 20, 30, 40, 50];
// Access
console.log(numbers[2]); // 30
// Update
numbers[1] = 25;
// Insert (manual)
numbers.splice(2, 0, 28); // Insert 28 at index 2
// Delete
numbers.splice(3, 1); // Remove element at index 3

// 🧩 Types of Arrays
// 1. One-Dimensional Array (1D)
let arr = [1, 2, 3, 4];

// 2. Two-Dimensional Array (2D)
let matrix = [
  [1, 2],
  [3, 4],
];
console.log(matrix[1][0]); // 3

// 3. Multi-Dimensional Array
let cube = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];
console.log(cube[1][0][1]); // 6

// 4. Dynamic Array
// Can grow or shrink in size. Languages like JavaScript or Python provide built-in dynamic arrays (Array, list).
let dynamicArr = [];
dynamicArr.push(10);
dynamicArr.push(20); // [10, 20]
dynamicArr.pop(); // [10]

// 5. Jagged Array
// An array of arrays where each sub-array can have different lengths.

let jagged = [[1, 2], [3, 4, 5], [6]];

jagged[0][0]; // 1  → first array, first element
jagged[0][1]; // 2  → first array, second element

jagged[1][0]; // 3  → second array, first element
jagged[1][2]; // 5  → second array, third element

jagged[2][0]; // 6  → third array, only element

// Common Operations
// | Operation | Time Complexity |
// | --------- | --------------- |
// | Access    | O(1)            |
// | Search    | O(n)            |
// | Insert    | O(n)            |
// | Delete    | O(n)            |
