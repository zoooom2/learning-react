import React from 'react';

function Button({ handleClick }) {
  return (
    <button type='button' onClick={handleClick}>
      Clear All
    </button>
  );
}

export default Button;
