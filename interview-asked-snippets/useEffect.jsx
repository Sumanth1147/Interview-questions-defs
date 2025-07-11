// 1. useEffect(() => { ... }, [])
// Behavior: This runs only once, after the first render of the component.

// Use Case: It mimics componentDidMount in class components.

// Example:

// jsx
// Copy
useEffect(() => {
  console.log('This runs only once, after the first render');
}, []); // Empty dependency array



// 2. useEffect(() => { ... })
// Behavior: This runs after every render of the component, including the first render.

// Use Case: It mimics a combination of componentDidMount and componentDidUpdate in class components.

// Example:

// jsx
// Copy
useEffect(() => {
  console.log('This runs after every render');
}); // No dependency array



// 3. useEffect(() => { ... }, [dependency1, dependency2])
// Behavior: This runs only when the specified dependencies change. It also runs after the first render.

// Use Case: It mimics componentDidUpdate with specific prop or state changes.

// Example:

// jsx
// Copy
useEffect(() => {
  console.log('This runs when "dependency1" or "dependency2" changes');
}, [dependency1, dependency2]); // Dependency array with values



// 4. Cleanup Function in useEffect
// Behavior: If you return a function from useEffect, it will act as a cleanup function. This runs before the component unmounts or before the effect runs again (if dependencies change).

// Use Case: It mimics componentWillUnmount in class components.

// Example:

// jsx
// Copy
useEffect(() => {
  console.log('Effect runs');

  return () => {
    console.log('Cleanup runs before unmount or re-run');
  };
}, [dependency]); // Optional dependency array
// Summary of useEffect Behavior:
// Dependency Array	Behavior
// useEffect(() => { ... }, [])	Runs only once after the first render (like componentDidMount).
// useEffect(() => { ... })	Runs after every render (like componentDidMount + componentDidUpdate).
// useEffect(() => { ... }, [dep1, dep2])	Runs only when dependencies change (like componentDidUpdate with conditions).
// Cleanup Function (return () => { ... })	Runs before unmount or before re-running the effect.
// Practical Example:
// jsx

import React, { useState, useEffect } from 'react';

function MyComponent({ someProp }) {
  const [count, setCount] = useState(0);

  // Runs only once (like componentDidMount)
  useEffect(() => {
    console.log('Component mounted');
    return () => {
      console.log('Component will unmount');
    };
  }, []);

  // Runs after every render (like componentDidUpdate)
  useEffect(() => {
    console.log('Component rendered or re-rendered');
  });

  // Runs only when `someProp` changes (like componentDidUpdate with condition)
  useEffect(() => {
    console.log('someProp changed');
  }, [someProp]);

  // Runs only when `count` changes
  useEffect(() => {
    console.log('count changed');
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
// -----------------------------------------------------  Key Takeaways:
// Empty Dependency Array ([]): Runs once after the first render.

// No Dependency Array: Runs after every render.

// Dependency Array with Values ([dep1, dep2]): Runs only when the specified dependencies change.

// Cleanup Function: Runs before unmount or before re-running the effect.

// By understanding these behaviors, you can effectively replace class component lifecycle methods with useEffect in functional components.