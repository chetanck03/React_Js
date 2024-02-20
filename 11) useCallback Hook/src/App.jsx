import { useState , useCallback} from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  // const [adjective, setAdjective] = useState("good")

// 1) Re-rendering the function and creating new function on the re-rendering time
  // const getAdjective = ()=>{
  //   return "another" + count
  // }

  // 2) callBack : Works by Storing the function object itself & its freezing the function
  const getAdjective = useCallback(()=>{
      return "another" + count
    },[count])
    // and its does not change when count not changing

  return (
    <>
    <Navbar adjective={"good"} getAdjective={getAdjective}/>
  
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
     
    </>
  )
}

export default App
