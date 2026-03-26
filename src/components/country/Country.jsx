import React, { useState } from 'react';
import './country.css';


const Country = ({ country , handleVisitedCountries, handleVisitedFlag}) => {
    // console.log(country.name.common)

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        // method 1:
        // if (visited) {
        //     setVisited(false)
        // }
        // else {
        //     setVisited(true)
        // }

        // method 2:
        // setVisited(true)

        // method 3:
        // setVisited(visited ? false : true);

        // method 4: 
        setVisited(!visited)
        handleVisitedCountries(country)

    }
    return (
        <div className={`country ${visited && "country-visited"}`}>
            <img className='flag-images' src={country.flags?.flags.png} alt={country.flags.flags.alt } />
            <h4>Name: {country.name.common}</h4>
            <p>Population: {country.population.population}</p>
            <p>Capital: {country.capital.capital}</p>
            <p>Continents: {country.continents.continents}</p>
            <p>Area : {country.area.area} {country.area.area > 300000 ? "Big country" : "small country"}</p>
            <div className='btn-div'>
                <button onClick={handleVisited}>{visited ? "visited" : "not visited"}</button>
                <button onClick={() => { handleVisitedFlag(country.flags?.flags.png) }}>I know this flag </button>
             </div>
        </div>
    );
};

export default Country;