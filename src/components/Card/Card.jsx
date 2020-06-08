import React from 'react';
import './Card.style.css'

const Card = ({ monster }) => {
    return (
        <div className='card-container'>
            <img src={`https://robohash.org/${monster.id}?size=200x180`} alt='monster' />
            <h2>{monster.name}</h2>
            <p>{monster.email}</p>
            <p>{monster.phone}</p>
        </div>
    )
}

export default Card
