// Merge the Two arrays using while loops

// Note both arrays are shorted

const arr1 = [1, 3, 5, 7, 8, 9];
const arr2 = [2, 4, 6, 10, 12, 14];
let arr3 = [];

let i = 0;
let j = 0;
let k = 0;

while (i < arr1.length && j < arr2.length) {
  if (arr1[i] < arr2[j]) {
    arr3[k] = arr1[i];
    i++;
  } else {
    arr3[k] = arr2[j];
    j++;
  }
  k++;
}

while (i < arr1.length) {
  arr3[k] = arr1[i];
  i++;
  k++;
}

while (j < arr2.length) {
  arr3[k] = arr2[j];
  j++;
  k++;
}

console.log("arr3 =>", arr3);
