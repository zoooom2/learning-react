import React from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const mapData = data.map((x) => {
    return <SingleQuestion {...x} key={x.id} />;
  });

  return (
    <main className='container'>
      <h3>Questions And Answers About Login</h3>
      <div>{mapData}</div>
    </main>
  );
}

export default App;
