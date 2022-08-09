import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Home = () => {
  const { handleSideBar, handleModal } = useGlobalContext();
  return (
    <main>
      <button className='sidebar-toggle' onClick={handleSideBar}>
        <FaBars />
      </button>
      <button className='btn' onClick={handleModal}>
        show modal
      </button>
    </main>
  );
};

export default Home;
