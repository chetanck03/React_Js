import React,{useEffect} from 'react'

const Navbar = ({color}) => {

 //Case 1 : Run on every render
 useEffect(() => {
  alert("Case 1 : Hey I will run on every render")
})

//Case 2 : Run only on first render
useEffect(() => {
  alert("Case 2 : Hey Welcome to my page. This is the first render")
}, [])

//Case 3 : Run only when certain values change
useEffect(() => {
  alert("Case 3 : Color was Changed")
}, [color])

//Case 4: Example of Clean up function
useEffect(() => {
  alert("Case 4 : Cleaning function")

  return () => {
    alert("Case 4.1 : Component was unmounted (Removed)")
  }
}, [])

  

  return (
    <div>
        I am navbar of {color} color he he...
    </div>
  )
}

export default Navbar