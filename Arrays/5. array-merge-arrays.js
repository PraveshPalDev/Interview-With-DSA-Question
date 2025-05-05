// merge two arrays

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergeArrays = [];
const reverseArrays = [];

// merge two arrays
for (i = 0; i < arr1.length; i++) {
  mergeArrays[i] = arr1[i];
}

for (i = 0; i < arr2.length; i++) {
  mergeArrays[arr1.length + i] = arr2[i];
}

// using single loops merge the arrays
const totalLength = arr1.length + arr2.length;

for (let i = 0; i < totalLength; i++) {
  if (i < arr1.length) {
    mergeArrays[i] = arr1[i];
  } else {
    mergeArrays[i] = arr2[i - arr1.length];
  }
}

console.log("Merged Array:", mergeArrays);

// use js method
// const finaleMergeArrays = arr1.concat(arr2);
// const finaleMergeArrays2 = [...arr1, ...arr2];
// console.log("finaleMergeArrays2", finaleMergeArrays2);
// console.log("finaleMergeArrays", finaleMergeArrays);
