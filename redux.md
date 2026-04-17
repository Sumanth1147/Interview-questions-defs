# Redux - State Management Library

Redux is a state management library commonly used with React to manage the state of your application in a **predictable way**. It helps you manage the global state of your app, making it easier to share data between components and handle complex state logic.

---

## Core Concepts (Remember These 4!)

### 1. **Store** 🏪
The central hub of your entire application's state. Think of it as a **database for your app's data**.

**Key Points:**
- Holds the global state as a single JavaScript object
- Created using `configureStore()` or `createStore()`
- Access state with `store.getState()`
- Update state by dispatching actions

**Analogy:** Store is like a bank vault holding all your app's money (data).

---

### 2. **Action** 📋
A plain JavaScript object that **describes what happened** in your app. It's the **ONLY way** to change the state.

**Key Points:**
- Must have a `type` property (string describing the action)
- Can have additional data called `payload`
- Create with **action creators** (functions that return actions)

**Simple Example:**
```javascript
// Basic action
{
  type: "ADD_TODO",
  payload: {
    text: "Learn Redux",
    id: 1
  }
}

// Action Creator (function that creates actions)
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

**Analogy:** Action is like a customer's request at a bank ("I want to withdraw $100").

---

### 3. **Reducer** ⚙️
A **pure function** that takes the current state and an action, then returns a **new state**. It decides HOW the state should change.

**Rules:**
- ✅ Must be a pure function (no side effects)
- ✅ Should NOT modify the existing state directly
- ✅ Must return a new state object
- ✅ Must have a default/initial state

**Example:**
```javascript
// Initial state
const initialState = {
  todos: []
};

// Reducer function
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,  // Spread current state
        todos: [...state.todos, action.payload]  // Add new todo
      };
    
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    
    default:
      return state;  // Always return state for unknown actions
  }
};
```

**Analogy:** Reducer is like the bank teller who processes your request and updates the vault.

---

### 4. **Dispatch** 🚀
The function that sends (dispatches) an action to the store to trigger a state update.

**How it works:**
1. You call `dispatch(action)`
2. Store calls the reducer with current state + action
3. Reducer returns new state
4. Store updates with the new state
5. All subscribed components re-render

**Example:**
```javascript
// Dispatching an action
store.dispatch(addTodo("Learn Redux"));

// Or with Redux hooks in React
const dispatch = useDispatch();
dispatch(addTodo("Learn Redux"));
```

**Analogy:** Dispatch is like submitting your request form to the bank.

---

## 🔄 Complete Workflow Example

```
User clicks "Add Todo" button
         ↓
Action is dispatched: { type: "ADD_TODO", payload: {...} }
         ↓
Store calls Reducer(currentState, action)
         ↓
Reducer creates new state: {...state, todos: [...todos, newTodo]}
         ↓
Store updates with new state
         ↓
React components re-render with updated data
```

---

## Modern Redux (Redux Toolkit) ⚡

Redux Toolkit simplifies Redux with utilities like `createSlice` and `configureStore`.

**Benefits:**
- Less boilerplate code
- Automatic action creator generation
- Built-in immer (allows "mutating" state syntax)

**Example:**
```javascript
import { createSlice, configureStore } from '@reduxjs/toolkit';

// Create a slice (combines actions + reducer)
const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: []
  },
  reducers: {
    addTodo: (state, action) => {
      // Can "mutate" state directly (immer handles it)
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(
        todo => todo.id !== action.payload
      );
    }
  }
});

// Create store
const store = configureStore({
  reducer: {
    todos: todoSlice.reducer
  }
});

// Export action creators
export const { addTodo, deleteTodo } = todoSlice.actions;
export default store;
```

---

## Using Redux in React Components

```javascript
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo } from './todoSlice';

function TodoComponent() {
  // Get state from store
  const todos = useSelector(state => state.todos.todos);
  
  // Get dispatch function
  const dispatch = useDispatch();

  const handleAdd = (text) => {
    dispatch(addTodo({ text, id: Date.now() }));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
```

---

## Key Hooks in React-Redux

| Hook | Purpose |
|------|---------|
| `useSelector()` | Read state from store |
| `useDispatch()` | Get dispatch function |
| `useCallback()` | Memoize dispatch functions |

---

## File Structure (Redux Toolkit)

```
src/
├── store/
│   ├── index.js           // Configure and export store
│   └── slices/
│       ├── todoSlice.js
│       ├── authSlice.js
│       └── userSlice.js
├── App.jsx
└── main.jsx
```

---

## Why Use Redux?

| Feature | Benefit |
|---------|---------|
| **Centralized State** | All state in one place |
| **Predictable** | State changes are traceable |
| **Debugging** | Redux DevTools shows every action |
| **Scalability** | Great for large applications |

---

## Quick Checklist ✓

- [ ] Create **store** with `configureStore()`
- [ ] Define **actions** and **reducers** with `createSlice()`
- [ ] **Export** action creators
- [ ] Wrap app with `<Provider store={store}>`
- [ ] Use `useSelector()` to read state
- [ ] Use `useDispatch()` to dispatch actions

---

## Remember This Simple Rule

```
Action → Reducer → Store → Component Re-render
(What)  (How)     (Where) (Update UI)
```

Redux makes state management **predictable, debuggable, and scalable**! 🚀
