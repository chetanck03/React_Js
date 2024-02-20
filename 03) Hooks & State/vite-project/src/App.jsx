import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(1000)

  return (
    // React Hooks : Functionally access the features of react 
    <>
     <div>The count is {count}</div>
     <button onClick={()=>{setCount(count**9)}}>Update count</button>
    </>
  )
}

export default App
