//16. Write a React component that implements a carousel.

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.css'; // You can also include the styles in the same file, see below

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div style={carouselStyles.container}>
      <button style={carouselStyles.button} onClick={handlePrev}>
        &#10094;
      </button>
      <div style={carouselStyles.content}>
        <img src={items[currentIndex]} alt={`Slide ${currentIndex}`} style={carouselStyles.image} />
      </div>
      <button style={carouselStyles.button} onClick={handleNext}>
        &#10095;
      </button>
    </div>
  );
};

const App = () => {
  const images = [
    'https://via.placeholder.com/600x400?text=Slide+1',
    'https://via.placeholder.com/600x400?text=Slide+2',
    'https://via.placeholder.com/600x400?text=Slide+3',
    'https://via.placeholder.com/600x400?text=Slide+4',
  ];

  return (
    <div>
      <h1>Image Carousel</h1>
      <Carousel items={images} />
    </div>
  );
};

// Carousel Styles
const carouselStyles = {
  container: {
    position: 'relative',
    width: '600px',
    margin: 'auto',
    overflow: 'hidden',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '400px',
  },
  image: {
    width: '100%',
    height: 'auto',
  },
  button: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    border: 'none',
    padding: '10px',
    cursor: 'pointer',
    fontSize: '24px',
  },
  prev: {
    left: '10px',
  },
  next: {
    right: '10px',
  },
};

ReactDOM.render(<App />, document.getElementById('root'));
