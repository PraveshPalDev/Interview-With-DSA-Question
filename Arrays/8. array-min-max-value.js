// create a one arrays to find the min and max value

let arr = [12, 5, 1, 5, 8, 2, 56, 1212, 98, 0, 26, 18, 65, 98];

let min = arr[0],
  max = arr[0];

for (i = 1; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  }

  if (arr[i] > max) {
    max = arr[i];
  }
}

console.log("Min value : ", min);
console.log("Max value : ", max);
