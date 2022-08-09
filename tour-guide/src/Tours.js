import React, { useState, useEffect } from 'react';
import Tour from './Tour';
const Tours = ({ data }) => {
  const [tourData, setTourData] = useState([]);

  useEffect(() => {
    setTourData(() => data);
  }, [data]);
  console.log(tourData);
  function removeItem(item) {
    setTourData((prev) => {
      return prev.filter((x) => x.id !== item);
    });
  }

  let mapData = tourData.map((x) => {
    return (
      <li key={x.id}>
        <Tour key={x.id} {...x} handleClick={removeItem} />
      </li>
    );
  });
  console.log(mapData.length);
  return (
    <>
      {mapData.length > 0 ? (
        <ul>{mapData}</ul>
      ) : (
        <div className='section'>
          <h2>No Tours Left</h2>
          <button className='btn' onClick={() => setTourData(data)}>
            Refresh
          </button>
        </div>
      )}
    </>
  );
};

export default Tours;
