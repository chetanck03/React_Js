import './App.css'
import Navbar from './components/Navbar'
import { createBrowserRouter , RouterProvider } from "react-router-dom"
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'
import User from './components/User'


function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<> <Navbar/><Home/></>
    },
    {
      path:"/login",
      element: <><Navbar/><Login/></>
    },
    {
      path:"/about",
      element:<> <Navbar/><About/></>
    },
    {
      path:"/user/:username",
      element:<> <Navbar/><User/></>
    }
  ])

  return (
    <>
    <RouterProvider router={router}/>

    <div className='ck'>
     <h1>React Router : </h1>
     <h2>Its used for the MultiPage Application in the React without Reload the page </h2>
     <hr />
     1) By this we use npm i react-router-dom in the terminal to install
      <hr />
     2)  Also import in the Navbar.jsx : import { createBrowserRouter } from "react-router-dom"
     <hr />
     3) By this we use "NavLink or Link " tag in Navbar , it will help not reloading the page
     </div>
    </>
  )
}

export default App
