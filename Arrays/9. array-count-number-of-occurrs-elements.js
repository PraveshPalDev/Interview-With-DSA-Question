// create an array to count the number of occurrences of each element
const arr2 = ["a", "b", "c", "c", "d", "e", "f", "a", "g", "g", "h", "c"];
const firstValue = {};

for (let i = 0; i < arr2.length; i++) {
  const value = arr2[i];

  if (firstValue[value]) {
    firstValue[value]++;
  } else {
    firstValue[value] = 1;
  }
}

console.log("final object", firstValue);

// create an array to count the number of occurrences of each element
const arr3 = [1, 2, 3, 4, 5, 6, 7, 3, 5, 6, 2, 1, 2, 3];

const secondValue = {};
for (let i = 0; i < arr3.length; i++) {
  const value = arr3[i];

  if (secondValue[value]) {
    secondValue[value]++;
  } else {
    secondValue[value] = 1;
  }
}

console.log("final arrays with count =>", secondValue);
