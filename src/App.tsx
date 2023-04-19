import React from 'react';
import logo from './logo.svg';
import './App.css';

import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './pages/Navigation';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import RestaurantList from './pages/RestaurantList';
import UserProfile from './pages/UserProfile';
import RestaurantMenuList from './pages/RestaurantMenuList';
import Home from './pages/Home';
import Footer from './pages/Footer';

import ProtectedRoute from './components/auth/ProtectedRoute';

import { AuthContextProvider } from './context/AuthContext';
import Logout from './components/auth/Logout';

function App() {
  return (
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.3/css/bootstrap.min.css" integrity="sha512-SbiR/eusphKoMVVXysTKG/7VseWii+Y3FdHrt0EpKgpToZeemhqHeZeLWLhJutz/2ut2Vw1uQEj2MbRF+TVBUA=="/>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.3/js/bootstrap.min.js" integrity="sha512-1/RvZTcCDEUjY/CypiMz+iqqtaoQfAITmNSJY17Myp4Ms5mdxPS5UV7iOfdZoxcGhzFbOm6sntTKJppjvuhg4g==" ></script>

  <AuthContextProvider>
      <Navigation/>
      <Routes>
        <Route path='Home' element={<Home/>}/>
        <Route path='Login' element={<Login/>}/>
        <Route path='Registration' element={<Register/>}/>
        <Route path='RestaurantList' element={<RestaurantList/>}/>
       
        <Route element={<ProtectedRoute />}>
        <Route path='RestaurantMenuList/:id' element={<RestaurantMenuList/>}/>
        <Route path='Logout' element={<Logout/>}/>
        </Route>
        <Route path='UserProfile' element={<UserProfile/>}/>
      </Routes>
    </AuthContextProvider>
      <Footer/>
      
    </div>
  );
}

export default App;
