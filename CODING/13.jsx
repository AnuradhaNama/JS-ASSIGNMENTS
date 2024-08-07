//13. Write a React component that handles errors and exceptions.

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Error Boundary Component
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service here
    console.error('Error caught by Error Boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI when an error is caught
      return <h1>Something went wrong. Please try again later.</h1>;
    }

    return this.props.children;
  }
}

// Example Component that throws an error
const ProblematicComponent = () => {
  throw new Error('This is a simulated error');
  return <div>This will not be rendered</div>;
};

// Main App Component
const App = () => {
  return (
    <ErrorBoundary>
      <h1>React Error Boundary Example</h1>
      <ProblematicComponent />
    </ErrorBoundary>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
