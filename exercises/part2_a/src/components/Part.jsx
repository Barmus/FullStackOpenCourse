
import React from 'react'

const Part = ({eachPart}) => {

    return (
      <div>
          <p>{eachPart.name} {eachPart.exercises}</p>
      </div>
    )
  
  }

export default Part