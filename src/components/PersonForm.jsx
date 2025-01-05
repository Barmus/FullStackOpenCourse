import { useState } from 'react'

const PersonForm = ({persons, setPersons}) => {

    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')
  
    // input change event
    const handleNewNameInput = (event) => setNewName(event.target.value)
    const handleNewPhoneInput = (event) => setNewPhone(event.target.value)

    // add new person info event
    const addNewPerson = (event) => {

        event.preventDefault();
        const newPerson = {
          name: newName,
          number: newPhone
        }
      
        // warning if the person is already existed in the phonebook
        if (persons.some(eachPerson => eachPerson.name === newName)){
          alert(`${newName} is already added to phonebook`)
          return 
        }
    
        setPersons(persons.concat(newPerson))
        setNewName('')
        setNewPhone('')
      }

    return (
        <div>
            <form onSubmit={addNewPerson} >
                <div>
                    name: <input 
                        value={newName} 
                        onChange={handleNewNameInput}
                        />
                    phone: <input 
                        value={newPhone} 
                        onChange={handleNewPhoneInput}
                        />
                </div>
                    <button type="submit">add</button>
            </form>
        </div>

    )
    
}
export default PersonForm
