import { useState } from 'react'
import './App.css'
import Navigate from './navigate'
import Home from './home'
import Footer from './footer'

function App() {

  return (
    <div>
   <div className='nav'><Navigate/></div>
   <Home/>
   <Footer/>
   </div>
  )
}

export default App
