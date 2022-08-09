import React from 'react';

const Menu = ({ data }) => {
  let mapData = data.map((x) => {
    const { id, title, price, img, desc } = x;
    return (
      <div key={id} className='menu-item'>
        <img src={img} alt='' className='photo' />
        <div className='item-info'>
          <header>
            <h4>{title}</h4>
            <div className='price'>${price}</div>
          </header>
          <p className='item-text'>{desc}</p>
        </div>
      </div>
    );
  });
  return <>{mapData}</>;
};

export default Menu;
