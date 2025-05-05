const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// traversing elements
for (let i = 0; i < arr.length; i++) {
  console.log("accessing using for loops =>", arr[i]); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
}

//getting the value based on index
console.log("accessing using index =>", arr[4]); // 5

const accessingValue = (value) => {
  if (value > 0 && parseInt(value)) {
    console.log("accessing using index =>", arr[value]); // 10
  } else {
    console.log("error for pass the value in method"); // 6
  }
};

// accessing the value using index
accessingValue(9); // 6
