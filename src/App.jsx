import { useState } from 'react'
import './App.css'
import to_do from './to_do'

const App = () => {
  const [count, setCount] = useState(['Jijo','Majo','lajo'])
  const change = () => {
    setCount((precount) => ([...precount, "libin"]))
  }

  return (
    <>
      <h1>Jijo</h1>
      <ul>
        {count.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        <button onClick={change}>Add</button>
      </ul>
      <to_do/>
    </>
  )
}


export default App
