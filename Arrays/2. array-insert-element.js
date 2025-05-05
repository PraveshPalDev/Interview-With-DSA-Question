const arr = [23, 43, 51, 67, 98, 34, 76, 90, 12, 66];
const position = 5;
const value = 568989;
const removePosition = 5;

// ========================= inserted the value =========================
// insert the value at the given position

if (position >= 0 && position <= arr.length) {
  for (let i = arr.length; i > position; i--) {
    arr[i] = arr[i - 1];
  }
  arr[position] = value;
  console.log("value inserted =>", arr);
} else {
  console.log("enter the correct position");
}

// using js method
// arr.splice(position, 0, value);
// console.log("value inserted =>", arr);

// ========================= remove the value =========================
// remove the value at the given position

if (removePosition >= 0 && removePosition < arr.length) {
  for (let i = removePosition; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  console.log("value removed =>", arr);
} else {
  console.log("enter the correct position");
}

// using js method
// arr.splice(removePosition, 1);
// console.log("value removed =>", arr);
