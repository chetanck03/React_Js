import { useState , useMemo } from "react"
import "./App.css"

// Array creating
const num = new Array(30_000_000).fill(0).map((_,i)=>{
  return {
    index: i,
    isMagical: i === 29_000_00
  }
})


function App() {

  const [count,setCount]=useState(0)

  const [numbers,setNumbers] = useState(num)

// 1) Finding Number and its expensive computation & here rendering process is occurs
  // const magical = numbers.find(item=>item.isMagical===true)

// 2) useMemo hook : Returns a Memoized value and prevents the application from unnecessary re-renders 

  const magical = useMemo(() => numbers.find(item=>item.isMagical===true), [numbers])

  return (
    <>
    <div>
      Magical number is : {magical.index}
    </div>
   <div> {count}</div>
    <button onClick={
      ()=>{setCount(count+1)

        // Re-Rendering when its necessary to update
      if(count==10){
        setNumbers(
          new Array(10_000_000).fill(0).map((_,i)=>{
            return {
              index: i,
              isMagical: i === 9_000_00
            }
          })
        )

      }
      
    }}>Click me</button>
     
    </>
  )
}

export default App
