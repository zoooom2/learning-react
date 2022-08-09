import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  // const [items, setItems] = useState(data);
  const [index, setIndex] = useState(0);

  // let i = setInterval(() => {
  //   console.log(index);
  //   index < data.length - 1 ? setIndex((prev) => prev + 1) : setIndex(0);
  // }, 5000);
  useEffect(() => {
    let i = setInterval(() => {
      index < data.length - 1 ? setIndex((prev) => prev + 1) : setIndex(0);
    }, 3000);

    return () => clearInterval(i);
  }, [index]);

  let handleClick = (e) => {
    e === 'prev' && index > 0 && setIndex((prev) => prev - 1);
    e === 'next' && index < data.length - 1 && setIndex((next) => next + 1);
  };

  const { id, image, name, title, quote } = data[index];
  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span> Reviews
        </h2>
      </div>
      <article className='section-center'>
        <div>
          <img src={image} alt='' className='person-img' />

          <h4>{name}</h4>
          <div className='title'>{title}</div>
          <div className='text'>{quote}</div>
          <div className='icon'>
            <FaQuoteRight />
          </div>
        </div>

        <button className='prev' onClick={() => handleClick('prev')}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={() => handleClick('next')}>
          <FiChevronRight />
        </button>
      </article>
    </section>
  );
}

export default App;
