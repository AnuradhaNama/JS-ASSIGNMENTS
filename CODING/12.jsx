//12. Create a React component that uses React Suspense for lazy loading

import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';

// Lazy load the component

// Fallback component to show while the lazy component is loading
const Loading = () => <div>Loading...</div>;

const App = () => {
  return (
    <div>
      <h1>React Suspense and Lazy Loading</h1>
      <Suspense fallback={<Loading />}>
        (lazy(() = import('./LazyComponent'))) /
      </Suspense>
    </div>
  );
};

// Example of a lazily loaded component
function LazyComponent() {
    return (
        <div>
            <h2>This is a lazily loaded component!</h2>
        </div>
    );
}

export default App;

// Simulate the LazyComponent file for the example
const LazyComponent = () => (
  <div>
    <h2>This is the lazy loaded component!</h2>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
