import React, { useRef } from 'react';
import ReactDOM from 'react-dom';

const FocusInput = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus(); // Focus the input element when the button is clicked
    }
  };

  return (
    <div>
      <h1>React Ref Example</h1>
      <input
        ref={inputRef}
        type="text"
        placeholder="Click the button to focus me"
      />
      <button onClick={handleClick}>Focus the input</button>
    </div>
  );
};

ReactDOM.render(<FocusInput />, document.getElementById('root'));
