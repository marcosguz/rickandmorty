import React from 'react';
import '../css/content.css'

const Item = ({location}) => {
    return (
        <li className='content'>
            <div>
                <p>Name:</p>
                <span>{location.name}</span>
            </div>
            <div>
                <p>Type:</p>
                <span>{location.type}</span>
            </div>
            <div>
                <p>Dimension:</p>
                <span>{location.dimension}</span>
            </div>
            <div>
                <p>Population:</p>
                <span>{location.residents?.length}</span>
            </div>
        </li>
    );
};

export default Item;