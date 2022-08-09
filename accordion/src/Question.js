import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {
  const [open, setOpen] = useState(false);
  let handleClick = () => {
    setOpen((x) => !x);
  };
  return (
    <section className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={handleClick}>
          {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>

      {open && <p>{info}</p>}
    </section>
  );
};

export default Question;
