// array short using for loops
// 1. Short time using the for for loops
// 2. Size * Size  = 64 render the value 64 times

const arr = [50, 57, 1, 5, 90, 45, 56, 87];

for (i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j]; // 50

      arr[j] = arr[j + 1]; //
      arr[j + 1] = temp;
    }
  }
}

console.log(arr);
