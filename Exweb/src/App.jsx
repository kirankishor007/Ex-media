import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Exmedia from './pages/Exmedia'
import Header from './pages/Header'
import Footer from './pages/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
       <Route path="/" exact element={<Exmedia/>} />
       <Route path="header" exact element={<Header/>} />
       <Route path="footer" exact element={<Footer/>} />
     </Routes>
    </>
  )
}

export default App
