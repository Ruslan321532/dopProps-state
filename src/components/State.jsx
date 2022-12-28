import React, { useState } from 'react'

const State = () => {
  
    const [count , setCount] = useState(0)

    const plus = () => {
        setCount(count + 1)
    }
    const minus = () => {
        setCount(count - 1)
    }
    const Reset = () => {
        setCount(0)
    }

    return (
    <div>
        <h1>
            {
                count
            }
        </h1>
        <button onClick={plus}>
            +
        </button>
        <br />
        <br />
        <button onClick={minus}>
            -
        </button>
        <br />
        <br />
        <button onClick={Reset}>
            reset
        </button>
    </div>
  )
}

export default State