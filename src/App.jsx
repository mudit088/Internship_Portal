import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Body from './Components/Body'
import Body2 from './Components/Body2'
import Body3 from './Components/Body3'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <About/>
      <Body/>
      <Body2/>
      <Body3/>
      <Footer/>
    </>
  )
}

export default App
