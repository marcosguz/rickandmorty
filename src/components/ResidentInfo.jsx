import axios from 'axios';
import { useState, useEffect } from 'react';
import '../css/rikyMorty.css'

const ResidentInfo = ({rikMorty}) => {

    const [ rikyMortyData, setRikyMortiData ] = useState({})

    useEffect( () => {
        axios.get(rikMorty)
            .then(response => setRikyMortiData(response.data))
    }, [])

    console.log(rikyMortyData.status)
    const getColor = () => {
        if(rikyMortyData.status === 'Alive') {
            return(
                <>
                    <div className='status' style={{backgroundColor:'green'}}></div>
                </>
            )
        } else if(rikyMortyData.status === 'Dead') {
            <>
                <div className='status' style={{backgroundColor:'red'}}></div>
            </>
        } else if(rikyMortyData.status === 'unknown') {
            <>
                <div className='status' style={{backgroundColor:'yellow'}}></div>
            </>
        }
    }
    

    return (
        <div className='rickyMorty'>
            <li className='item'>
                <div className='img'>
                    <img src={rikyMortyData.image}/>
                </div>
                <div className='info'>
                    <div className='info-name'>
                        <h3>{rikyMortyData.name}</h3>
                    </div>
                    <div className='info-status'>
                        
                            {getColor()}

                        <div className='status-title'>
                            <p>{rikyMortyData.status} - {rikyMortyData.species}</p>
                        </div>
                    </div>
                    <div className='info-origin'>
                        <p>Origin:</p>
                        <span>{rikyMortyData.origin?.name}</span>
                    </div>
                    <div className='info-episode'>
                        <p>episodes where appear</p>
                        <span>{rikyMortyData.episode?.length}</span>
                    </div>
                </div>
            </li>
        </div>
    );
};

export default ResidentInfo;