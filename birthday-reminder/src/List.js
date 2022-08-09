import React from 'react';

const List = ({ image, name, age }) => {
  return (
    <div className='person'>
      <img src={image} alt='' />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </div>
  );
};

export default List;
