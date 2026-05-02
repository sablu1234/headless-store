import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './components/Home'
import Site from './components/Site'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home name="Sanjay Kumar" email="sanjay@gmail.com" />

      <Site/>
    </>
  )
}

export default App
