// Direct recursion

// Recursion is a process in which a function calls itself as a subroutine.
// This allows the function to be repeated several times, as it can call itself during its execution.
// Recursion is often used to solve problems that can be broken down into smaller, similar subproblems.

// 1: example
const factorial = (x) => {
  if (x == 0) {
    return 1;
  }
  return x * factorial(x - 1);
};
console.log("factorial =>", factorial(5)); //120

// 2: example
const fibonacci = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2); // 0, 1, 1, 2, 3, 5, 8, 13
};
console.log("fibonacci =>", fibonacci(6)); //13
