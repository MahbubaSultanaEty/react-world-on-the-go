import React from 'react';


const Country = ({ country }) => {
    console.log(country.name.common)
    return (
        <div className='card'>
            <img src={country.flags?.flags.png} alt={country.flags.flags.alt } />
            <h4>Name: {country.name.common}</h4>
            <p>Population: {country.population.population}</p>
            <p>Capital: {country.capital.capital}</p>
            <p>Continents: { country.continents.continents}</p>
        </div>
    );
};

export default Country;