# JavaScript Interview Questions with Answers (Top 50)

1. **What is JavaScript?**

   * JavaScript is a high-level, interpreted programming language that is primarily used for creating interactive web applications.

2. **What are the data types supported by JavaScript?**

   * JavaScript supports: String, Number, BigInt, Boolean, Undefined, Null, Symbol, and Object.

3. **What is the difference between `var`, `let`, and `const`?**

   * `var` is function-scoped and can be hoisted. `let` and `const` are block-scoped. `const` cannot be reassigned.

4. **What is hoisting in JavaScript?**

   * Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.

5. **What is closure in JavaScript?**

   * A closure is a function that retains access to its lexical scope, even when executed outside of that scope.

6. **What is the difference between `==` and `===`?**

   * `==` checks for value equality with type coercion, whereas `===` checks for both value and type equality.

7. **What is a promise in JavaScript?**

   * A promise represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

8. **What are arrow functions?**

   * Arrow functions are a shorter syntax for writing functions and do not bind their own `this`.

9. **What is the use of `this` keyword?**

   * `this` refers to the object it belongs to, depending on the context in which it is used.

10. **What is event bubbling in JavaScript?**

    * Event bubbling is the propagation of events from child to parent elements in the DOM.

11. **What are higher-order functions?**

    * Functions that take other functions as arguments or return functions are called higher-order functions.

12. **What is a callback function?**

    * A callback is a function passed into another function as an argument to be executed later.

13. **What is the difference between synchronous and asynchronous code?**

    * Synchronous code executes sequentially, while asynchronous code can execute without blocking the main thread.

14. **What is the difference between `null` and `undefined`?**

    * `undefined` means a variable has been declared but not assigned. `null` is an intentional absence of value.

15. **What is the spread operator?**

    * The spread operator (`...`) allows iterable elements to be expanded in places where multiple elements are expected.

16. **What are template literals?**

    * Template literals are string literals allowing embedded expressions using backticks (`` ` ``).

17. **What is destructuring?**

    * Destructuring is a syntax that allows unpacking values from arrays or properties from objects.

18. **What is the difference between `map()`, `filter()`, and `reduce()`?**

    * `map()` transforms elements, `filter()` removes unwanted elements, `reduce()` accumulates values into a single result.

19. **What is the difference between deep copy and shallow copy?**

    * Shallow copy copies references of nested objects; deep copy copies everything recursively.

20. **What is `NaN` in JavaScript?**

    * `NaN` stands for "Not a Number" and indicates a value that is not a legal number.

21. **What are JavaScript modules?**

    * Modules allow code to be divided into reusable pieces and loaded via `import`/`export`.

22. **What is an IIFE (Immediately Invoked Function Expression)?**

    * An IIFE is a function that runs as soon as it is defined.

23. **What is a pure function?**

    * A pure function always returns the same output for the same input and has no side effects.

24. **What is debouncing?**

    * Debouncing delays the execution of a function until after a certain amount of time has passed.

25. **What is throttling?**

    * Throttling ensures a function is only called at most once in a specified time interval.

26. **What is the event loop in JavaScript?**

    * The event loop handles asynchronous callbacks in JavaScript, managing the call stack and message queue.

27. **What is a Symbol in JavaScript?**

    * Symbols are unique and immutable data types used to identify object properties.

28. **What is the difference between `Object.freeze()` and `Object.seal()`?**

    * `freeze()` prevents any changes to an object. `seal()` allows changes to existing properties but prevents adding/removing them.

29. **What is the difference between `call()`, `apply()`, and `bind()`?**

    * `call()` and `apply()` invoke functions immediately; `bind()` returns a new function. `apply()` takes arguments as an array.

30. **What is a generator function?**

    * Generator functions allow pausing and resuming execution using the `function*` syntax and `yield` keyword.

31. **What is the difference between `for...of` and `for...in`?**

    * `for...of` iterates over values of an iterable. `for...in` iterates over enumerable properties of an object.

32. **What is the `typeof` operator?**

    * It returns a string indicating the type of a variable.

33. **What are the falsy values in JavaScript?**

    * `false`, `0`, `""`, `null`, `undefined`, and `NaN` are falsy.

34. **What is the use of `new` keyword?**

    * It creates an instance of an object that has a constructor function.

35. **What is the difference between prototypal and classical inheritance?**

    * Prototypal inheritance is based on objects inheriting from other objects. Classical inheritance uses classes.

36. **What are async/await keywords?**

    * `async/await` simplify working with promises by writing asynchronous code in a synchronous style.

37. **What is the use of `setTimeout` and `setInterval`?**

    * `setTimeout` delays execution of a function. `setInterval` repeatedly calls a function with a fixed delay.

38. **What is memory leak in JavaScript?**

    * Memory that is no longer needed but not released can cause performance issues.

39. **What are service workers?**

    * Service workers run in the background and handle caching, push notifications, and offline experiences.

40. **What is the difference between global and local scope?**

    * Variables in the global scope can be accessed anywhere; local variables are confined to their block or function.

41. **What is the difference between stack and heap?**

    * Stack is used for static memory allocation, and heap is for dynamic memory allocation.

42. **What is tail call optimization?**

    * A feature where the compiler optimizes recursive function calls to avoid stack overflows.

43. **What is optional chaining?**

    * `?.` allows accessing nested properties without throwing an error if an intermediate property is null or undefined.

44. **What is nullish coalescing operator?**

    * `??` returns the right-hand operand when the left is `null` or `undefined`.

45. **What is the difference between immutability and mutability?**

    * Immutable objects cannot be changed after creation; mutable ones can.

46. **What is a WeakMap?**

    * A collection of key-value pairs where keys must be objects and are weakly referenced.

47. **What is JSON and how is it used in JavaScript?**

    * JSON is a format for storing and transporting data, often used in APIs. Parsed with `JSON.parse()` and `JSON.stringify()`.

48. **What is a Polyfill?**

    * Code that implements a feature on web browsers that do not support it natively.

49. **What are the new features of ES6+?**

    * Let/const, arrow functions, template literals, destructuring, promises, classes, modules, async/await, etc.

50. **How do modules work in JavaScript?**

    * Modules allow code to be split into reusable pieces and imported/exported using `import` and `export`.

## Advanced JavaScript (ES6/ES7) Interview Questions with Answers and Examples

51. **What is the difference between `let`, `const`, and `var`?**

* `let` and `const` are block-scoped while `var` is function-scoped. `const` cannot be reassigned.

```js
const x = 10; // cannot reassign x
let y = 5; y = 6;
var z = 1; z = 2;
```

52. **What are template literals in ES6?**

* Template literals allow embedded expressions using backticks.

```js
const name = 'John';
console.log(`Hello, ${name}`);
```

53. **What is destructuring in ES6?**

* Allows unpacking values from arrays or objects.

```js
const [a, b] = [1, 2];
const {name, age} = {name: 'Alice', age: 30};
```

54. **What is the rest operator (`...`)?**

* Collects all remaining elements into a single array.

```js
const [first, ...others] = [1, 2, 3];
```

55. **What is the spread operator (`...`) used for?**

* Spreads elements of an array or object.

```js
const arr = [1, 2];
const newArr = [...arr, 3];
```

56. **What are arrow functions?**

* Shorter function syntax with lexical `this`.

```js
const add = (a, b) => a + b;
```

57. **What is `Object.assign()` used for?**

* Copies properties from source to target object.

```js
const obj = Object.assign({}, {a: 1});
```

58. **What is the difference between `==` and `===`?**

* `===` checks value and type; `==` checks value with type coercion.

59. **What is a Set in ES6?**

* A collection of unique values.

```js
const set = new Set([1, 2, 2]); // Set {1, 2}
```

60. **What is a Map in ES6?**

* A collection of key-value pairs with keys of any type.

```js
const map = new Map();
map.set('a', 1);
```

61. **What are classes in ES6?**

* Syntactic sugar for constructor functions.

```js
class Person {
  constructor(name) {
    this.name = name;
  }
}
```

62. **What is inheritance in ES6 classes?**

* Achieved using `extends` keyword.

```js
class Student extends Person {
  constructor(name, grade) {
    super(name);
    this.grade = grade;
  }
}
```

63. **What is the `super` keyword?**

* Refers to the parent class.

64. **What is the use of `Promise.all()`?**

* Executes multiple promises in parallel.

```js
Promise.all([p1, p2]).then(results => console.log(results));
```

65. **What is async/await?**

* Syntax to handle promises.

```js
async function fetchData() {
  const res = await fetch('url');
  return await res.json();
}
```

66. **What is optional chaining (`?.`) in ES2020?**

* Safely access deeply nested properties.

```js
const name = user?.profile?.name;
```

67. **What is nullish coalescing (`??`) operator?**

* Returns right-hand operand if left is `null` or `undefined`.

```js
const name = input ?? 'Default';
```

68. **How does the `includes()` method work?**

* Checks if array contains an element.

```js
[1, 2, 3].includes(2); // true
```

69. **What are dynamic imports?**

* Imports a module asynchronously.

```js
import('module.js').then(mod => mod.run());
```

70. **What are generators?**
 * Functions that can be paused and resumed.

```js
function* gen() {
  yield 1;
  yield 2;
}
```
