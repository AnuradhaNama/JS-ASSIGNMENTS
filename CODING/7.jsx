//7. Write a React component that uses React Hooks to manage state.

import React, { useState } from 'react';

const Counter = () => {
  // Declare a state variable "count" with an initial value of 0
  const [count, setCount] = useState(0);

  // Function to increment the count
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Current count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

export default Counter;
