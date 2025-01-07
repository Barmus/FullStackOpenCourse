import {useState,useEffect } from 'react'
import axios from 'axios'


const App = () => {

    const [countryName, setCountryName] = useState('')
    const [countryLists, setCountryLists] = useState([])
    const [searchResults, setSearchResults] = useState([])
    const [expandedStates, setExpandedStates] = useState({})

  
    useEffect(() => {
    
        axios
          .get('https://restcountries.com/v3.1/all')
          .then(response => {
            setCountryLists(response.data)
            setSearchResults(response.data)
          })
          .catch(error => {  
            alert('error: getting countries info from restful openapi')
          })
      }, [])


    const handleCountryNameInput = (event) => {

        setCountryName(event.target.value)
        
        if (event.target.value === ''){
            setSearchResults(countryLists)
        } else {
            const filteredCountries = countryLists.filter(eachCountryObj =>
                eachCountryObj.name.common.toLowerCase().includes(countryName.toLowerCase()))
            setSearchResults(filteredCountries)
        }
    }    
   

    const toggleCountryDetails = (countryName) => {
        setExpandedStates(prevStates => ({
            ...prevStates,
            [countryName]: !prevStates[countryName]
        }))
    }


    const showCountryDetails = (countryObj) => {

        return (
            <div>
                <h2>{countryObj.name.common}</h2>
                <p>Capital: {countryObj.capital}</p>
                <p>Area: {countryObj.area}</p>
                <h3>Languages:</h3>
                <ul>
                {Object.values(countryObj.languages || {}).map(language => 
                    <li key={language}>{language}</li>
                )}
                </ul>
                <img 
                src={countryObj.flags.png} 
                alt={`Flag of ${countryObj.name.common}`}
                style={{ width: '150px' }}
                />
            </div>
        )


    }

    const renderSearchResult = (countryFilteredLists) => {
        console.log(countryLists.length)
        if (countryFilteredLists.length > 10) {
            return  <p> Too many matches, specify another filter </p>
        }

        if (countryFilteredLists.length > 1 && countryFilteredLists.length <= 10){
            
            return (
                <ul>
                  {countryFilteredLists.map(country => 
                    <li key={country.name.common}>
                        {country.name.common} 
                        <button onClick={() => toggleCountryDetails(country.name.common)}>
                            {expandedStates[country.name.common] ? 'hide':'show'}
                        </button>
                        {expandedStates[country.name.common] &&  showCountryDetails(country)}
                    </li>
                  )}
                </ul>
              )
        }
        
        if (countryFilteredLists.length == 1) {
            const countryObj = countryFilteredLists[0]
            return showCountryDetails(countryObj)
        }

    }

    return (
        <div>
            <div>
                find countries 
                <input  
                    value={countryName} 
                    onChange={handleCountryNameInput}
                />
            </div>
            
            <div>
                {renderSearchResult(searchResults)}
            </div>
        </div>

    )
  }

  export default App
