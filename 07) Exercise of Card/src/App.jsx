import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [cards, setCards] = useState([])

  const fetchData = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await a.json()
    setCards(data)
    console.log(data)

  }

  useEffect(() => {
    fetchData()
  }, [])


  // Map() : Allows you to run a function on each item in the array, returning a new array as the result

  return (
    <>
    <Navbar/>
      <div className="container">

        {cards.map((card) => {
          return (
            <div key={card.id} className="card">
              <h1>{card.title}</h1>
              <p>{card.body}</p>
              <span>By: UserId: {card.userId} </span>
            </div>
          )
        })}

      </div>

    </>
  )
}

export default App
