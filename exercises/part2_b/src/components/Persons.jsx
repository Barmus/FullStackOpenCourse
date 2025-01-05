import { useState } from 'react'

const Persons = ({showPersons}) => {
    return (
        <div>
            <ul>
                {showPersons.map(eachPerson => (
                    <li key={eachPerson.name}>
                        {eachPerson.name} {eachPerson.number}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Persons



