import { useState } from 'react'
import classes from './Counter.module.scss'

const Counter = () => {
    const [value, setValue] = useState(0);

    const increment = () => {
        setValue(value + 1);
    }

  return (
    <div className={classes.test}>
        <h1>{value}</h1>
        <button onClick={increment}>increment</button>
    </div>
  )
}

export default Counter;