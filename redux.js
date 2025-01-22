//
// 
//  Redux is a state management library commonly used with React to manage the state of your application in a predictable way. It helps you manage the global state of your app, making it easier to share data between components and handle complex state logic.

// 2. Action
// An action is a plain JavaScript object that describes what happened in your app. It is the only way to change the state in Redux.

// 3. Reducer
// A reducer is a pure function that takes the current state and an action, and returns the new state. It decides how the state should change based on the action.

// 4. Dispatch
// To update the state, you dispatch an action to the store. The store then calls the reducer with the current state and the action, and the reducer returns the new state.

// Example Workflow
// A user clicks a button to add a new todo.

// An action (ADD_TODO) is dispatched.

// The reducer receives the action and updates the state.

// The store saves the new state.

// React components connected to the store re-render with the updated state.