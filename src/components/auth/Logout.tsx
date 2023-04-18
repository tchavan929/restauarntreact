import React, { Component,useContext } from 'react'
import AuthContext, { AuthContextType } from '../../context/AuthContext';
import { useNavigate } from 'react-router';

const Logout=()=>  {
    const auth = useContext(AuthContext) as AuthContextType;
    const navigate = useNavigate();
  const logoutuser =()=>{
auth.logout();
navigate('/Home');
    
  }
    return (
      <div>
        
        <button onClick={logoutuser}>Logout</button>
        </div>
    )
  
}

export default Logout