import React from 'react'
import { Route, Router, Routes } from 'react-router-dom' 
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'



const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="signUp" element={<SignUp/>}/>
      

      </Routes>
    </>
  )
}

export default App