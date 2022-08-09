import React, { useRef } from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { updateSearchTerm } = useGlobalContext();
  const inputRef = useRef();
  const handleKeyPress = () => {
    updateSearchTerm(inputRef.current.value);
  };
  return (
    <div className='search'>
      <form className='search-form'>
        <div className='form-control'>
          <label htmlFor='search-form'>Search your favorite Cocktail</label>
          <input
            type='text'
            name='search-form'
            ref={inputRef}
            onKeyUp={handleKeyPress}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
