import React, { useState } from 'react';
import { use } from 'react';
import Country from '../country/Country';
import './countries.css'

const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise);
    const countries= countriesData.countries
    console.log(countries)

    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlag, setVisitedFlag] = useState([]);


    const handleVisitedCountries = (country)=> {
        console.log("handle visited countries", country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries)
    }

    const handleVisitedFlag = (flag) => {
        console.log("visited flags needs to be added", flag);
        const newVisitedFlags = [...visitedFlag, flag];
        setVisitedFlag(newVisitedFlags)
    }

    return (
        <div >
            <h1>Countries : {countries.length}</h1>
            <h6>Total Country Visited: {visitedCountries.length}</h6>
            <ol>
                {
                    visitedCountries.map(country => <li key={ country.ccn3.ccn3}>{country.name.common}</li>)
                }
            </ol >

            <h3>Flags i recognize: { visitedFlag.length}</h3>
            <ol className="visited-flags">
                {
                    visitedFlag.map((flag, index) => <img key={index} src={flag }></img>)
                }
            </ol>
            <div className='countries'>
            {
                countries.map(country => <Country key={country.ccn3.ccn3} country={country} handleVisitedCountries={handleVisitedCountries} handleVisitedFlag={handleVisitedFlag}></Country>)
                }
                </div>
        </div>
    );
};

export default Countries;