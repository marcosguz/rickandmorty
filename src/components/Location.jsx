import axios from 'axios';
import { useState, useEffect } from 'react';
import Item from './Item';
import ResidentInfo from './ResidentInfo';
import '../css/container.css'
import '../css/banner.css'

const Location = () => {

    const [ location, setLocation ] = useState({})
        
    useEffect( () => {
        const locationRandom = Math.floor(Math.random() * 126) + 1
        axios.get(`https://rickandmortyapi.com/api/location/${locationRandom}`)
            .then(response => setLocation(response.data))
    }, [])

    const [ searchValue, setSearchValue ] = useState('')

    const searchType = () => {
        axios.get(`https://rickandmortyapi.com/api/location/${searchValue}`)
            .then(response => setLocation(response.data))
    }

    document.body.style = 'background: #05292e'

    return (
        <div className='containter'>
            <div className='banner'>
                <div className='title'></div>
                <div className='search'>
                    <input type="text" value={searchValue} onChange={event => setSearchValue(event.target.value)} placeholder='type a location id'/>
                    <button onClick={searchType}>Search</button>
                </div>
            </div>

            <div>
                <h1>{location.name}</h1>
            </div>

            <div>
                <ul className='location'>
                    <Item location={location} key={location.name}/>
                </ul>
                <ul className='item-list'>
                    
                    {location.residents?.map(rikMorty => (
                        <ResidentInfo rikMorty={rikMorty} key = {rikMorty}/>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Location;