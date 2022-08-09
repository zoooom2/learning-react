import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  let data = people[index];
  const { name, job, image, text } = data;
  console.log(data);

  let randomReview = () => {
    setIndex(() => Math.floor(Math.random() * people.length));
  };

  let handlePrev = () => {
    index > 0 && setIndex((prev) => prev - 1);
  };

  let handleNext = () => {
    index < people.length - 1 && setIndex((next) => next + 1);
  };
  return (
    <section className='review'>
      <div className='img-container'>
        <img src={image} className='person-img' />

        <div className='quote-icon'>
          <FaQuoteRight />
        </div>
      </div>
      <h4 className='author'>{name}</h4>
      <div className='job'>{job}</div>
      <p className='info'>{text}</p>
      <div>
        <button className='prev-btn' onClick={handlePrev}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={handleNext}>
          <FaChevronRight />
        </button>
      </div>

      <button className='random-btn' onClick={randomReview}>
        Surprise Me
      </button>
    </section>
  );
};

export default Review;
