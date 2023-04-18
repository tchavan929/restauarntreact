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
