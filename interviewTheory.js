// ✅ React Native Interview Preparation - Short Theory with Question in Answer


// Q1. Difference between useState and useReducer?

// a. useState is used for simple state management where the state value is independent and easy to update.
// b. useReducer is used for managing more complex state logic where multiple related values need to be updated together, or where the next state depends on the previous state.




// Q2. Difference between useCallback and useMemo?

// a. useCallback memoizes a function, preventing it from being re-created on every render unless its dependencies change.
// b. useMemo memoizes a computed value, caching the result of a calculation to avoid expensive re-computations.

// const memoizedFunction = useCallback(() => {
//     console.log('Button clicked');
//   }, []);

// const memoizedValue = useMemo(() => {
//     return expensiveCalculation();
//   }, []);

/*
Q3. What is slice and diff between reducer and extraReducers?

A slice is a piece of Redux state along with the reducers and actions that manage it.
It is created using createSlice() in Redux Toolkit, and helps organize state into manageable sections.

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; }, // handled inside reducers
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.value = action.payload.counterValue; // handled from external action
    });
  },
});
*/

/*
Q4. Difference between react-query and redux?
- react-query: Handles server state (data fetching).
- redux: Handles client state (UI, local data).
*/

/*
Q5. How to get methods using ref from child component?
- Use forwardRef and useImperativeHandle.
*/

/*
Q6. Difference between map and forEach?
- map: Returns new array. Can break (with return inside map).
- forEach: No return. Cannot break.
*/

/*
Q7. Difference between some and every?
- some: Returns true if any condition true.
- every: Returns true if all conditions true.
*/

/*
Q8. Difference between filter and map?
- filter: Returns filtered array.
- map: Returns mapped/transformed array.
*/

/*
Q9. How to prevent child component rerendering?
- Use React.memo and conditional rendering.
*/

/*
Q10. How to get PureComponent behavior in functional components?
- Use React.memo.
*/

/*
Q11. What are Promises?
- Promises handle async operations. States: pending, fulfilled, rejected.
*/

/*
Q12. How to block a line using async/await?
- await blocks code execution until Promise resolves.
*/

/*
Q13. Recurring (Recursion)?
- Function calling itself.
*/

/*
Q14. Promise States?
- Pending, Fulfilled, Rejected.
*/

/*
Q15. How to execute parallel tasks?
- Use Promise.all, Promise.allSettled.
*/

/*
Q16. Debouncing vs Throttling?
- Debouncing: Delay execution until inactivity.
- Throttling: Limit execution to once in a set time.
*/

/*
Q17. No repeating characters in a string?
- Use Set or check each character manually.
*/

/*
Q18. Hoisting?
- JS moves declarations to the top.
*/

/*
Q19. Currying?
- Transform a function with multiple arguments into nested functions.
*/

/*
Q20. Closures?
- Function remembers variables from its lexical scope.
*/

/*
Q21. App States?
- Foreground, Background, Inactive, Killed.
*/

/*
Q22. Optimization techniques of apps?
- Memoization, Lazy loading, Code splitting, Caching.
*/

/*
Q23. State Management?
- Context API, Redux, MobX, Zustand.
*/

/*
Q24. How to keep app alive after killing?
- Use background services, push notifications.
*/

/*
Q25. Scopes in JavaScript?
- Block Scope, Function Scope, Global Scope.
*/

/*
Q26. Pass by reference vs pass by value?
- Primitive types: by value.
- Objects/Arrays: by reference.
*/

/*
Q27. HOC (Higher Order Component)?
- Function that takes a component and returns a new component.
*/

/*
Q28. Primitive vs Non-Primitive?
- Primitive: string, number, boolean, null, undefined, symbol.
- Non-Primitive: objects, arrays, functions.
*/

/*
Q29. Authentication vs Authorization?
- Authentication: Who are you.
- Authorization: What access do you have.
*/

/*
Q30. Push notifications process?
- App server -> Push service -> Device.
*/

/*
Q31. Callbacks?
- Function passed to another function to be executed later.
*/

/*
Q32. Threads in React Native?
- JS Thread, Native Thread, Shadow Thread.
- JS handles UI logic, Native handles OS level.
*/

/*
Q33. Deep Linking?
- Open app screen via URL link.
*/

/*
Q34. Consecutive repeating words (like 2A, 5C)?
- Use loop to count and compress string.
*/

/*
Q35. Difference find and filter?
- find: Returns first matching element.
- filter: Returns all matching elements as array.
*/

/*
Q36. Async/Await?
- Simplifies Promises with try/catch.
*/

/*
Q37. Slice vs Splice?
- slice: Returns a shallow copy.
- splice: Changes original array.
*/

/*
Q38. Shallow copy vs Deep copy?
- Shallow: Copy references.
- Deep: Copy all nested objects too.
*/

/*
Q39. Difference between type and interface (TS)?
- type: Union types, primitives.
- interface: Objects, extendable.
*/

/*
Q40. Throttle vs Debounce?
- Throttle: Limit execution rate.
- Debounce: Delay until no events.
*/

/*
Q41. useFocusEffect vs useEffect?
- useFocusEffect: Runs when screen focused (React Navigation).
- useEffect: Runs on mount/update/unmount.
*/

/*
Q42. What is service worker in React Native?
- No service workers. (Web concept only.) Use Background tasks instead.
*/

/*
Q43. InteractionManager?
- Schedules long-running work after animations & interactions.
*/

/*
Q44. SQLite usage?
- Local database for offline storage.
- Run SQL queries from app.
*/

/*
Q45. Redux usage?
- Centralized state management.
- Predictable state container.
*/

/*
Q46. Redux-Saga?
- Middleware to handle side effects (async tasks) in Redux.
- Uses generators (function*).
*/

/*
Q47. API Inspector tools?
- Postman, Thunder Client (VS Code extension), Charles Proxy.
- Debug API calls, inspect network traffic.
*/

/*
Q48. What is API mocking?
- Create fake API responses for development/testing.
- Tools: MSW (Mock Service Worker), MirageJS.
*/

/*
Q49. Difference between dispatch and getState?
- dispatch: Send an action to Redux store.
- getState: Access current store state.
*/

/*
Q50. Redux Toolkit features?
- Simplifies store setup.
- Creates slices automatically.
- Includes createAsyncThunk for async.
*/

/*
Q51. Purpose of immer in Redux Toolkit?
- Write "mutating" code but keeps immutability under the hood.
*/

/*
Q52. Redux persist?
- Save Redux store data into storage (localStorage, AsyncStorage).
- Rehydrate on app restart.
*/


/*
Q53. React Native Navigation Types?
- Stack, Bottom Tab, Drawer, Material Top Tab.
*/

/*
Q54. useNavigation vs navigation prop?
- useNavigation: Hook to access navigation.
- navigation prop: Passed automatically to screens.
*/

/*
Q55. Difference between push and navigate?
- navigate: Goes to screen (replaces if already exists).
- push: Always adds a new instance on top of stack.
*/

/*
Q56. Axios vs Fetch?
- Axios: Automatic JSON transform, interceptors, better error handling.
- Fetch: Native API, needs manual parsing.
*/

/*
Q57. WebSocket vs HTTP?
- WebSocket: Bi-directional, real-time connection.
- HTTP: Request/Response based.
*/

/*
Q58. Error Boundaries?
- Catch JavaScript errors in components. (Class components only)
- Use componentDidCatch, getDerivedStateFromError.
*/

/*
Q59. FlatList vs ScrollView?
- FlatList: Renders only visible items (better performance).
- ScrollView: Renders all items at once (bad for large lists).
*/

/*
Q60. Why use KeyExtractor in FlatList?
- To uniquely identify each item and improve re-render performance.
*/

/*
Q61. Lazy loading components?
- Dynamically import components when needed.
- Reduces initial bundle size.
*/

/*
Q62. Code Splitting?
- Split app into smaller bundles to load parts on demand.
*/

/*
Q63. React Native Debugging Tools?
- Flipper, Chrome DevTools, React DevTools.
*/

/*
Q64. Metro Bundler role?
- Bundles JavaScript code for React Native apps.
*/

/*
Q65. What is Fast Refresh?
- Instant feedback for UI changes without losing state.
*/

/*
Q66. Why use Background Fetch?
- Schedule background tasks (sync, notifications).
*/

/*
Q67. Difference between Android build types?
- Debug: Dev mode with logging, no optimization.
- Release: Optimized for production.
*/

/*
Q68. Permissions in React Native?
- Request and check runtime permissions for Camera, Location, etc.
- Use react-native-permissions.
*/

/*
Q69. Caching data strategies?
- In-memory (Context, Redux).
- Persistent (AsyncStorage, SQLite).
- SWR/react-query cache.
*/

/*
Q70. Testing Libraries for React Native?
- Jest (unit testing)
- React Native Testing Library (component testing)
- Detox (E2E testing)
*/

/*
Q71. Native Modules?
- Write platform-specific code (Java/Kotlin/Obj-C/Swift) and link with JS.
*/

/*
Q72. How to optimize React Native App?
- Avoid anonymous functions in render.
- Use memoization.
- Avoid heavy operations on main thread.
- Optimize images and assets.
*/

/*
Q73. E2E Testing vs Unit Testing?
- Unit: Test small parts (functions, components).
- E2E: Test user flows (entire app behavior).
*/

/*
Q74. What is reanimated library?
- High-performance animations.
- Runs animations on native thread (no JS lag).
*/

/*
Q75. What is Gesture Handler?
- Advanced touch gesture system.
- Better than React Native’s default touchable.
*/

/*
Q76. Common performance bottlenecks in RN?
- Too many re-renders.
- Heavy computation on JS thread.
- Large images.
- Improper FlatList usage.
*/

/*
Q77. Best practices to handle API errors?
- Use try/catch.
- Retry mechanism.
- Global error boundary/logging.
*/

/*
Q78. Crashlytics integration?
- Collect and monitor real-time crash reports.
- Firebase Crashlytics.
*/

/*
Q79. How to structure a large-scale React Native app?
- folders: components/, screens/, services/, hooks/, store/, utils/, constants/
*/

/*
Q80. Service Layer usage?
- Central place to manage APIs.
- Improves code separation and maintenance.
*/
