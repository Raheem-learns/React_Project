import {useState } from "react";
import styles from "./Counter.module.scss";
const Counter = () => {
const [count, setCount] = useState(0);

const increment = () => {
  setCount(count+1)
}
const dicrement = () => {
  setCount(count-1)
}
  return (
    <div className={styles.button}>
      <button onClick={increment}>+</button>
      <div className={styles.counter}>{count}</div>
      <button onClick={dicrement}>-</button>
    </div>
  )
}

export default Counter;