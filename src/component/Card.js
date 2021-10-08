import React from 'react';



const Card = (props) => {

    const { CountryName, CapitalName, City } = props;

    return (
        <div className='intro-box'>
            <h1>Country: {CountryName} </h1>
            <p>Capital: {CapitalName} </p>
            <p>City: {City}</p>
        </div>
    )
}


export default Card;