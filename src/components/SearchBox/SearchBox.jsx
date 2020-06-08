import React from 'react';
import './SearchBox.style.css'

const SearchBox = props => {
    return (
        <div>
            <input
                className='search'
                type='search'
                placeholder='search monsters'
                onChange={props.handleChange} />
        </div>
    )
}

export default SearchBox
