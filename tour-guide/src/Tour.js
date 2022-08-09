import React, { useState } from 'react';

const Tour = ({ id, image, info, name, price, handleClick }) => {
  let words = info.split(' ');
  const [wordCount, setWordCount] = useState(30);
  let comment = '';
  for (let i = 0; i < wordCount; i++) {
    comment += ` ${words[i]}`;
  }

  let toggleComments = () => {
    wordCount === 30 ? setWordCount(words.length - 1) : setWordCount(30);
  };

  return (
    <section className='single-tour'>
      <img src={image} alt='' />
      <footer>
        <span className='tour-info'>
          <h4>{name}</h4>
          <div className='tour-price'>${price}</div>
        </span>
        <p>
          <span>
            {comment}
            {wordCount === 30 && '...'}
            <button onClick={toggleComments}>
              {wordCount === 30 ? 'Read More' : 'Read Less'}
            </button>
          </span>
        </p>
        <button className='btn delete-btn' onClick={() => handleClick(id)}>
          Not Interested
        </button>
      </footer>
    </section>
  );
};

export default Tour;
