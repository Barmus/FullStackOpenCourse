import { useState, useEffect} from 'react'

const Filter = ({persons, filteredPersons, setFilteredPersons}) => {

    const [filterName, setFilterName] = useState('')

    // make sure that every time filterName or persons changes, filteredPersons will be recaculated 
    
    useEffect(() => {
        if (filterName === '') {
            setFilteredPersons(persons)
            return
        }
        const filtered = persons.filter(person =>
            person.name.toLowerCase().includes(filterName.toLowerCase())
        )
        setFilteredPersons(filtered)
    }, [persons, filterName]) 

    const handleFilterPersonList = (event) => {
        setFilterName(event.target.value)
    }    
   
    return (
        <div>
            filter shown with: <input 
                    value={filterName} 
                    onChange={handleFilterPersonList}
                    />
        </div>
    )

}

export default Filter
