import React from 'react';
import './CardList.style.css'
import Card from '../Card/Card';

const CardList = props => {
    return <div className='card-list'>
        {props.persons.map(person => <Card key={person.id} person={person} />)}
    </div>
}

export default CardList
