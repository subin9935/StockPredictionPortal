import { useState } from 'react'
import './assets/css/style.css'
import Main from './Components/main'
import Register from './Components/Register'  
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Login from './Components/Login'
import Authprovider from './Authprovider'
import Dashboard from './Components/dashboard/Dashboard'
import Privateroute from './Privateroute'
import Publicroute from './Publicroute'


function App() {
  return (
    <>

      <Authprovider>
          <BrowserRouter>
            <Header />
              <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/register' element={<Publicroute><Register/></Publicroute> } /> 
                <Route path='/login' element={<Publicroute><Login /></Publicroute> } /> 
                <Route path='/dashboard' element={<Privateroute><Dashboard /></Privateroute>} /> 
          
               </Routes>
            <Footer />
        </BrowserRouter>
      </Authprovider>
      
    </>
  )
}

export default App