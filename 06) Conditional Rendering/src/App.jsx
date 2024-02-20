import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [showbtn, setshowbtn] = useState(false)

  const [todos, settodos] = useState([
    {
    title:"hey",
    description:"I am a good todo"
    },
    {
    title:"hey another todo",
    description:"I am a good todo"
    },
    {
    title:"hello ",
    description:"I am a good todo"
    },

])

  const Todo = ({todo})=>{return(
    <>
    <div className="todo">{todo.title}</div>
    <div className="todo">{todo.description}</div>
    </>
  )}

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {/* Mapping for the list */}

      {todos.map(todo=>{
        return <Todo todo={todo}/>
      })}



      <h1>Vite + React</h1>

     {/* 1) Conditional Operator */}
     {/* {showbtn? <button>I will be shown only when second btn is clicked</button>:"chetan"} */}

     {/*2) show only when its true */}
     {/* {showbtn && <button>showbtn is true</button>} */}

     {showbtn? <button>showbtn is true</button>:<button>showbtn is false</button>}




      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>
          toggle shown btn
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
