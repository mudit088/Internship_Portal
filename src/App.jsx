import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Body from './Components/Body'
import Body2 from './Components/Body2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <About/>
      <Body/>
      <Body2/>
    </>
  )
}

export default App
