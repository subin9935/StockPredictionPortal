import { useState } from 'react'
import './assets/css/style.css'
import Main from './Components/main'
import Register from './Components/Register'  
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Login from './Components/Login'

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/register' element={<Register />} /> 
          <Route path='/login' element={<Login />} /> 
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App