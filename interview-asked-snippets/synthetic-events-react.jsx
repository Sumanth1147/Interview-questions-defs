// Synthetic Events

// React event also known as Synthetic event.
// In the realm of React, a synthetic event is a cross-browser wrapper around the browser's native event.
// (Cross-browser compatibility is the ability of a website or application to function across different browsers and versions.)

// React synthetic events offer the same properties and methods as plain JavaScript events but with the added benefit.

// 💡
// They are essentially JavaScript objects that copy the behavior of native events but provide a consistent interface across different browsers including stopPropagation() and preventDefault().

// JavaScript event:
// onchange
// onclick
// onmouseenter
// onmouseover

// React Events:
// onChange
// onClick
// onMouseOver
// onMouseEnter


function handleClick(event) {
  console.log("Event type:", event.type);
}

<button onClick={handleClick}>Click Me</button>;
// 👉 Here, event is a SyntheticEvent.

// Properties of Synthetic Events
// Synthetic events contain the same properties as native browser events, such as:

// event.target → The element that triggered the event
// event.type → Type of event (click, keydown, etc.)
// event.preventDefault() → Stops default behavior
// event.stopPropagation() → Stops event bubbling
// ✅ Example (Prevent Default Form Submission):


function handleSubmit(event) {
  event.preventDefault(); // Prevents form from reloading
  console.log("Form Submitted!");
}

<form onSubmit={handleSubmit}>
  <button type="submit">Submit</button>
</form>
// Event Pooling in Synthetic Events
// React reuses event objects (event pooling) to improve performance.
// After the event callback executes, properties are nullified for reuse.

// 🚨 Problem with Async Code:
// Synthetic Events in React
// 📌 Definition:
// Synthetic events in React are wrapper events around the native browser events, providing cross-browser compatibility and a consistent API.

// 📌 Why Synthetic Events?

// Ensures consistent behavior across different browsers.
// Provides a unified event system (React manages event delegation efficiently).
// Improves performance by using a single event listener at the root instead of multiple listeners.
// How Synthetic Events Work
// In React, event handlers receive a SyntheticEvent instead of the native browser event.

// ✅ Example:


function handleClick(event) {
  console.log("Event type:", event.type);
}

<button onClick={handleClick}>Click Me</button>;
// 👉 Here, event is a SyntheticEvent.

// Properties of Synthetic Events
// Synthetic events contain the same properties as native browser events, such as:

// event.target → The element that triggered the event
// event.type → Type of event (click, keydown, etc.)
// event.preventDefault() → Stops default behavior
// event.stopPropagation() → Stops event bubbling
// ✅ Example (Prevent Default Form Submission):


function handleSubmit(event) {
  event.preventDefault(); // Prevents form from reloading
  console.log("Form Submitted!");
}

<form onSubmit={handleSubmit}>
  <button type="submit">Submit</button>
</form>
// Event Pooling in Synthetic Events
// React reuses event objects (event pooling) to improve performance.
// After the event callback executes, properties are nullified for reuse.

// 🚨 Problem with Async Code:


function handleClick(event) {
  setTimeout(() => console.log(event.type), 1000); // `event` becomes null
}

<button onClick={handleClick}>Click</button>;
// 💡 Solution: Use event.persist().


function handleClick(event) {
  event.persist(); // Prevents event pooling
  setTimeout(() => console.log(event.type), 1000);
}
// Key Takeaways
// ✅ Synthetic Events provide cross-browser compatibility.
// ✅ React delegates events for better performance.
// ✅ Events are pooled to optimize memory usage.
// ✅ Use event.persist() to keep event data in async operations.

function handleClick(event) {
  setTimeout(() => console.log(event.type), 1000); // `event` becomes null
}

<button onClick={handleClick}>Click</button>;
💡 Solution: Use event.persist().


function handleClick(event) {
  event.persist(); // Prevents event pooling
  setTimeout(() => console.log(event.type), 1000);
}
// Key Takeaways
// ✅ Synthetic Events provide cross-browser compatibility.
// ✅ React delegates events for better performance.
// ✅ Events are pooled to optimize memory usage.
// ✅ Use event.persist() to keep event data in async operations.



// 1. Can we return JSX inside another JSX?
// Yes, we can return JSX inside another JSX because JSX is syntactic sugar for React.createElement(). When a component returns JSX, React compiles it into native JavaScript objects.

// ✅ Example:

// jsx
// Copy
// Edit
function Parent() {
  return (
    <div>
      <h1>Welcome</h1>
      <Child />
    </div>
  );
}

function Child() {
  return <p>This is a child component.</p>;
}
// 👉 Here, <Child /> is returning JSX inside the JSX of <Parent />.


// 7. Event Handlers
// Event handlers allow React to respond to user actions like clicks and typing.

// ✅ Example:


<button onClick={() => console.log("Clicked!")}>Click</button>
// 8. Infinite Loops in React
// Caused by incorrect state updates inside useEffect().

// ❌ Bad Example (Infinite loop)


useEffect(() => {
  setCount(count + 1); // Causes re-render every time
}, [count]);
✅ Fix: Use a condition or function update.


useEffect(() => {
  if (count < 5) setCount((prev) => prev + 1);
}, [count]);
9. Arrow Functions
Arrow functions don’t have their own this and are mostly used for callbacks.

✅ Example:


const add = (a, b) => a + b;
// 10. Functional vs Class Components
// Feature	Functional Component	Class Component
// Syntax	Function-based	class keyword
// State	useState() hook	this.state
// Lifecycle	useEffect()	componentDidMount()
// Performance	Faster	Slightly Slower
// ✅ Example Functional Component:


function Example() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Click {count}</button>;
}
// 11. Advantages of React Hooks over Class Components
// Less boilerplate
// Better performance (no class re-rendering issues)
// Easier state & side effects management
// 12. How to Stop Re-rendering a Component?
// Use React.memo() for function components.
// Use shouldComponentUpdate() for class components.
// ✅ Example:


const MemoizedChild = React.memo(Child);
// 13. Threading in JavaScript
// JS is single-threaded with an event loop to handle async tasks.

// 14. Event Loop & Call Stack
// Call Stack: Executes functions synchronously.
// Event Loop: Pushes async tasks (e.g., API calls) back to the stack.
// ✅ Example:


console.log("Start");
setTimeout(() => console.log("Async"), 0);
console.log("End");
// Output: Start → End → Async
// 15. Prop Drilling
// Passing props through multiple components unnecessarily.
// ✅ Solution: Use Context API or Redux.

// 16. Adding Elements to an Array

let arr = [1, 2];
arr = [...arr, 3]; // [1, 2, 3]


// 17. Scopes in JavaScript
// Global Scope
// Function Scope
// Block Scope (let, const)
// 18. Lexical Scoping & Closures
// Closures retain parent function variables.


function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const counter = outer();
counter(); // 1
counter(); // 2
// 19. Hoisting in JavaScript
// Variables & functions are moved to the top before execution.


console.log(a); // undefined
var a = 10;


// -------------------------------20. Rest & Spread Operators
Spread (...) expands arrays/objects.
Rest (...) collects multiple arguments.

const sum = (...nums) => nums.reduce((a, b) => a + b);
console.log(sum(1, 2, 3)); // 6

// 
// --------------------------------------21. HOC (Higher Order Components)
// A function that wraps another component.


const withLogging = (Component) => (props) => {
  console.log("Rendered!");
  return <Component {...props} />;
};
// -----------------------------------------22 & 23. Virtual DOM vs Real DOM
// Virtual DOM: Lightweight copy, updates efficiently.
// Real DOM: Slow direct updates.



// 24. Difference between Pass by Value & Pass by Reference
// Aspect	                       Pass by Value	                                          Pass by Reference
// Definition--	A copy of the value is passed to a function.	                        A reference to the original memory location is passed.
// Data Types--	Primitive types (Number, String, Boolean)                          	Objects (Array, Function, Object)
// Modification Effect-Changes inside the function do not affect the original value.  	Changes inside the function affect the original value.
// ✅ Example (Pass by Value)


let a = 10;
function modify(x) {
  x = 20;
}
modify(a);
console.log(a); // 10 (unchanged)
✅ Example (Pass by Reference)


let obj = { value: 10 };
function modify(ref) {
  ref.value = 20;
}
modify(obj);
console.log(obj.value); // 20 (modified)
// 25. Lifecycle Methods in React
// Lifecycle methods are available only in Class Components.

// Phase	                                   Method                         	Usage
// Mounting	                         constructor()	                  Initialize state, bind methods
//                                   componentDidMount()             	API calls, subscriptions
// Updating                  	shouldComponentUpdate()	                 Optimize performance
//                                  componentDidUpdate()	               Fetch data on prop/state change
// Unmounting	                componentWillUnmount()                	Cleanup (remove listeners, cancel API calls)
// ✅ Example:


class Example extends React.Component {
  componentDidMount() {
    console.log("Component mounted!");
  }
  componentWillUnmount() {
    console.log("Component will unmount!");
  }
  render() {
    return <h1>Hello World</h1>;
  }
}
// 👉 In Functional Components, we use useEffect() for lifecycle behavior.

// 26. Difference Between state and props
// Aspect	                               Props	                                           State
// Mutability	         Immutable (Cannot be changed by component itself)	           Mutable (Component can modify it)
// Usage              	Passed from parent to child                                   	Maintained inside the component
// Access                  	Available to child components                          	Local to the component
// ✅ Example:


function ChildComponent({ message }) {
  return <p>{message}</p>;
}
function Parent() {
  return <ChildComponent message="Hello from Parent!" />;
}
// 👉 Here, message is a prop, passed from Parent to ChildComponent.

// 27. Local Storage, Session Storage & Cookies
// Feature	Local Storage	Session Storage	Cookies
// Data Expiry	Never expires	Expires on tab close	Can have expiry
// Storage Size	5-10MB	5MB	4KB
// Accessibility	Only on same origin	Only on same origin	Sent with HTTP requests
// ✅ Example (LocalStorage)


localStorage.setItem("key", "value");
console.log(localStorage.getItem("key")); // "value"


// 28. async/await vs Promises
// Promises: Handle asynchronous tasks
// async/await: Cleaner syntax for Promises
// ✅ Promise Example


fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => console.log(data));
✅ async/await Example


async function fetchData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);
}
fetchData();
👉 async/await makes asynchronous code easier to read.

// 29. event.preventDefault()
// This prevents the default behavior of an event.

// ✅ Example (Prevent Form Submission)


function handleSubmit(event) {
  event.preventDefault();
  console.log("Form submission stopped!");
}
<form onSubmit={handleSubmit}>
  <button type="submit">Submit</button>
</form>
// 👉 Here, preventDefault() stops the form from reloading the page.

// 30. Redux (State Management)
// Redux is used for global state management in React applications.

// 📌 Core Concepts:

// Store: Holds global state
// Actions: Describe events (e.g., "ADD_TODO")
// Reducers: Update the state based on actions
// Dispatch: Sends actions to reducers
// ✅ Example:


const initialState = { count: 0 };

function reducer(state = initialState, action) {
  if (action.type === "INCREMENT") {
    return { count: state.count + 1 };
  }
  return state;
}

const store = createStore(reducer);
store.dispatch({ type: "INCREMENT" });
console.log(store.getState().count); // 1
// 👉 Redux is useful for large applications where multiple components need access to shared state.

// 31. Testing Frameworks for React
// Common frameworks:
// ✅ Jest (Unit testing)
// ✅ React Testing Library (Component rendering & interaction)
// ✅ Cypress (End-to-end testing)

// ✅ Example (Jest Test for a React Component)


import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Hello World", () => {
  render(<App />);
  expect(screen.getByText("Hello World")).toBeInTheDocument();
});
// 32. Web Accessibility in React
// Web Accessibility (A11Y) ensures websites are usable by people with disabilities.

// ✅ Best Practices:

// Use semantic HTML (<button>, <label>)
// Add ARIA attributes (aria-label, role)
// Use keyboard navigable components
// Provide alternative text for images
// ✅ Example:


<button aria-label="Close">X</button>


{/* 33. Is React Client-Side or Server-Side?
📌 React is primarily a Client-Side library, but it can support Server-Side Rendering (SSR) using frameworks like Next.js. */}

{/* Rendering Type	Description
Client-Side Rendering (CSR)	React updates UI in browser
Server-Side Rendering (SSR)	HTML is generated on the server before loading
Static Site Generation (SSG)	Pre-built pages for faster performance
✅ Example (Next.js SSR Page) */}


export async function getServerSideProps() {
  const res = await fetch("https://api.example.com/data");
  const data = await res.json();
  return { props: { data } };
}
{/* 👉 SSR improves SEO & initial load speed. */}