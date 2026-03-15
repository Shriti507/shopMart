import React from 'react'
import { Route, Router, Routes } from 'react-router-dom' 
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import UserDashboard from './pages/UserDashboard'



const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="signUp" element={<SignUp/>}/>
        <Route path="user-dashboard" element={<UserDashboard/>}/>
      

      </Routes>
    </>
  )
}

export default App