// What is indirect-recursion

// Indirect Recursion occurs when two or more functions call each other in a cycle.
// That means a function doesn't call itself directly but does so indirectly through another function.

let money = 100;
let totalApple = 0;

const buyApple = (x) => {
  if (x > 0) {
    console.log("I have ", x, "RS", totalApple);
    buyMore(x);
  } else {
    console.log("I do not have more money", totalApple);
  }
};

const buyMore = (x) => {
  totalApple++;
  buyApple(x - 10);
};

buyApple(money);

// this is very tricky method
const test = (x) => {
  console.log("first =>", x);

  if (x > 0) {
    test(x - 1);
  }
  console.log("value =>", x); // here why increment then x value ?
};

test(5);
