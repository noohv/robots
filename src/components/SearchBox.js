import React from 'react';
import '../index.css';

const SearchBox = ({ searchChange }) => {
    return (
        <div className='pa2'>
            <input
            className='pa3 search' 
            type='search' 
            placeholder='Search'
            onChange={searchChange}
            />       
        </div>
    );
}

export default SearchBox;