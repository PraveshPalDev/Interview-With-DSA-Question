// remove the element in arrays

const arr = [12, 34, 65, 33, 45, 23, 56, 78, 90];
const position = 0;

if (position >= 0 && position < arr.length) {
  for (let i = position; i <= arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  arr.length = arr.length - 1;
  console.log("Deleted value =>", arr);
} else {
  console.log("Invalid position. No value removed.");
}
