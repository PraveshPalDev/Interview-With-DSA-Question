
/** * Top 100 React Native Interview Questions with Answers */

// 1. What is React Native?
// React Native is an open-source mobile application framework created by Facebook. It allows developers to use React along with native platform capabilities to build mobile apps for iOS and Android.

// 2. How does React Native differ from React?
// React is a JavaScript library used for building web interfaces, while React Native is used for building mobile applications using native components.

// 3. What are the core components of React Native?
// Core components include View, Text, Image, ScrollView, TextInput, FlatList, SectionList, etc.

// 4. What is the difference between a controlled and uncontrolled component in React Native?
// Controlled components have their input values controlled by React state. Uncontrolled components manage their own state internally.

// 5. How do you style components in React Native?
// Using the StyleSheet.create method or inline styles with JavaScript objects.

// 6. What is JSX?
// JSX stands for JavaScript XML. It allows writing HTML elements in JavaScript and placing them in the DOM without using createElement() or appendChild().

// 7. What is the use of Flexbox in React Native?
// Flexbox is used to layout elements in one dimension (row or column). It simplifies aligning elements within a container.

// 8. How do you handle navigation in React Native?
// By using libraries like React Navigation or React Native Navigation.

// 9. What is the difference between React Navigation and React Native Navigation?
// React Navigation is a JavaScript-based navigation library, while React Native Navigation uses native navigation components.

// 10. What is a bridge in React Native?
// A bridge is used to enable communication between JavaScript and native modules (Objective-C/Java).

// 11. How do you debug a React Native app?
// Using tools like Flipper, React Developer Tools, Chrome DevTools, or by enabling remote debugging.

// 12. What is the difference between props and state?
// Props are used to pass data to components, whereas state is used to manage internal data of a component.

// 13. How do you make an API call in React Native?
// Using fetch API, axios, or other third-party libraries.

// 14. What is the role of the useEffect hook?
// useEffect allows performing side effects like data fetching, subscriptions, or manually changing the DOM in functional components.

// 15. What is the difference between useState and useEffect?
// useState is used to manage component state, useEffect is used to handle side effects.

// 16. How do you handle forms in React Native?
// By using TextInput components and managing state for form fields, or using libraries like Formik.

// 17. What is the difference between FlatList and ScrollView?
// FlatList is optimized for large lists and renders items lazily, while ScrollView renders all items at once.

// 18. How do you optimize performance in React Native?
// Techniques include memoization, avoiding anonymous functions, using FlatList instead of ScrollView, and enabling Hermes.

// 19. What is Hermes?
// Hermes is a JavaScript engine optimized for React Native to improve app performance on Android.

// 20. What are lifecycle methods in React Native?
// Functional components use hooks like useEffect. Class components use lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount.

// 21. How do you handle gestures in React Native?
// Using libraries like react-native-gesture-handler or Animated API for touch interactions.

// 22. What is Redux?
// Redux is a state management library used to manage global state in JavaScript applications including React Native.

// 23. How does Redux work?
// Redux stores state in a single object. State is modified using actions and reducers.

// 24. What is a reducer in Redux?
// A reducer is a pure function that takes the current state and an action, then returns a new state.

// 25. What are middleware in Redux?
// Middleware provides a way to interact with actions before they reach the reducer, useful for logging or asynchronous calls.

// 26. What is React Context?
// React Context is a way to share values like theme or authentication status across the component tree without prop drilling.

// 27. How do you create a custom hook in React Native?
// By writing a function that uses React hooks (useState, useEffect, etc.) and returns values.

// 28. What is the difference between useMemo and useCallback?
// useMemo memoizes a computed value; useCallback memoizes a function.

// 29. What are keys in React Native?
// Keys are used to identify elements in lists to help React optimize rendering.

// 30. How do you handle images in React Native?
// Using the <Image> component, you can load static and network images.

// 31. How do you handle device permissions in React Native?
// Using libraries like react-native-permissions or native modules (AndroidManifest.xml / Info.plist).

// 32. What are controlled and uncontrolled TextInput components?
// Controlled components have value controlled by state; uncontrolled ones use ref and internal state.

// 33. How can you make responsive designs in React Native?
// Use Dimensions API, Flexbox, Platform module, and libraries like react-native-responsive-screen.

// 34. What is the purpose of the SafeAreaView?
// It renders content within the safe area boundaries of a device (especially for notched devices).

// 35. How do you use the Platform module?
// Platform.OS === 'ios' or 'android' can be used to apply platform-specific logic or styles.

// 36. What is the difference between padding and margin?
// Padding is space inside the component border; margin is space outside the component border.

// 37. What is AsyncStorage?
// AsyncStorage is used to store simple key-value data persistently.

// 38. What replaced AsyncStorage in React Native?
// @react-native-async-storage/async-storage is the maintained community module.

// 39. What is useRef?
// useRef is a hook to persist values across renders and access DOM or component instances.

// 40. How do you animate a view in React Native?
// Using Animated API or third-party libraries like react-native-reanimated.

// 41. What is useCallback in React?
// useCallback returns a memoized version of the callback function that only changes if one of the dependencies has changed.

// 42. What is the difference between useCallback and useMemo?
// useCallback memoizes a function, while useMemo memoizes the result of a function.

// 43. How do you clear a TextInput in React Native?
// Use a ref to the TextInput and call .clear() on it.

// 44. How do you debounce a function in React Native?
// Use lodash.debounce or implement a custom debounce using setTimeout and clearTimeout.

// 45. What are lifecycle methods in React class components?
// Common ones include componentDidMount, componentDidUpdate, and componentWillUnmount.

// 46. What is the difference between setState and useState?
// setState is used in class components, useState is the Hook version for functional components.

// 47. What is Context API?
// A way to pass data through the component tree without passing props down manually at every level.

// 48. How do you make API calls in React Native?
// Use fetch, axios, or other HTTP clients typically inside useEffect or lifecycle methods.

// 49. What is the use of ScrollView in React Native?
// ScrollView is a container that allows scrolling through a long list of elements vertically or horizontally.

// 50. What is the difference between ScrollView and FlatList?
// ScrollView renders all elements at once; FlatList renders lazily, making it better for performance with large data sets.

// 51. What is React.memo?
// React.memo is a higher-order component that memoizes the result of a functional component and prevents unnecessary re-renders when props haven’t changed.

// 52. What is the difference between React.memo and useMemo?
// React.memo is used to wrap components, useMemo is used to memoize values or functions within components.

// 53. What are HOCs (Higher-Order Components)?
// HOCs are functions that take a component and return a new component with enhanced functionality.

// 54. What is the use of the KeyboardAvoidingView?
// KeyboardAvoidingView prevents the keyboard from overlapping input fields by adjusting the layout when the keyboard is visible.

// 55. What are the benefits of using TypeScript in React Native?
// Type safety, better autocompletion, early bug detection, and improved developer experience.

// 56. How do you handle offline functionality in React Native?
// Use libraries like Redux Offline, NetInfo for connectivity checks, and AsyncStorage for local caching.

// 57. What is Fast Refresh in React Native?
// Fast Refresh is a feature that reloads only the files that were changed, preserving state and improving development speed.

// 58. What are fragments in React Native?
// Fragments let you group a list of children without adding extra nodes to the DOM (<>...</>).

// 59. What is a Modal in React Native?
// Modal is a component that presents content above an enclosing view, often used for dialogs or popups.

// 60. What is the use of StatusBar in React Native?
// StatusBar component is used to control the app status bar appearance on iOS and Android.

// 61. How do you persist Redux state?
// Using redux-persist to store and rehydrate the state using AsyncStorage.

// 62. What is a thunk in Redux?
// Thunk is a middleware that allows writing action creators that return a function instead of an action.

// 63. How do you handle push notifications in React Native?
// Use libraries like react-native-push-notification or Firebase Cloud Messaging (FCM).

// 64. What is a splash screen and how is it implemented?
// A splash screen is the first screen shown while the app is loading. Implemented via native code or packages like react-native-splash-screen.

// 65. How do you upload images or files in React Native?
// Using FormData with fetch or axios, and libraries like react-native-image-picker for file selection.

// 66. How do you detect the app state (background/foreground)?
// Use AppState API from React Native.

// 67. What are animations APIs available in React Native?
// Animated API, LayoutAnimation, Reanimated, react-native-animatable, etc.

// 68. How do you handle memory leaks in React Native?
// Clean up subscriptions, timers, or async tasks in useEffect cleanup or componentWillUnmount.

// 69. What is the role of Flipper in React Native?
// Flipper is a debugging tool used to inspect Redux state, layout, network, logs, and React DevTools.

// 70. How do you use a web view in React Native?
// By using react-native-webview to embed web content inside your app.

// 71. How do you detect network connectivity in React Native?
// Use the @react-native-community/netinfo library to detect network state and connectivity changes.

// 72. What is the difference between component state and Redux store?
// Component state is local to a component; Redux store holds global state accessible to the entire app.

// 73. How can you improve the performance of FlatList?
// Use keyExtractor, getItemLayout, initialNumToRender, and memoize item components.

// 74. How do you test React Native components?
// Use Jest for unit testing and React Native Testing Library for component testing.

// 75. What is Detox in React Native?
// Detox is an end-to-end testing and automation framework for mobile apps.

// 76. What is the difference between yarn and npm?
// Both are package managers. Yarn generally offers faster installs and deterministic dependency resolution.

// 77. How do you handle global variables in React Native?
// Use React Context, Redux, or global objects (not recommended for scalability).

// 78. What is the role of PropTypes?
// PropTypes allow you to specify type and validation for props passed to a component (used in plain JS projects).

// 79. How do you handle theming in a React Native app?
// Use Context API, libraries like styled-components or react-native-paper with theme support.

// 80. What is the difference between TouchableOpacity and Pressable?
// TouchableOpacity is older and provides fade feedback. Pressable is more flexible and supports multiple gesture states.

// 81. What is the use of useLayoutEffect?
// useLayoutEffect is similar to useEffect but runs synchronously after DOM mutations, useful for measurements and animations.

// 82. What is the difference between navigation.navigate and navigation.push?
// navigate checks if the route exists in the stack and returns to it; push adds a new instance of the screen.

// 83. How do you share code between React and React Native?
// Abstract business logic into shared files and use platform-specific files (.ios.js, .android.js).

// 84. How do you publish a React Native app to the App Store?
// Use Xcode to archive the iOS build and publish through Apple Developer account.

// 85. How do you publish a React Native app to the Play Store?
// Generate a signed APK or AAB using Android Studio and upload to the Play Console.

// 86. What is the difference between local and global state?
// Local state is used in components with useState; global state is managed by Context, Redux, etc., and shared across the app.

// 87. How do you access native modules in React Native?
// Write custom native code and expose it to JS using the NativeModules API.

// 88. What are permissions required for location in React Native?
// android.permission.ACCESS_FINE_LOCATION (Android) and NSLocationWhenInUseUsageDescription (iOS).

// 89. How do you optimize images in React Native?
// Use optimized image sizes, WebP format (Android), FastImage library, and caching strategies.

// 90. What is the Shadow DOM and is it used in React Native?
// Shadow DOM is a web browser feature for encapsulation. React Native does not use it since it's not based on HTML.

// 91. What is a callback function in JavaScript?
// A callback is a function passed into another function as an argument and executed later.

// 92. How do you detect platform (iOS/Android) in React Native?
// Use the Platform module from 'react-native', e.g., Platform.OS === 'ios'.

// 93. What are controlled and uncontrolled components?
// Controlled components have form data controlled by React state, while uncontrolled components store their own state internally.

// 94. What are gestures in React Native?
// Gestures are interactions like tap, swipe, or pinch. Managed using libraries like react-native-gesture-handler.

// 95. What are the key files in a React Native project?
// App.js, index.js, android/, ios/, package.json, babel.config.js, metro.config.js.

// 96. What is Hermes in React Native?
// Hermes is a JavaScript engine optimized for React Native to improve startup time and memory usage.

// 97. What is the difference between imperative and declarative programming in React Native?
// Imperative: How to do things (step-by-step). Declarative: What to do (React components).

// 98. How do you update the app version?
// Update versionCode (Android) and CFBundleShortVersionString (iOS) in native project files.

// 99. What is the use of Metro bundler?
// Metro is the JavaScript bundler for React Native that serves the JavaScript code to the app.

// 100. What’s the difference between a simulator and an emulator?
// Simulator is for iOS (simulates iOS environment), emulator is for Android (emulates hardware and OS).

<!-- give me advance 20 question to react native  -->
// Advanced React Native Interview Questions

// 101. What is JSI (JavaScript Interface) in React Native?
// JSI allows direct interaction between JavaScript and native code, replacing the older bridge system for improved performance.

// 102. What is Fabric architecture in React Native?
// Fabric is a new rendering system that improves UI thread efficiency, uses async rendering, and integrates tightly with JSI.

// 103. What is TurboModules in React Native?
// TurboModules enhance performance by loading native modules only when needed using JSI.

// 104. How do you implement deep linking in React Native?
// Use the Linking API and configure schemes for Android and iOS; libraries like React Navigation support deep linking.

// 105. How does CodePush work in React Native?
// CodePush allows pushing JS bundle updates over-the-air without going through app stores.

// 106. What is the difference between CodePush and OTA updates?
// CodePush is a service for OTA updates specifically for React Native apps, managed by Microsoft App Center.

// 107. How do you optimize bundle size in React Native?
// Use Hermes, remove unused packages, use inline requires, and enable Proguard for Android.

// 108. What are inline requires in React Native?
// A Metro configuration that defers requiring modules until they're used to reduce startup time.

// 109. How do you handle circular dependencies in React Native?
// Refactor code to break the circular reference, or use dynamic imports or dependency injection.

// 110. What is EAS Build in Expo?
// EAS Build is a cloud-based build service from Expo that builds apps for iOS and Android without local setup.

// 111. How do you configure multi-environment builds (dev, staging, prod)?
// Use .env files with react-native-config or custom build schemes and gradle/xcode configurations.

// 112. How do you implement biometric authentication?
// Use react-native-touch-id or react-native-biometrics for fingerprint/Face ID support.

// 113. What is Reanimated 2 and why is it important?
// Reanimated 2 offers performant animations on the UI thread using worklets, improving fluidity and reducing lag.

// 114. What are worklets in Reanimated 2?
// Small JS functions that run directly on the UI thread in Reanimated 2.

// 115. How does Flipper aid in debugging React Native apps?
// Flipper is a desktop app for debugging React Native with plugins for layout, Redux, networking, and performance.

// 116. How do you create a custom native module in React Native?
// Write native code in Java/Kotlin (Android) or Obj-C/Swift (iOS) and register it using NativeModules.

// 117. What are headless JS tasks?
// Background tasks that run when the app is in the background or terminated, typically for long-running operations.

// 118. How can you share logic between React Native and web (React) apps?
// Abstract business logic and hooks into shared packages or libraries used by both environments.

// 119. How do you manage multiple app flavors in React Native?
// Use build variants in Android (via gradle) and schemes in Xcode to manage different app targets.

// 120. How do you reduce app launch time?
// Use Hermes, inline requires, lazy loading, optimize asset size, and minimize startup JS execution.
