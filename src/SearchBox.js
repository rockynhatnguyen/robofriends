import React from 'react';
import './SearchBox.css';

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div className='pa2'>
      <input
      className='bg-lightest-blue mb3 pa3 ba b--green'
      type='search'
      placeholder='Search robots...'
      onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;
