import React from 'react';
import './country.css';


const Country = ({ country }) => {
    // console.log(country.name.common)

    const handleVisited = () => {
        console.log("button clicked")
    }
    return (
        <div className='country'>
            <img src={country.flags?.flags.png} alt={country.flags.flags.alt } />
            <h4>Name: {country.name.common}</h4>
            <p>Population: {country.population.population}</p>
            <p>Capital: {country.capital.capital}</p>
            <p>Continents: {country.continents.continents}</p>
            <p>Area : {country.area.area} {country.area.area > 300000 ? "Big country" : "small country"}</p>
            <button onClick={handleVisited}>Not Visited</button>
        </div>
    );
};

export default Country;