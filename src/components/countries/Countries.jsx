import React, { useState } from 'react';
import { use } from 'react';
import Country from '../country/Country';
import './countries.css'

const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise);
    const countries= countriesData.countries
    console.log(countries)

    const [visitedCountries, setVisitedCountries] = useState([]);
    const handleVisitedCountries = (country)=> {
        console.log("handle visited countries", country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries)
    }
    return (
        <div >
            <h1>Countries : {countries.length}</h1>
            <h6>Total Country Visited: { visitedCountries.length}</h6>
            <div className='countries'>
            {
                countries.map(country => <Country key={country.ccn3.ccn3} country={country} handleVisitedCountries={handleVisitedCountries}></Country>)
                }
                </div>
        </div>
    );
};

export default Countries;