let number = 121;
let str = number.toString();
let reversedStr = str.split("").reverse().join("");

if (str === reversedStr) {
  console.log("It is a palindrome");
} else {
  console.log("It is not a palindrome");
}

const checkPalindromeNumber = (x) => {
  const str = x.toString();
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
};

console.log(checkPalindromeNumber(121)); // true
console.log(checkPalindromeNumber(123)); // false
