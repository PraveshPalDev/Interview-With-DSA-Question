// learn es6 in js

// 1. rest operator and spread operator

// rest operator
const sum = (number1, number2, number3, ...rest) => {
  console.log(rest); // [4, 5, 234, 345]
  return number1 + number2 + number3;
};

console.log(sum(1, 2, 3, 4, 5, 234, 345)); // 6

// spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3); // [1, 2, 3, 4, 5, 6]

// 2. destructuring assignment
const person = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    state: "NY",
  },
};
const { name, age } = person;
console.log(name); // John

// async await promise callback
// promise
const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received");
    }, 2000);
  });
};

// async await
const fetchData = async () => {
  try {
    const data = await getData();
    console.log(data); // Data received
  } catch (error) {
    console.error(error);
  }
};
fetchData();

//callback
const fetchDataWithCallback = (callback) => {
  setTimeout(() => {
    callback("Data received");
  }, 2000);
};

fetchDataWithCallback((data) => {
  fetchData();
});

// closures
// 1. Example
const closureMethod = (a) => {
  console.log("a", a);
  const b = 2;
  return () => {
    return a + b + c;
  };
};

const storeValue = closureMethod(2);
console.log("storeValue", storeValue(5)); // 9

// 2. Example
const sumMethod = () => {
  return {
    sumTwoDigits: (a, b) => {
      return a + b;
    },
    sumThreeDigits: (a, b, c) => {
      return a + b + c; //lexical scope
    },
  };
};

const store = sumMethod(12, 13, 15);
console.log("call sumTwoDigits", store.sumTwoDigits()); // 25
console.log("call sumThreeDigits", store.sumThreeDigits(1, 2, 3)); // 6

// Apply , call & Bind in js
let person1 = {
  name: "Aman",
  age: 30,
  designation: "developer",
};

let person2 = {
  name: "Ravi",
  age: 25,
  designation: "Software developer",
};

const printDetails = function (city, country) {
  return this.name + " " + city + " " + country;
};

// call
printDetails.call(person1, "Noida", "India"); // Aman Noida India

// apply
printDetails.apply(person2, ["Hello", "World"]); // Ravi Hello World

// bind
const bindMethod = printDetails.bind(person1, "India", "Noida");
console.log(bindMethod()); // Aman India Noida

// map , reduce, filter, forEach, some, every, find, findIndex, sort, slice, splice,

// map
const numbers = [1, 2, 3, 4, 5];
const squareNumbers = numbers.map((number) => number * number);
console.log(squareNumbers); // [1, 4, 9, 16, 25]

// reduce
const sumNumbers = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sumNumbers); // 15

// filter
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // [2, 4]

// forEach
numbers.forEach((number) => {
  console.log(number); // 1 2 3 4 5
});

// some
const hasEvenNumber = numbers.some((number) => number % 2 === 0);
console.log(hasEvenNumber); // true

// every
const allEvenNumbers = numbers.every((number) => number % 2 === 0);
console.log(allEvenNumbers); // false

// find
const firstEvenNumber = numbers.find((number) => number % 2 === 0);
console.log(firstEvenNumber); // 2

// findIndex
const firstEvenNumberIndex = numbers.findIndex((number) => number % 2 === 0);
console.log(firstEvenNumberIndex); // 1

// sort
const unsortedNumbers = [5, 3, 8, 1, 2];
const sortedNumbers = unsortedNumbers.sort((a, b) => a - b);
console.log(sortedNumbers); // [1, 2, 3, 5, 8]

// slice
const slicedArray = numbers.slice(1, 4);
console.log(slicedArray); // [2, 3, 4]

// splice
const splicedArray = numbers.splice(1, 2);
console.log(splicedArray); // [2, 3]
console.log(numbers); // [1, 4, 5]

// not defined and undefined and null and NaN
// undefined
let a;
console.log(a); // undefined

// null
let b = null;
console.log(b); // null

// NaN
let c = "hello" / 2;
console.log(c); // NaN

// not defined
console.log(d); // ReferenceError: d is not defined

//  set, map, weakmap, weakset
// set
// It contains unique values
const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(1); // duplicate value
mySet.add(2); // duplicate value
console.log(mySet); // Set { 1, 2, 3 }
console.log(mySet.has(1)); // true

// map
// It contains key-value pairs
const myMap = new Map();
myMap.set("name", "John");
myMap.set("age", 30);
myMap.set("city", "New York");
console.log(myMap); // Map { 'name' => 'John', 'age' => 30, 'city' => 'New York' }
console.log(myMap.get("name")); // John
console.log(myMap.has("age")); // true
console.log(myMap.size); // 3
console.log(myMap.delete("age")); // true
console.log(myMap.clear()); // undefined

// weakmap
// It contains key-value pairs, but the keys are weakly referenced
const myWeakMap = new WeakMap();
const obj1 = {};
const obj2 = {};
const obj3 = {};
myWeakMap.set(obj1, "value1");
myWeakMap.set(obj2, "value2");
myWeakMap.set(obj3, "value3");
console.log(myWeakMap.get(obj1)); // value1
console.log(myWeakMap.has(obj1)); // true
console.log(myWeakMap.delete(obj1)); // true
console.log(myWeakMap.has(obj1)); // false
console.log(myWeakMap.size); // undefined
console.log(myWeakMap.clear()); // undefined

// weakset
// It contains unique values, but the values are weakly referenced
const myWeakSet = new WeakSet();
const obj4 = {};
const obj5 = {};
const obj6 = {};
myWeakSet.add(obj4);
myWeakSet.add(obj5);
myWeakSet.add(obj6);
console.log(myWeakSet.has(obj4)); // true
console.log(myWeakSet.delete(obj4)); // true
console.log(myWeakSet.has(obj4)); // false
console.log(myWeakSet.size); // undefined
console.log(myWeakSet.clear()); // undefined

// Hoisting
// Hoisting is JavaScripts default behavior of moving declarations to the top of the current scope (script or function) before code execution

// Example 1: Variable Hoisting with var
console.log(x); // undefined
var x = 5;
console.log(x); // 5

// Example 2: Variable Hoisting with let and const
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;
console.log(y); // 10

// Example 3: Function Hoisting
console.log(myFunction()); // Hello, World!

function myFunction() {
  return "Hello, World!";
}

// Currying and Closure
// Currying is a technique in functional programming where a function takes multiple arguments and transforms it into a sequence of functions, each taking a single argument
// Example 1: Simple Currying
const add = (a) => (b) => a + b;
const add5 = add(5);
console.log(add5(10)); // 15

console.log(add(4)(5));

// Example 3: Currying with Default Values
const greet = (greeting) => (name) => `${greeting}, ${name}!`;
const greetHello = greet("Hello");
console.log(greetHello("John")); // Hello, John!

// closure
//  method inside the call another method
function outer() {
  let name = "JS";

  function inner() {
    console.log("Hello " + name); // inner uses variable from outer
  }

  return inner;
}

const method = outer(); // outer() runs, returns inner
method(); // "Hello JS"

// infinite currying
const addCurring = (a) => {
  return (b) => {
    if (b) return addCurring(a + b);
    return a;
  };
};

console.log(addCurring(1)(2)(3)(4)(5)()); // 15

// debounce and throttle
// debounce
function debounce(fn, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}

// Example: call only after user stops typing for 500ms
const onInput = debounce(() => console.log("Search!"), 500);

// throttle
function throttle(fn, limit) {
  let lastCall = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn(...args);
    }
  };
}

// Example: log every 1 sec while scrolling
const onScroll = throttle(() => console.log("Scrolling..."), 1000);

// react native hooks

// 1. useState Adds state to functional components.
// 2. useEffect	Runs side effects after render (like API calls).
// 3. useContext	Accesses context data directly.
// 4. useRef 	Holds mutable value, doesn't trigger re-render.
// 5. useMemo	Memoizes expensive calculations.
// 6. useCallback	Memoizes callback functions
// 7. useReducer	Manages complex state logic.
// 8. useLayoutEffect	Synchronizes DOM updates before browser paint.
// 9. useImperativeHandle	Customizes ref behavior.
// 10. useDebugValue	Displays custom labels in React DevTools.
// 11. useFocusEffect   Focuses on a component when it mounts.

// life cycle method in react native

// Lifecycle Phase | Hook | Use For
// Mount (on start) | useEffect(() => {}, []) | Run once when component mounts
// Update (on change) | useEffect(() => {}, [deps]) | Run when dependencies change
// Unmount (on destroy) | useEffect(() => { return () => {} }, []) | Cleanup before unmount

// slow copy and deep copy

// 1. Shallow Copy

// A shallow copy copies the top-level properties of an object.
// If a property is a reference (like an object or array),
// it copies the reference, not the actual nested object.

const original = {
  name: "John",
  address: {
    city: "New York",
  },
};

const shallowCopy = { ...original };

shallowCopy.name = "Jane"; // OK - does not affect original
shallowCopy.address.city = "Los Angeles"; // 🔴 Affects original too

console.log(original.name); // "John"
console.log(original.address.city); // "Los Angeles" (changed!)

// 2. Deep Copy
//A deep copy creates a copy of the object and all nested objects recursively.
//  The copy is completely independent of the original object.

const DeepCopy2 = {
  name: "John",
  address: {
    city: "New York",
  },
};

// Deep copy using JSON methods (works only with simple objects)
const deepCopy = JSON.parse(JSON.stringify(DeepCopy2));

deepCopy.name = "Jane";
deepCopy.address.city = "Los Angeles"; // ✅ Does NOT affect original

console.log(original.name); // "John"
console.log(original.address.city); // "New York" (unchanged)

// Higher-Order Function
// takes another function as an argument, or
// returns a function as its result.

const greet2 = (name) => `Hello, ${name}`;
const sayGreeting = (fn, name) => fn(name);

console.log(sayGreeting(greet2, "John")); // Output: Hello, John

//  Pure Function
// Always returns the same output for the same input.
const add2 = (a, b) => a + b;
console.log(add2(2, 3)); // Output: 5

// 1. Design pattern in react native

// a. Component-Based Pattern.
// b. Container-Presenter Pattern.
// c. Hooks Pattern (Custom Hooks).
// d. Service Pattern.
// e. Redux or Context for State Management.

// userSlice.js (with Redux Toolkit)
const userSlice = createSlice({
  name: "",
  initialState: { firstName: "" },
  reducer: {
    setName: (state, action) => {
      state.firstName, action.payload;
    },
  },
});

// Usage in component
const name2 = useSelector((state) => state.user.name);
const dispatch = useDispatch();
dispatch(setName("Alice"));

// both are anonymous
// (() => {})();
// function() {
// }

// here arrays method
// 1. JavaScript array methods like push, pop, shift, unshift, with simple theory and example for each
const arr = [12, 12, 232, 23, 234, 454];

// push
let arr12 = [1, 2];
arr.push(3); // [1, 2, 3]

// pop
let arr123 = [1, 2, 3];
arr.pop(); // [1, 2]

// unshift()
let arr1234 = [2, 3];
arr.unshift(1); // [1, 2, 3]

// shift()
let arr11 = [1, 2, 3];
arr.shift(); // [2, 3]

// concat()
let a1 = [1, 2];
let b2 = [3, 4];
let result = a1.concat(b2); // [1, 2, 3, 4]

// slice(start, end)
let arr121212 = [1, 2, 3, 4];
let sliced = arr121212.slice(1, 3); // [2, 3]

// splice(start, deleteCount, ...items)
let arr19 = [1, 2, 3];
arr19.splice(1, 1, 99); // [1, 99, 3]

// reverse()
let arr1232 = [1, 2, 3];
arr1232.reverse(); // [3, 2, 1]

// join(separator)
let join1 = [1, 2, 3];
join1.join("-"); // "1-2-3"

// includes(value)
let include = [1, 2, 3];
include.includes(2); // true

// indexOf(value)
let index = [1, 2, 3];
index.indexOf(2); // 1
