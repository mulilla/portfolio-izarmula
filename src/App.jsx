import { useState } from 'react'
import './App.css'
import './components/navbar/Navbar'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Displayer from './components/displayer/Displayer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App md-h-screen">
      <Navbar></Navbar>
      <Displayer></Displayer>
      <Footer></Footer>
    </div>
  )
}

export default App
