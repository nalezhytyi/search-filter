import React from 'react';
import './SearchBox.style.css'

const SearchBox = props => {
    return (
        <>
            <input
                className='search'
                type='search'
                placeholder='search kittens'
                onChange={props.handleChange} />
        </>
    )
}

export default SearchBox
