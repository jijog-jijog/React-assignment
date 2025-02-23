import { useState } from 'react'
import './App.css'
import T

function App() {
  const [count, setCount] = useState({Name:"Jijo",Age:20})
  const Change = () =>{
    setCount((precount) => ({...precount, Name: "Jebi"}))
 }

 return (
    <>
    <h1>Name={count.Name}</h1>
    <h1>Age={count.Age}</h1>
    <button onClick={Change}>Change Name</button>
    <ToDo />
    </>
  )
}

export default App
