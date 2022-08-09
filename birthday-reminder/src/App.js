import React, { useState } from 'react';
import data from './data';
import List from './List';
import Button from './button';
function App() {
  const [datas, setDatas] = useState(data);

  const peoplelist = datas.map((x) => {
    return <List {...x} key={x.id} />;
  });

  let remove = () => {
    setDatas(() => []);
  };

  return (
    <main>
      <section className='container'>
        <h3>{datas.length} Birthday today</h3>
        {peoplelist}
        <Button handleClick={remove} />
      </section>
    </main>
  );
}

export default App;
