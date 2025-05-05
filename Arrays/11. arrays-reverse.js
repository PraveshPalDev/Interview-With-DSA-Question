// reverse arrays value

const arr = [1, 2, 3, 4, 5];
const reverseArrays = [];

// reverse the arrays
for (i = 0; i < arr.length; i++) {
  reverseArrays[i] = arr[arr.length - 1 - i];
}

console.log("reverseArrays =>", reverseArrays);

// reverse the arrays string
const arrStr = "Anil Singh";
let reversedStr = "";

// Loop backward through the original string
for (let i = arrStr.length - 1; i >= 0; i--) {
  reversedStr += arrStr[i];
}

console.log("Reversed String:", reversedStr);
