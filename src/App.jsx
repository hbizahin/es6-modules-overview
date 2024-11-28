import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Watch from './Watch'

// useState
// useEffect use kore fetch korbo {package folder er watches.json}
function App() {
  const watches = [
    {id: 1, name: 'Apple watch', price: 200},
    {id: 2, name: 'Samsung watch', price: 150},
    {id: 3, name: 'Google watch', price: 180}
  ]

  return (
    <>
      <h1>Vite + React</h1> 
      {
        watches.map(watch =><Watch key={watch.id} watch={watch}></Watch>)
      }
    </>
  )
}

export default App
