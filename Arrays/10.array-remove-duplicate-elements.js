// remove the duplicate elements
// create an array to remove the duplicate elements
const arr4 = [1, 2, 3, 4, 5, 6, 7, 3, 5, 6, 2, 1, 2, 3];
const uniqueValue = [];
let finalIndex = 0;

for (i = 0; i < arr4.length; i++) {
  let isDuplicate = false;

  for (let j = 0; j < finalIndex; j++) {
    if (arr4[i] === uniqueValue[j]) {
      isDuplicate = true;
      break;
    }
  }

  if (!isDuplicate) {
    uniqueValue[finalIndex] = arr4[i];
    finalIndex++;
  }
}

console.log("remove the duplicate value =>", uniqueValue);
