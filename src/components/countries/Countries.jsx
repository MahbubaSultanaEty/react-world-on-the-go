import React, { useState } from 'react';
import { use } from 'react';
import Country from '../country/Country';
import './countries.css'

const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountries] =useState([])
    const countriesData = use(countriesPromise);
    const countries= countriesData.countries
    console.log(countries)
    return (
        <div >
            <h1>Countries : {countries.length}</h1>
            <div className='countries'>
            {
                countries.map(country => <Country key={country.ccn3.ccn3} country={country}></Country>)
                }
                </div>
        </div>
    );
};

export default Countries;