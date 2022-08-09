import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [data, setData] = useState(items);

  let filterData = (btnName) => {
    btnName !== 'All'
      ? setData(() => items.filter((x) => x.category === btnName))
      : setData(() => items);
  };

  return (
    <div className='menu'>
      <div className='title'>
        <h2>Our Menu</h2>
        <div className='underline'></div>
      </div>
      <div className='btn-container'>
        <Categories handleFilter={filterData} />
      </div>

      <div className='section-center'>
        <Menu data={data} />
      </div>
    </div>
  );
}

export default App;
