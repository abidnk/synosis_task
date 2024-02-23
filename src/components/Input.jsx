import React, { useState } from 'react'

const Input = () => {
    const [fisrtName, SetFirstName] = useState("")
    const [lastName, SetLastName] = useState("")

    const handleFirstName = (e) => {
        SetFirstName(e.target.value)
    }

    const handleLastName = (e) => {
        SetLastName(e.target.value)
    }

  return (
    <div>

    <div>
        <label>First Name:</label>
        <input type='text' value={fisrtName} onChange={handleFirstName}/>
    </div>
    <div>
        <label>Last Name:</label>
        <input type='text' value={lastName} onChange={handleLastName}/>
    </div>
    {fisrtName && lastName &&(
        <div>
            <p>Full Name: {fisrtName} {lastName}</p>
        </div>
    )}
    </div>
  )
}

export default Input