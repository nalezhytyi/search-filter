import React from 'react';
import './Card.style.css'

const Card = ({ person }) => {
    return (
        <div className='card-container'>
            <div>
                <img src={`https://robohash.org/${person.id}?set=set4&size=200x180`} alt='person' />
            </div>
            <h2>{person.name}</h2>
            <p>{person.email}</p>
            <p>{person.phone}</p>
        </div>
    )
}

export default Card
