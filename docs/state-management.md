## 📊 State Management with Context API

Efficient state management is crucial for optimizing the performance and maintainability of your application. Instead of relying on a single global state, categorizing state based on its usage ensures modularity, which helps in reducing unnecessary re-renders and improving performance.

In this project, we use the **React Context API** for state management, which allows state to be shared efficiently across components. This ensures that only the relevant components are re-rendered when the state changes, leading to better performance.

### Key Concepts

- **Custom Hook**: The custom hook `useCounter` `CounterContext` provides components with easy access to the shared state and actions, offering a clean API for interacting with the state.

### Code Implementation
[Check out the code here](../src/context/CounterContext.tsx)
[Check out the code here](../src/hooks/useCounter.ts)
