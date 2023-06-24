import React from 'react'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import "./App.css"
import SignIn from './Pages/Signin/Signin'
import Signup from './Pages/Signup/Signup'
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    
    </>
  )
}

export default App
