//15. Create a React component that uses React Memo for performance optimization.

import React, { useState, memo } from 'react';
import ReactDOM from 'react-dom';

// A memoized component that only re-renders if its props change
const ListItem = memo(({ item }) => {
  console.log('Rendering:', item.name); // For debugging
  return (
    <li>
      {item.name} - {item.category} - ${item.price.toFixed(2)}
    </li>
  );
});

// Main component
const ListWithMemo = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Apple', category: 'Fruit', price: 1.2 },
    { id: 2, name: 'Banana', category: 'Fruit', price: 0.5 },
    { id: 3, name: 'Carrot', category: 'Vegetable', price: 0.8 },
    { id: 4, name: 'Broccoli', category: 'Vegetable', price: 1.5 },
    { id: 5, name: 'Chicken', category: 'Meat', price: 5.0 },
    { id: 6, name: 'Beef', category: 'Meat', price: 6.0 },
  ]);
  const [filter, setFilter] = useState('');

  // Handle filter change
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  // Filter items based on the filter input
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Items List with Memo</h1>
      <label>
        Filter:
        <input type="text" value={filter} onChange={handleFilterChange} />
      </label>
      <ul>
        {filteredItems.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

ReactDOM.render(<ListWithMemo />, document.getElementById('root'));
