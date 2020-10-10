import React from 'react';
const Numbers = ({ numbers }) => {
    // modifying array to array of li JSX
    const list = numbers.map((number,idx) => <li key={idx}>{number}</li>)
    return list
  }
  
  // App component
  
  const MappingArrays = () => {
    const numbers = [1, 2, 3, 4, 5]
  
    return (
      <div className='container'>
        <div>
          <h1>Numbers List</h1>
          <ul>
            <Numbers numbers={numbers} />
          </ul>
        </div>
      </div>
    )
  }
  export default MappingArrays