//14. Implement a React component that displays a list of items with filtering and sorting.

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// Sample data
const initialItems = [
  { id: 1, name: 'Apple', category: 'Fruit', price: 1.2 },
  { id: 2, name: 'Banana', category: 'Fruit', price: 0.5 },
  { id: 3, name: 'Carrot', category: 'Vegetable', price: 0.8 },
  { id: 4, name: 'Broccoli', category: 'Vegetable', price: 1.5 },
  { id: 5, name: 'Chicken', category: 'Meat', price: 5.0 },
  { id: 6, name: 'Beef', category: 'Meat', price: 6.0 },
];

const ListWithFilterAndSort = () => {
  const [items, setItems] = useState(initialItems);
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('name');

  // Handle filter change
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  // Handle sort change
  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  // Filter and sort items
  const filteredAndSortedItems = items
    .filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) => {
      if (sort === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sort === 'price') {
        return a.price - b.price;
      }
      return 0;
    });

  return (
    <div>
      <h1>Items List</h1>
      <div>
        <label>
          Filter:
          <input type="text" value={filter} onChange={handleFilterChange} />
        </label>
        <label>
          Sort by:
          <select value={sort} onChange={handleSortChange}>
            <option value="name">Name</option>
            <option value="price">Price</option>
          </select>
        </label>
      </div>
      <ul>
        {filteredAndSortedItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.category} - ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

ReactDOM.render(<ListWithFilterAndSort />, document.getElementById('root'));
