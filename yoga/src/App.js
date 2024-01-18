import React from 'react'
import { Route,Routes } from 'react-router-dom'
import './App.css'
import Videos from './Components/Videos'
import Home from './Components/Home'
import Contact from './Components/Contact'
import Upload from './Components/Upload'

const App = () => {
  return (
    <>
  
    <Routes>
      
      <Route path='/' element={ <Home />} />
      <Route path='/videos' element={<Videos />} />    
      <Route path='/contact' element={<Contact />} />
      <Route path='/upload' element={<Upload />} />
      

    </Routes>
    </>
  )
}

export default App