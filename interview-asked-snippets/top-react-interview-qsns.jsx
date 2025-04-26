// 1. What is React.js?
// Description:
// React.js is an open-source JavaScript library for building user interfaces, especially single-page applications, using reusable components. It follows a component-based architecture.

// Code Snippet:

// jsx
import React from 'react';

function App() {
  return <h1>Hello, React!</h1>;
}

// export default App;
// 2. What are the main features of React?
// Description:

// JSX: HTML-like syntax in JavaScript.
// Components: Encapsulation of UI logic and rendering.
// Virtual DOM: Efficient UI updates.
// One-way Data Binding: State flows in a single direction.
// 3. What is the Virtual DOM, and how does it work?
// Description:
// The Virtual DOM is a lightweight copy of the actual DOM. React updates the Virtual DOM, compares it with the previous version, and updates only the changed parts in the real DOM (diffing).

// Code Snippet:

// jsx
function App() {
  const [count, setCount] = React.useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>Count: {count}</button>
  );
}
// 4. What are React components?
// Description:
// React components are building blocks of a React application. They are either functional or class-based.

// Code Snippet:
// Functional:

// jsx
function Greeting() {
  return <h1>Hello, World!</h1>;
}
// Class-based:

// jsx
class Greeting extends React.Component {
  render() {
    return <h1>Hello, World!</h1>;
  }
}
// 5. What are React Hooks?
// Description:
// Hooks are special functions introduced in React 16.8 to use state and other React features in functional components.

// Example:

// jsx
function Counter() {
  const [count, setCount] = React.useState(0);
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
// 6. What is JSX?
// Description:
// JSX stands for JavaScript XML. It allows embedding HTML in JavaScript code.

// Code Snippet:

// jsx
const element = <h1>Welcome to JSX!</h1>;
ReactDOM.render(element, document.getElementById('root'));
// 7. Explain the difference between state and props.
// Description:

// State: Managed within a component. Mutable.
// Props: Passed from parent to child. Immutable.
// Code Snippet:

// jsx
function Child(props) {
  return <h1>Hello, {props.name}</h1>;
}

function Parent() {
  return <Child name="React" />;
}
// 8. What is the significance of keys in React?
// Description:
// Keys help React identify elements in a list and optimize updates.

// Code Snippet:

// jsx
// const list = ['A', 'B', 'C'];
// const items = list.map((item, index) => <li key={index}>{item}</li>);


//---------------------------------------- 9. How do you handle events in React?
// Description:
// React events are similar to native DOM events but use camelCase.

// Code Snippet:

// jsx
// function Button() {
//   function handleClick() {
//     alert('Button clicked!');
//   }
//   return <button onClick={handleClick}>Click Me</button>;
// }
//--------------------------------------------- 10. What are higher-order components (HOCs)?
// Description:
// HOCs are functions that take a component and return an enhanced component.

// Code Snippet:

// jsx
// function withEnhancement(WrappedComponent) {
//   return function Enhanced(props) {
//     return <WrappedComponent {...props} additionalProp="value" />;
//   };
// }
//------------------------------------------ 11. What is the difference between a controlled and uncontrolled component?
// Description:

// Controlled: React controls form data via state.
// Uncontrolled: DOM manages form data.
// Code Snippet:
// Controlled:

// jsx
// function Form() {
//   const [value, setValue] = React.useState('');
//   return <input value={value} onChange={(e) => setValue(e.target.value)} />;
// }
// Uncontrolled:

// jsx
// function Form() {
//   const inputRef = React.useRef();
//   return <input ref={inputRef} />;
// }
// 12. What is Prop Drilling, and how do you avoid it?
// Description:
// Prop drilling is passing props through multiple components. Use Context API or Redux to avoid it.

// Code Snippet:

// jsx
// const ThemeContext = React.createContext();

// function Child() {
//   const theme = React.useContext(ThemeContext);
//   return <p>Theme: {theme}</p>;
// }

// function App() {
//   return (
//     <ThemeContext.Provider value="dark">
//       <Child />
//     </ThemeContext.Provider>
//   );
// }
// 13. Explain Context API.
// Description:
// The Context API provides a way to share values globally without prop drilling.

// Code Snippet:
// (See above.)

// 14. What is Redux?
// Description:
// Redux is a state management library that uses a single store and pure reducer functions.

// Code Snippet:

// jsx
// const initialState = { count: 0 };
// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment': return { count: state.count + 1 };
//     default: return state;
//   }
// }
// 15. What are React Lifecycle Methods?
// Description:
// Class-based components have lifecycle methods:

// Mounting: componentDidMount.
// Updating: componentDidUpdate.
// Unmounting: componentWillUnmount.
// 16. Explain the difference between useEffect and componentDidMount.
// Description:
// useEffect runs in functional components. componentDidMount is used in class components.

// Code Snippet:

// jsx
// React.useEffect(() => {
//   console.log('Mounted');
// }, []);
// 17. What is memoization in React?
// Description:
// Memoization caches values to optimize re-renders.

// Code Snippet:

// jsx
// const memoizedValue = React.useMemo(() => computeExpensiveValue(), [dependency]);
// 18. What is React Router?
// Description:
// React Router handles navigation in React apps.

// Code Snippet:

// jsx
// <Route path="/home" component={Home} />
// 19. How does React handle updates efficiently?
// Description:
// React uses the Virtual DOM and diffing algorithm to update only changed parts of the UI.

// 20. What is lazy loading in React?
// Description:
// Lazy loading loads components asynchronously using React.lazy.

// Code Snippet:

// jsx
// const LazyComponent = React.lazy(() => import('./Component'));



// 21. What is React Fiber?
// Description:
// React Fiber is the new reconciliation engine introduced in React 16 that improves performance, enables asynchronous rendering, and prioritizes rendering tasks.

// 22. How does React handle error boundaries?
// Description:
// Error boundaries are React components that catch JavaScript errors in their child component tree.

// Code Snippet:

// jsx
// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError(error) {
//     return { hasError: true };
//   }

//   render() {
//     if (this.state.hasError) {
//       return <h1>Something went wrong.</h1>;
//     }
//     return this.props.children;
//   }
// }
// 23. What is Concurrent Mode in React?
// Description:
// Concurrent Mode improves responsiveness by rendering components in a non-blocking manner. It's still experimental.

// 24. What are Portals in React?
// Description:
// Portals allow rendering children into a DOM node outside the component hierarchy.

// Code Snippet:

// jsx
// ReactDOM.createPortal(<ChildComponent />, document.getElementById('portal-root'));
// 2. What is the difference between React and React Native?
// Description:
// React is for web applications, while React Native is for building mobile apps using React.

// 26. What is the use of useLayoutEffect?
// Description:
// useLayoutEffect is similar to useEffect, but it runs synchronously after DOM mutations.

// Code Snippet:

// jsx
// React.useLayoutEffect(() => {
//   console.log("Layout Effect");
// }, []);
// 27. What is the difference between useMemo and useCallback?
// Description:

// useMemo memoizes values.
// useCallback memoizes functions.
// Code Snippet:

// jsx
// const memoizedValue = React.useMemo(() => computeExpensiveValue(), [dependency]);
// const memoizedCallback = React.useCallback(() => handleClick(), [dependency]);
// 28. What is the difference between useRef and createRef?
// Description:

// useRef is used in functional components.
// createRef is used in class components.
// Code Snippet:

// jsx
// const ref = React.useRef(null);
// const classRef = React.createRef();
// 29. What are forward refs?
// Description:
// Forward refs allow passing refs to child components.

// Code Snippet:

// jsx
// const Input = React.forwardRef((props, ref) => <input ref={ref} />);
// 30. How does React handle memory management?
// Description:
// React handles memory through garbage collection and efficient component unmounting.

// 31. What is reconciliation in React?
// Description:
// Reconciliation is React’s diffing algorithm that updates the DOM efficiently.

// 32. What is Fragments in React?
// Description:
// Fragments allow returning multiple elements without extra DOM nodes.

// Code Snippet:

// jsx
// <React.Fragment>
//   <h1>Title</h1>
//   <p>Description</p>
// </React.Fragment>
// 33. What are synthetic events in React?
// Description:
// Synthetic events wrap native browser events to provide consistent behavior across browsers.

// 34. What is the purpose of defaultProps in React?
// Description:
// defaultProps provide default values for props in class components.

// Code Snippet:

// jsx
// class Button extends React.Component {
//   static defaultProps = { color: "blue" };
//   render() {
//     return <button style={{ color: this.props.color }}>Click</button>;
//   }
// }
// 35. How do you optimize React performance?
// Description:

// Use React.memo
// Optimize re-renders
// Use Lazy Loading
// 3. What is code splitting in React?
// Description:
// Code splitting loads JavaScript bundles lazily using React.lazy and Suspense.

// 37. What is hydration in React?
// Description:
// Hydration is used in SSR (Server-Side Rendering) to attach event listeners after the initial render.

// 38. What is suspense in React?
// Description:
// Suspense lets components “wait” for something before rendering.

// Code Snippet:

// jsx
// <Suspense fallback={<h1>Loading...</h1>}>
//   <LazyComponent />
// </Suspense>
// 39. What is React Server Components?
// Description:
// A new feature that allows rendering parts of a component tree on the server.

// 40. What are controlled vs. uncontrolled inputs?
// Description:

// Controlled inputs: Managed via state.
// Uncontrolled inputs: Managed by the DOM.
// 41. What are React PropTypes?
// Description:
// PropTypes validate prop types.

// Code Snippet:

// jsx
// import PropTypes from 'prop-types';

// function Button({ label }) {
//   return <button>{label}</button>;
// }

// Button.propTypes = {
//   label: PropTypes.string.isRequired,
// };
// 42. What is React’s strict mode?
// Description:
// Strict Mode highlights potential issues in an application.

// Code Snippet:

// jsx
// <React.StrictMode>
//   <App />
// </React.StrictMode>
// 43. What is the difference between React.PureComponent and React.Component?
// Description:

// PureComponent: Implements shouldComponentUpdate with shallow comparison.
// Component: Always re-renders.
// 44. How does shouldComponentUpdate work?
// Description:
// It controls component re-rendering in class components.

// Code Snippet:

// jsx
// shouldComponentUpdate(nextProps, nextState) {
//   return nextProps.value !== this.props.value;
// }
// 45. What is useImperativeHandle?
// Description:
// It customizes the instance value exposed by ref.

// 46. What are render props?
// Description:
// A technique where a component's function prop is used to determine what to render.

// Code Snippet:

// jsx
// function RenderPropComponent({ render }) {
//   return <div>{render()}</div>;
// }

// <RenderPropComponent render={() => <h1>Hello</h1>} />;
// 4. What is React DevTools?
// Description:
// React DevTools helps inspect React components in the browser.

// 48. What are controlled components in forms?
// Description:
// React controls input values via state.

// 49. What are hooks rules?
// Description:
// Hooks must be called inside the top-level function and only in React components.

// 50. How does React handle asynchronous state updates?
// Description:
// State updates in React are asynchronous and batched.