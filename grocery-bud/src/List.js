import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
const List = ({ itemName, handleModify, id }) => {
  return (
    <section className='grocery-item'>
      <div className='title'>{itemName}</div>
      <div>
        <button
          className='edit-btn'
          onClick={() => handleModify('edit-btn', id)}>
          <FaEdit />
        </button>
        <button
          className='delete-btn'
          onClick={() => handleModify('delete-btn', id)}>
          <FaTrash />
        </button>
      </div>
    </section>
  );
};

export default List;
