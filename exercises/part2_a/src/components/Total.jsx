import React from 'react'

const Total = ({parts}) => {
  
    const totalNum = parts.reduce( (sum, part) => sum += part.exercises, 0)
  
    return (
      <div>
          <h2>total of {totalNum} exercises</h2>
      </div>
    )
  }
  export default Total