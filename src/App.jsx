import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import { NotFound } from './components/Notfound';




export default function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<NotFound/>}/>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/login'  element={<Login text="Challenger"/>}/>
            </Routes>
        </BrowserRouter>

    </>
  )
}
