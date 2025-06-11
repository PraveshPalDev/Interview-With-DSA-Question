// Recursion in Data Structures (DS) is a technique where a function calls itself directly or indirectly to
// solve a problem by breaking it into smaller sub-problems.
// It’s widely used in data structures like trees, graphs, linked lists, and algorithms like sorting, searching,
// and backtracking.

// Definition: A process in which a function calls itself.

// Each recursive function must have:
// A base case: the condition under which it stops calling itself.
// A recursive case: where the function calls itself with a smaller input.

// 🧩 Types of Recursion

// 1. Direct Recursion
// The function calls itself directly.
function directRecursion(n) {
  if (n === 0) return;
  directRecursion(n - 1); // Direct call
}

// 2. Indirect Recursion
// The function calls another function, which eventually calls the first one.
function A(n) {
  if (n > 0) {
    B(n - 1);
  }
}
function B(n) {
  if (n > 0) {
    A(n - 1);
  }
}

// 3. Tail Recursion
// The recursive call is the last statement in the function.
//  This is memory-efficient in some languages due to tail-call optimization.

function tailRecursion(n) {
  if (n === 0) return;
  return tailRecursion(n - 1); // Last action
}

// 4. Head Recursion
// The recursive call happens before any other operations.
function headRecursion(n) {
  if (n === 0) return;
  headRecursion(n - 1);
  console.log(n); // Action after recursive call
}

// 5. Tree Recursion
function treeRecursion(n) {
  if (n <= 0) return;
  treeRecursion(n - 1);
  treeRecursion(n - 2);
}

// 6. Nested Recursion
function nestedRecursion(n) {
  if (n > 100) return n - 10;
  return nestedRecursion(nestedRecursion(n + 11));
}
