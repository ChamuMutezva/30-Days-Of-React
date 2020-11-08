import React, { useState } from 'react'

const Main = () => {
 const [count, setCount] = useState(0)
    return(
        <>
        <h1>Henaro {count}</h1>
        <button onClick={() => setCount(count + 1)}>Add one</button>
        <button onClick={() => setCount(count - 1)}>Minus one</button>
        </>
    )
}
export default Main