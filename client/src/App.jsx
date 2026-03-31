import React from 'react'
import { Route, Router, Routes } from 'react-router-dom' 
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import UserDashboard from './pages/UserDashboard'
import About from './pages/About'
import Contact from './pages/Contact'



const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="signUp" element={<SignUp/>}/>
        <Route path="user-dashboard" element={<UserDashboard/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
      

      </Routes>
    </>
  )
}

export default App