import './App.css'
import Navbar from './components/Navbar'
import { useState } from 'react'
import { counterContext } from './context/context'

function App() {
  const [count,setCount ] = useState(0)

  return (
    <>
    <counterContext.Provider value={{count,setCount}}>
      <Navbar/>

      <div>Hey...</div>
      <div> {count}</div>

        <button onClick={()=>{setCount(count+1)}}>Click me</button>
    </counterContext.Provider>
    </>
  )
}

export default App
