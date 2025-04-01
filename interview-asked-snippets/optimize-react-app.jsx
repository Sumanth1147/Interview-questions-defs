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

// jsx
// Copy
const handleClick = useCallback(() => {
  console.log('Clicked');
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
// const LazyComponent = React.lazy(() => import('./LazyComponent'));

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

// ---------------------------------------------------------------------------------------------------10. Use Production Build
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
// -------------------------------------------------------------------------------------------------  14. Analyze Bundle Size
// Use tools like Webpack Bundle Analyzer to identify and remove unused code or dependencies.

// Example:

// bash
// Copy
// npm install --save-dev webpack-bundle-analyzer
// 15. Server-Side Rendering (SSR) or Static Site Generation (SSG)
// Use frameworks like Next.js for SSR or SSG to improve performance and SEO.

// Example:

// js
// Copy
export async function getServerSideProps(context) {
  return { props: { data } };
}
// ------------------------------------------------------------------------------------------  16. Use PureComponent for Class Components
// PureComponent automatically implements shouldComponentUpdate with a shallow prop and state comparison.

// Example:

// jsx
// Copy
class MyComponent extends React.PureComponent {
  render() {
    return <div>{this.props.value}</div>;
  }
}
// ---------------------------------------------------------------------------------------------17. Optimize CSS and Animations
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