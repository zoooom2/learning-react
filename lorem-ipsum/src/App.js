import React, { useState } from 'react';
import data from './data';
function App() {
  const [Paragraphs, setParagraph] = useState(null);
  const [number, setNumber] = useState(null);
  let mapData = [];
  let handleChange = (e) => {
    let value = e.target.value;
    setNumber(() => value);
  };
  let handleClick = (e) => {
    e.preventDefault();
    if (number > 0 && number < data.length - 1) {
      for (let i = 0; i < number; i++) {
        mapData.push(
          <p className='result' key={i}>
            {data[i]}
          </p>
        );
      }
    } else if (number < 1) {
      mapData.push(
        <p className='result' key={0}>
          {data[0]}
        </p>
      );
    } else {
      for (let i = 0; i < data.length - 1; i++) {
        mapData.push(
          <p className='result' key={i}>
            {data[i]}
          </p>
        );
      }
    }
    setParagraph(() => mapData);
  };

  return (
    <main className='section'>
      <div>
        <h3>tired of boring lorem ipsum?</h3>
        <div className='lorem-form'>
          <label htmlFor='Paragraphs'>Paragraphs:</label>
          <input
            type='number'
            id='Paragraphs'
            value={number}
            name='Paragraphs'
            onChange={handleChange}
          />
          <button type='submit' className='btn' onClick={handleClick}>
            Generate
          </button>
        </div>
      </div>
      <div className='section-center'>{Paragraphs}</div>
    </main>
  );
}

export default App;
