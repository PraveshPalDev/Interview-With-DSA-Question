const arr = [23, 43, 51, 67, 98, 34, 76, 90, 12, 66];
const position = 8;

//  searching an element in an array
if (position >= 0 && position <= arr.length) {
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    if (i == position) {
      res = arr[i];
      break;
    }
  }
  console.log("search value =>", res);
} else {
  console.log("enter the correct position value");
}
