import React, { useState } from 'react'

const Counter = ({start}) => {
    const [count, setCount] = useState(start)

const increment = () => {
    setCount(count + 1)
}
const decrement = () => {
    if(count > 0 ){
        setCount(count - 1)
    }
}


  return (
    <>
    <h1>Count = {count}</h1>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    </>
  )
}

export default Counter