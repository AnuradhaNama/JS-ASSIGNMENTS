//19. Write a React component that implements a tooltip.

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// Tooltip Component
const Tooltip = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div style={tooltipStyles}>
          {text}
        </div>
      )}
    </div>
  );
};

// Inline styles for the tooltip
const tooltipStyles = {
  position: 'absolute',
  bottom: '125%',
  left: '50%',
  transform: 'translateX(-50%)',
  backgroundColor: '#333',
  color: '#fff',
  padding: '5px 10px',
  borderRadius: '4px',
  whiteSpace: 'nowrap',
  zIndex: 1000,
  fontSize: '14px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
};

const App = () => {
  return (
    <div>
      <h1>Tooltip Example</h1>
      <Tooltip text="This is a tooltip">
        <button>Hover over me</button>
      </Tooltip>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
