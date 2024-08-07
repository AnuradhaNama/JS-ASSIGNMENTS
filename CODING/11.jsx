//11. Implement a React component that displays a list of items with infinite scrolling.

import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

// Mock function to simulate fetching data from an API
const fetchItems = (page, limit) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const items = Array.from({ length: limit }, (_, i) => `Item ${page * limit + i + 1}`);
      resolve(items);
    }, 1000);
  });
};

const InfiniteScrollList = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const observer = useRef();

  useEffect(() => {
    loadMoreItems();
  }, []);

  const loadMoreItems = async () => {
    setLoading(true);
    const newItems = await fetchItems(page, 10);
    setItems((prevItems) => [...prevItems, ...newItems]);
    setPage((prevPage) => prevPage + 1);
    setLoading(false);
  };

  const lastItemRef = (node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadMoreItems();
      }
    });
    if (node) observer.current.observe(node);
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => {
          if (index === items.length - 1) {
            return (
              <li ref={lastItemRef} key={index}>
                {item}
              </li>
            );
          } else {
            return <li key={index}>{item}</li>;
          }
        })}
      </ul>
      {loading && <p>Loading...</p>}
    </div>
  );
};

ReactDOM.render(<InfiniteScrollList />, document.getElementById('root'));
