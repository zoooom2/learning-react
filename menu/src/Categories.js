import React from 'react';

const Categories = ({ handleFilter }) => {
  return (
    <>
      <button className='filter-btn' onClick={() => handleFilter('All')}>
        All
      </button>
      <button className='filter-btn' onClick={() => handleFilter('breakfast')}>
        Breakfast
      </button>
      <button className='filter-btn' onClick={() => handleFilter('lunch')}>
        Lunch
      </button>
      <button className='filter-btn' onClick={() => handleFilter('shakes')}>
        Shakes
      </button>
    </>
  );
};

export default Categories;
