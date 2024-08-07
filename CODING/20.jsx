//20. Implement a React component that displays a list of items with virtualization.

import React from 'react';
import ReactDOM from 'react-dom';
import { FixedSizeList as List } from 'react-window';

// Sample data
const items = Array.from({ length: 1000 }, (_, index) => `Item ${index + 1}`);

// Row component to render each item
const Row = ({ index, style }) => (
  <div style={style} className="list-item">
    {items[index]}
  </div>
);

const App = () => {
  return (
    <div>
      <h1>Virtualized List</h1>
      <List
        height={400}      // Height of the visible area
        itemCount={items.length}  // Total number of items
        itemSize={35}     // Height of each item
        width={300}       // Width of the visible area
      >
        {Row}
      </List>
    </div>
  );
};

// Styling for the list items
const styles = {
  '.list-item': {
    borderBottom: '1px solid #ddd',
    padding: '8px',
    boxSizing: 'border-box',
  },
};

// Inject styles into the document
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = Object.entries(styles).map(([selector, style]) =>
  `${selector} { ${Object.entries(style).map(([prop, value]) => `${prop}: ${value}`).join('; ')} }`
).join('\n');
document.head.appendChild(styleSheet);

ReactDOM.render(<App />, document.getElementById('root'));
