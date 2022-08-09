import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project';
function App() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);

  let fetchData = async () => {
    let response = await fetch(url);
    let data = await response.json();
    setData(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  let handleClick = (id) => {
    data.map((x) => {
      x.id === id && setValue(() => x.order - 1);
    });
  };

  if (loading) {
    return <h2>loading...</h2>;
  } else {
    let nameMapData = data.map((x) => (
      <button
        key={x.id}
        className={`job-btn ${value === x.order - 1 && 'active-btn'}`}
        onClick={() => handleClick(x.id)}>
        {x.company}
      </button>
    ));
    let { company, dates, duties, id, order, title } = data[value];
    let mapDuties = duties.map((x, index) => {
      return (
        <div key={index} className='job-desc'>
          <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
          <p key={id}>{x}</p>
        </div>
      );
    });

    return (
      <section className='section'>
        <div className='title'>
          <h2>Experience</h2>
          <div className='underline'></div>
        </div>
        <div className='jobs-center'>
          <div className='btn-container'>{nameMapData}</div>

          <div className='job-info'>
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className='job-date'>{dates}</p>
            {mapDuties}
          </div>
        </div>
        <button className='btn'>More info</button>
      </section>
    );
  }
}

export default App;
