# Redux vs Context API: Complete Guide

## Table of Contents
1. [Redux](#redux)
2. [Context API](#context-api)
3. [Comparison](#comparison)
4. [When to Use Which](#when-to-use-which)
5. [Best Practices](#best-practices)

---

## Redux

### Overview
Redux is a state management library commonly used with React to manage the state of your application in a predictable way. It helps you manage the global state of your app, making it easier to share data between components and handle complex state logic.

### Core Concepts

#### 1. Store
The store is the central place where the entire state of your application is stored. It holds the global state as a single JavaScript object. You can think of it as a "database" for your app's state.

- Created using the `createStore` function (or `configureStore` in modern Redux)
- Access state using `store.getState()`
- Update state by dispatching actions

#### 2. Action
An action is a plain JavaScript object that describes what happened in your app. It is the **only way to change the state in Redux**.

**Requirements:**
- Must have a `type` property (a string) describing the action
- Can have additional data called the `payload`

**Example:**
```javascript
{
  type: "ADD_TODO",
  payload: {
    text: "Learn Redux",
    id: 1
  }
}
```

**Action Creator (Function that returns an action):**
```javascript
const addTodo = (text) => {
  return {
    type: "ADD_TODO",
    payload: {
      text: text,
      id: Date.now()
    }
  };
};
```

#### 3. Reducer
A reducer is a **pure function** that takes the current state and an action, and returns the new state. It decides how the state should change based on the action.

**Rules:**
- Must be a pure function (no side effects)
- Should NOT modify the existing state directly
- Must return a new state object

**Example:**
```javascript
const initialState = {
  todos: []
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    default:
      return state;
  }
};
```

#### 4. Dispatch
To update the state, you dispatch an action to the store. The store then calls the reducer with the current state and the action, and the reducer returns the new state.

**Example:**
```javascript
store.dispatch(addTodo("Learn Redux"));
```

### Redux Workflow

```
User Action → Dispatch Action → Reducer → New State → Store Updates → Components Re-render
```

1. A user clicks a button to add a new todo
2. An action (ADD_TODO) is dispatched
3. The reducer receives the action and updates the state
4. The store saves the new state
5. React components connected to the store re-render with the updated state

### Modern Redux (Redux Toolkit)

Modern Redux uses **Redux Toolkit** to simplify the process. It provides utilities like `createSlice` to automatically generate actions and reducers, and `configureStore` to set up the store.

**Complete Redux Toolkit Example:**
```javascript
import { createSlice, configureStore } from '@reduxjs/toolkit';

// Create a slice
const todoSlice = createSlice({
  name: 'todos',
  initialState: { 
    todos: [] 
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    }
  }
});

// Create store
const store = configureStore({
  reducer: {
    todos: todoSlice.reducer
  }
});

// Export actions
export const { addTodo, deleteTodo } = todoSlice.actions;
export default store;
```

**Using Redux in Components:**
```javascript
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo } from './store';

function TodoApp() {
  const todos = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (text) => {
    dispatch(addTodo({ text, id: Date.now() }));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id}>
          {todo.text}
          <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TodoApp;
```

### Key Redux Keywords
- **Store**: `configureStore`, `createSlice`, `counterSlice`
- **Slice**: `createSlice`, `reducers`, `initialState`
- **Main Setup**: `Provider`, `store` (in index.js)
- **Components**: `useSelector`, `useDispatch`, `dispatch()`

### Why Use Redux?
- **Centralized State**: All your app's state is in one place
- **Predictable State Changes**: Reducers ensure state changes are predictable and traceable
- **Easier Debugging**: Tools like Redux DevTools let you track every action and state change
- **Scalability**: Works well for large applications with complex state logic
- **Time-Travel Debugging**: Can rewind and replay actions

---

## Context API

### Overview
Context API is a **built-in React feature** (no external library needed) that provides a way to pass data through the component tree without having to pass props down manually at every level. It's simpler than Redux and is suitable for smaller applications or localized state management.

### Core Concepts

#### 1. Creating a Context
```javascript
import React, { createContext } from 'react';

// Create the context
export const TodoContext = createContext();
```

#### 2. Provider Component
The Provider component wraps your application and provides the context value to all child components.

```javascript
import React, { useState } from 'react';
import { TodoContext } from './TodoContext';

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const value = {
    todos,
    addTodo,
    deleteTodo
  };

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
}
```

#### 3. Consuming Context with useContext Hook
```javascript
import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';

function TodoApp() {
  const { todos, addTodo, deleteTodo } = useContext(TodoContext);

  const handleAddTodo = () => {
    addTodo("New Todo");
  };

  return (
    <div>
      <button onClick={handleAddTodo}>Add Todo</button>
      {todos.map(todo => (
        <div key={todo.id}>
          {todo.text}
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TodoApp;
```

#### 4. Setup in Main App
```javascript
import React from 'react';
import { TodoProvider } from './TodoProvider';
import TodoApp from './TodoApp';

function App() {
  return (
    <TodoProvider>
      <TodoApp />
    </TodoProvider>
  );
}

export default App;
```

### Context API Syntax Summary
```javascript
// 1. Create Context
const MyContext = createContext(defaultValue);

// 2. Create Provider
function MyProvider({ children }) {
  const [state, setState] = useState(initialValue);
  
  const value = { state, setState, /* other methods */ };
  
  return (
    <MyContext.Provider value={value}>
      {children}
    </MyContext.Provider>
  );
}

// 3. Consume Context
function MyComponent() {
  const { state, setState } = useContext(MyContext);
  return <div>{state}</div>;
}
```

### Reducing Re-renders (Best Practice)
```javascript
import React, { createContext, useState, useCallback, useMemo } from 'react';

export const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);

  const addTodo = useCallback((text) => {
    setTodos(prev => [...prev, { id: Date.now(), text }]);
  }, []);

  const deleteTodo = useCallback((id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }, []);

  // Memoize the value to prevent unnecessary re-renders
  const value = useMemo(() => ({
    todos,
    addTodo,
    deleteTodo
  }), [todos, addTodo, deleteTodo]);

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
}
```

### Custom Hook for Context
```javascript
import { useContext } from 'react';
import { TodoContext } from './TodoContext';

export function useTodo() {
  const context = useContext(TodoContext);
  
  if (!context) {
    throw new Error('useTodo must be used within TodoProvider');
  }
  
  return context;
}

// Usage in component
function TodoApp() {
  const { todos, addTodo, deleteTodo } = useTodo();
  
  return (
    // component code
  );
}
```

---

## Comparison

| Feature | Redux | Context API |
|---------|-------|-------------|
| **Library/Built-in** | External Library | Built-in React feature |
| **Setup Complexity** | More boilerplate code | Simple and straightforward |
| **Learning Curve** | Steep | Gentle |
| **Performance** | Optimized for large apps | Can cause re-renders of all consumers |
| **DevTools** | Redux DevTools available | No built-in DevTools |
| **Scalability** | Excellent for large apps | Good for small to medium apps |
| **Code Reusability** | Actions/reducers are reusable | Logic mixed with provider |
| **Middleware Support** | Yes (custom middleware) | No |
| **State Immutability** | Enforced | Not enforced |
| **Testing** | Easier to test (pure functions) | Requires more setup |
| **Bundle Size** | Adds ~5-10KB | 0KB (built-in) |
| **When to Use** | Complex apps, many components | Simple apps, limited state |
| **Community** | Large, mature, well-documented | Good documentation |
| **Time to Implement** | Longer initial setup | Faster to implement |

### Performance Comparison

**Redux:**
- Uses selectors to optimize re-renders
- Only components that need specific slices re-render
- Better for apps with frequent state updates

**Context API:**
- All consumers re-render when context value changes
- Can be optimized using `useMemo` and splitting contexts
- Better for apps with infrequent updates

```javascript
// Context Re-render Example
function Parent() {
  const [count, setCount] = useState(0);
  
  // Every time count changes, all consumers of this context re-render
  return (
    <CountContext.Provider value={count}>
      <Child1 />  {/* Re-renders */}
      <Child2 />  {/* Re-renders */}
      <Child3 />  {/* Re-renders */}
    </CountContext.Provider>
  );
}

// Redux Re-render Example
function Child1() {
  const value1 = useSelector(state => state.slice1); // Only if slice1 changes
  return <div>{value1}</div>;
}

function Child2() {
  const value2 = useSelector(state => state.slice2); // Only if slice2 changes
  return <div>{value2}</div>;
}
```

---

## When to Use Which

### Use Redux When:
✅ Building **large-scale applications** with complex state management
✅ Multiple components need the **same state at different nesting levels**
✅ Need **debugging tools and time-travel debugging**
✅ Application has **frequent state changes**
✅ Team prefers **structured state management**
✅ Need **middleware support** for async actions
✅ Want **enforced immutability** and predictability
✅ Building **production applications** with many developers

**Example Project:**
- E-commerce app with cart, user auth, filters, notifications
- Social media app with feed, messages, notifications, profile
- Dashboard with real-time data updates

### Use Context API When:
✅ Building **small to medium-sized applications**
✅ Need to pass data through **a few levels of nesting**
✅ State is **not frequently updated**
✅ Want to **avoid external dependencies**
✅ Need **quick prototyping or MVP**
✅ Managing **theme, language, user preferences**
✅ **Limited team size** or learning purposes
✅ Building **low-complexity projects**

**Example Project:**
- Blog with theme switching (dark/light mode)
- Simple todo app
- App with user authentication display
- Portfolio website with multiple pages

### Hybrid Approach:
```javascript
// Use Context for theme/auth
// Use Redux for complex app state

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <ReduxProvider store={store}>
          <MainApp />
        </ReduxProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}
```

---

## Decision Tree

```
Start Here
    |
    v
Is the app small or medium-sized?
    |
    +-- YES --> Is state relatively simple?
    |              |
    |              +-- YES --> Use Context API ✓
    |              +-- NO --> Use Redux ✓
    |
    +-- NO --> Large-scale app?
                   |
                   +-- YES --> Need time-travel debugging?
                   |              |
                   |              +-- YES --> Use Redux ✓
                   |              +-- NO --> Use Redux (still recommended) ✓
                   |
                   +-- NO --> Can't decide?
                              Use Redux (safer choice for scalability) ✓
```

---

## Best Practices

### Redux Best Practices
1. **Keep state normalized** - Avoid deeply nested state
2. **Use Redux Toolkit** - Modern way to write Redux
3. **Separate concerns** - Keep selectors, reducers, and actions organized
4. **Use middleware** for async operations (thunk, saga)
5. **Write pure reducers** - No side effects
6. **Use Redux DevTools** for debugging
7. **Write selectors** to optimize component rendering

### Context API Best Practices
1. **Split contexts** by feature/concern to reduce re-renders
2. **Use `useMemo`** to memoize context values
3. **Create custom hooks** for consuming contexts
4. **Don't put everything in one context**
5. **Use `useCallback`** for memoized functions in context
6. **Consider performance** with many consumers
7. **Document context structure** clearly

### Common Mistakes to Avoid

**Redux:**
- Mutating state directly in reducers
- Putting too much logic in components instead of reducers
- Not using Redux DevTools during development
- Forgetting to normalize state

**Context API:**
- Creating context inside component (causes re-renders)
- Putting everything in a single context
- Not memoizing context value
- Missing error handling in custom hooks

---

## Real-World Examples

### Redux Example: E-commerce Cart

```javascript
// store/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    total: 0
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
      state.total += action.payload.price;
    },
    removeFromCart: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) {
        state.total -= item.price;
        state.items = state.items.filter(i => i.id !== action.payload);
      }
    }
  }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
```

### Context API Example: Theme Switcher

```javascript
// ThemeContext.js
import React, { createContext, useState, useMemo } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);

  const value = useMemo(() => ({
    isDark,
    toggleTheme,
    theme: isDark ? 'dark' : 'light'
  }), [isDark]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// Usage
function App() {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  
  return (
    <div style={{ background: isDark ? '#333' : '#fff' }}>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
```

---

## Summary

| Aspect | Redux | Context API |
|--------|-------|-------------|
| **Complexity** | Complex but powerful | Simple and intuitive |
| **Scalability** | Excellent | Good for small apps |
| **Performance** | Optimized | Needs optimization |
| **Learning** | Steep curve | Easy to learn |
| **Setup** | More boilerplate | Minimal setup |
| **Best For** | Enterprise apps | Learning, small projects |

**Final Recommendation:**
- Start with **Context API** for learning and small projects
- Move to **Redux** when your app grows in complexity
- Consider **Redux Toolkit** for production applications
- Use both together in hybrid applications for different concerns
