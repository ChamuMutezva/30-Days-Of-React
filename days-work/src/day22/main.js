import React, { useState } from 'react'

const Main = () => {
    const [firstName, setFirstName] = useState('') 
    const handleChange = (evt) => {
        const value = evt.target.value;
        console.log(evt.target.name)
        setFirstName(value)
    }
    return(
        <div className="App">
            <label htmlFor="firstname">First name:</label>
            <input type="text" id="firstname" name="firstName" placeholder="First Name" 
            value={firstName} onChange={handleChange}/>
            <h1>{firstName}</h1>
        </div>
    )
}
export default Main