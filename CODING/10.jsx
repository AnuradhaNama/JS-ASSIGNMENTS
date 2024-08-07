//10. Write a React component that uses React Context for state management.

import React, { createContext, useState, useContext } from 'react';
import ReactDOM from 'react-dom';

// Create a Context for the counter
const CounterContext = createContext();

// Create a custom hook to use the CounterContext
const useCounter = () => useContext(CounterContext);

// Create a provider component
const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

// CounterDisplay Component
const CounterDisplay = () => {
  const { count } = useCounter();

  return <h1>Count: {count}</h1>;
};

// CounterControls Component
const CounterControls = () => {
  const { increment, decrement } = useCounter();

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

// App Component
const App = () => {
  return (
    <CounterProvider>
      <CounterDisplay />
      <CounterControls />
    </CounterProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
