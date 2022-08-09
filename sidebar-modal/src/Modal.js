import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context';
const Modal = () => {
  const { handleModal, isModalOpen } = useGlobalContext();
  return (
    <div className={`modal-overlay ${isModalOpen && 'show-modal'}`}>
      <div className='modal-container '>
        <button className='close-modal-btn' onClick={handleModal}>
          <FaTimes />
        </button>
        <h2>modal container</h2>
      </div>
    </div>
  );
};

export default Modal;
