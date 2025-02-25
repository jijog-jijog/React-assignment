import { useState } from 'react'
import './App.css'
import to_do from './to_do'
import Buttonclick from './button'

const App = () => {
  const [count, setCount] = useState(['Jijo','John','Prim'])
  const change = () => {
    setCount((precount) => (["libin" ,...precount,]))
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
      <Buttonclick/>
     </>
  )
}


export default App
