
// 1. List Virtualization or Windowing:

// When dealing with a large number of items in a list, rendering all the items at once can lead to slow performance and consume a significant amount of memory. List virtualization tackles this issue by rendering only a subset of the list items that are currently visible within the viewport, thereby conserving resources. As the user scrolls through the list, the virtualization technique dynamically replaces the rendered items with new ones, keeping the visible portion of the list updated and responsive. It allows you to efficiently render large lists or tabular data by only rendering the visible portion, recycling components as needed, and optimizing scroll performance. A popular library for this in React is react-virtualized.   

// 2. Lazy Loading Images:

// Similar to list virtualization, lazy loading images prevents the creation of unnecessary Dom nodes, thereby boosting performance. Instead of loading all the images on page load, lazy loading allows you to defer or delay the loading of images until they are actually needed or visible to the user. The concept is to initially load a placeholder or a small, low-resolution version of the image (like a thumbnail or blurred placeholder). As the user scrolls or interacts with the page, the actual image is loaded dynamically, replacing the placeholder only when it enters the viewport or is about to become visible. Lazy loading in React can be achieved using libraries like react-lazy-load or by using the Intersection Observer API along with React's useEffect hook for a custom solution.

// 3. Memoization:

// Memoization in React is a technique used to optimize the performance of function components by caching the results of expensive computations or function calls. It's particularly useful when dealing with computationally intensive or frequently called functions that have the same input values, as it helps avoid redundant calculations and improves the overall efficiency of the application. In React, there are three main techniques for memoization:

// React.memo
// Purpose: React.memo is a higher-order component (HOC) used to optimize functional components by preventing unnecessary re-renders.

// How it works: It memoizes the entire component, meaning it caches the rendered output of the component and reuses it if the props haven't changed.

// When to use: Use React.memo when you want to prevent a component from re-rendering if its props remain the same.

// useMemo Hook: A hook that memorizes the result of a function call or an expensive computation. It tells React to remember the result and only recalculate it when its dependency array changes. It caches the result and returns it whenever those input values remain the same.


// 4. Throttling and Debouncing Events:

// These are techniques used to limit the number of times a function or an event handler is invoked, especially for events that fire rapidly and repeatedly (like window.resize, scroll, or input changes).

// Throttling: Ensures that a function is called at a specified interval, preventing it from being executed too frequently. If the function is called multiple times within that interval, only the first invocation is executed, and subsequent invocations are ignored until the interval elapses.
// analogy: restricting rate of function call's like tap water valve

// Debouncing: Ensures that a function is called only after a certain period of inactivity. It delays the function execution until a pause in the event stream occurs (e.g., the user stops typing). If an event occurs again within the delay period, the timer is reset.
// analogy: like toggling bulb repeatedly 

// 5. Code Splitting:

// Code splitting in React is a technique used to split a large JavaScript bundle into smaller, more manageable chunks. This improves performance by loading only the necessary code for a specific part of an application rather than loading the entire bundle upfront. As an application grows, the single JavaScript bundle can become large, leading to slower initial load times. Code splitting allows you to divide this bundle into multiple smaller chunks that can be loaded selectively based on the current needs of your application (e.g., when a user visits a particular page or triggers a specific action).   

// 6. React Fragments:

// React Fragments allow you to group multiple elements together without adding an additional Dom node. When rendering a list of items or a collection of components, you typically need a parent container element. Using a React Fragment (<> and </>) instead of a regular container element like a div avoids adding an extra node to the Dom, leading to a smaller Dom tree and improved performance.

// 7. Web Workers:

// JavaScript is a single-threaded application. While a web page is rendered, it performs various tasks on the main thread. Web Workers provide a way to reduce the execution load on the main thread by allowing you to run scripts in the background on a separate thread. This is particularly useful for computationally intensive tasks, long-running operations, or tasks that might block the main thread, without impacting the user interface responsiveness.

// 8. useTransition Hook:

// The useTransition hook is a React hook that lets you update the state without blocking the UI, thereby increasing the performance of your applications. When multiple state updates occur simultaneously, React typically batches them. However, if one of these updates involves significant computation, it can delay the rendering of other, less computationally intensive updates. useTransition allows you to mark certain state updates as less important (within a "transition"). These updates will be executed in parallel with other state updates, but the rendering of the component will not wait for these less important state updates to complete, maintaining UI responsiveness.   


// Sources and related content

// Optimizing app performance in React is crucial for delivering a smooth user experience. Here are some key strategies to optimize React app performance:

// ------------------------------1. Use React.memo() for Functional Components
// What it does: React.memo is a higher-order component that memoizes the result of a functional component. It prevents unnecessary re-renders when the component's props haven't changed.

// When to use: Use it for components that receive the same props frequently but don't need to re-render.

// Example:

// jsx
// Copy
const MyComponent = React.memo(({ prop1, prop2 }) => {
  return <div>{prop1} {prop2}</div>;
});
// ---------------------------------------------------------2. Use useCallback and useMemo Hooks
// useCallback: Memoizes callback functions to prevent unnecessary re-creations of functions on every render.

// The useCallback hook in React is a performance optimization tool used to memoize callback functions. Its primary purpose is to prevent unnecessary re-renders of child components that receive functions as props.
// How it works:
// Memoization:
// useCallback takes two arguments: a function and a dependency array. It returns a memoized version of the function, meaning it caches the function instance.
// Referential Equality:
// In JavaScript, functions are objects. When a parent component re-renders, any inline functions defined within it are recreated, leading to a new function reference. If this new function reference is passed as a prop to a child component, even if the child's props haven't conceptually changed, React might perceive a change due to the new reference and trigger an unnecessary re-render of the child.
// jsx
// Copy
const handleClick = useCallback(() => {
   fetchResults(item); // debounce or any function
}, []);
// useMemo: Memoizes the result of expensive computations to avoid recalculating on every render.

// jsx
// Copy
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);
// -----------------------------------------------------3. Avoid Inline Functions and Objects in JSX
// Inline functions and objects are re-created on every render, which can cause unnecessary re-renders in child components.

// Solution: Define functions and objects outside the component or use useCallback and useMemo.

//----------------------------------------------------------------------- 4. Lazy Loading with React.lazy() and Suspense
// What it does: React.lazy allows you to load components only when they are needed, reducing the initial bundle size.

// Example:

// jsx
// Copy
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function MyComponent() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </React.Suspense>
  );
}
// ----------------------------------------------------------------------------5. Code Splitting
// Use tools like Webpack to split your code into smaller chunks. This reduces the initial load time of your app.

// Example:

// js
// Copy
import(/* webpackChunkName: "myChunk" */ './MyComponent');
//------------------------------------------------------------------------- 6. Optimize State Management
// Localize State: Keep state as close to where it's needed as possible to avoid unnecessary re-renders.

// Use Context Wisely: Avoid using React Context for frequently updated state, as it can cause re-renders in all consuming components. Instead, use state management libraries like Redux or Zustand.

//---------------------------------------------------------- 7. Virtualize Long Lists
// Use libraries like ------react-window or -------react-virtualized to render only the visible items in a long list.

// Example:

// jsx
// Copy
import { FixedSizeList as List } from 'react-window';

const Row = ({ index, style }) => (
  <div style={style}>Row {index}</div>
);

const MyList = () => (
  <List height={150} itemCount={1000} itemSize={35} width={300}>
    {Row}
  </List>
);
//---------------------------------------------------------------------- 8. Avoid Unnecessary Re-Renders
// Use -------------shouldComponentUpdate in class components or React.memo in functional components to prevent re-renders when props or state haven't changed.

// Use the React DevTools profiler to identify unnecessary re-renders.

//----------------------------------------------------------------------------------------- 9. Optimize Images and Assets
// Compress images and use modern formats like WebP.

// Use lazy loading for images with the loading="lazy" attribute.

// Serve assets via a CDN for faster delivery.

// -----------------------------------------------------------------------------------------10. Use Production Build
// Ensure you're using the production build of React for deployment. React's development build includes warnings and debugging tools that slow down performance.

// How to check:

// bash
// Copy
// npm run build
// 11. Debounce or Throttle Expensive Operations
// Use debouncing or throttling for events like scrolling, resizing, or typing to reduce the number of times expensive operations are executed.

// Example:

// jsx
// Copy
import { debounce } from 'lodash';

const handleSearch = debounce((query) => {
  fetchResults(query);
}, 300);
// ----------------------------------------------------------------------------------------------------12. Optimize useEffect Dependencies
// Ensure the dependency array in useEffect is correctly defined to avoid unnecessary side effects.

// Example:

// jsx
// Copy
useEffect(() => {
  fetchData();
}, [fetchData]); // Ensure fetchData is memoized with useCallback


// 13. Use Web Workers for Heavy Computations
// Offload heavy computations to Web Workers to avoid blocking the main thread.

// Example:

// js
// Copy
const worker = new Worker('worker.js');
worker.postMessage(data);
worker.onmessage = (event) => {
  console.log(event.data);
};


// -----------------------------------------------------------------------------------------
// --------  14. Analyze Bundle Size
// Use tools like Webpack Bundle Analyzer to identify and remove unused code or dependencies.

// Example:


// npm install --save-dev webpack-bundle-analyzer
// 15. Server-Side Rendering (SSR) or Static Site Generation (SSG)
// Use frameworks like Next.js for SSR or SSG to improve performance and SEO.

// Example:

// js
// Copy
export async function getServerSideProps(context) {
  return { props: { data } };
}
// ---------------------------------------------------------------------------
// ---------------  16. Use PureComponent for Class Components
// PureComponent automatically implements shouldComponentUpdate with a shallow prop and state comparison.

// Example:

// jsx
// Copy
class MyComponent extends React.PureComponent {
  render() {
    return <div>{this.props.value}</div>;
  }
}
// ----------------------------------------------------------------------------------------
// -----17. Optimize CSS and Animations
// Use CSS-in-JS libraries like styled-components or emotion for scoped styles.

// Avoid expensive CSS properties like box-shadow or filter in animations.

// Use will-change to hint the browser about upcoming changes.

// -------------------------------------------------------------------- 18. Use Keys in Lists
// Always use unique key props for list items to help React identify which items have changed, been added, or been removed.

// Example:

// jsx
// Copy
{items.map(item => (
  <li key={item.id}>{item.name}</li>
))}
// --------------------------------------------------------------------- 19. Avoid Using Index as Key
// Using the array index as a key can cause issues when the list order changes. Use a unique identifier instead.

// ----------------------------------------------------------- 20. Profile and Monitor Performance
// Use React DevTools and browser performance tools (e.g., Chrome DevTools) to identify bottlenecks.

// Monitor real-user performance using tools like Google Lighthouse or Sentry.

// By applying these techniques, you can significantly improve the performance of your React app and deliver a better user experience.