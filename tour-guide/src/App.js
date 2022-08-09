import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';
function App() {
  const [tourData, setTourData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTourData(data));
  }, []);

  return (
    <main>{tourData === [] ? <Loading /> : <Tours data={tourData} />}</main>
  );
}

export default App;
