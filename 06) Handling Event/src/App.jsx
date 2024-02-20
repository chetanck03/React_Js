import "./App.css"
import {useState} from 'react'

function App() {

  const [name, setName] = useState("Chetan")
  const [form, setForm] = useState({email: "", phone:""})

  const handleClick = ()=>{
    alert("Hey I am Clicked")
  }

  // const MouseOver =()=>{
  //   alert("Hey I am Mouse Over")
  // }

  const handleChange =(e)=>{
    // setName(e.target.value)
    setForm({...form,[e.target.name]:e.target.value})
    console.log(form)

  }

  return (
    <>
     <div className="button">
      <button onClick={handleClick}>Click me</button>
     </div>
{/* 
     <div className="red" onMouseOver={MouseOver}>
      I am a red div
     </div> */}

     <input type="text" value={name} onChange={handleChange}/>
     <input type="text" name="email" value={form.email} onChange={handleChange}/>
     <input type="text" name="phone" value={form.phone} onChange={handleChange}/>



    </>
  )
}

export default App
