import  { Component,useContext } from 'react'
import React, { useState, useEffect }  from 'react'
import AuthContext, { AuthContextType } from '../context/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserProfile= ()=> {

    const navigate = useNavigate();
    const auth = useContext(AuthContext) as AuthContextType;
    var loggedemail=localStorage.getItem("email");
   
    const [formData, setFormData] = useState({
      email: '',
      name: '',
    });
    
    const { email, name } = formData;
    const sendGetRequest = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/fetchedUserDetails/${loggedemail}`
        );
        setFormData(response.data);
        console.log(response);
        console.log(formData)
      } catch (err) {
        console.log(err);
      }
    };
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
    useEffect(() => {

      sendGetRequest();
      
      }, []);
      const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        console.log('hello');
          let config = {
            headers: {
              'Content-Type': 'application/json',
            },
          };
    
          let data = {
            email: email,
            name: name,
          };
    console.log(data)
          try {
            const response = await axios.post(
              'http://localhost:4000/updateUser',
              data,
              config
            );
            console.log(response.data)
            
            navigate('/Home');
          } catch (err: any) {
            console.log(err);
          }
        
      };
    return (
      <div>UserProfile
<form onSubmit={(e) => onSubmit(e)}>
        <div>
          <input
            type='text'
            placeholder='login'
            name='email'
            value={email}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div>
          <input
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            onChange={(e) => onChange(e)}
          />
        </div>

        <input type='submit' value='Update Your Profile' className="registerbtn" />
      </form>


      </div>
    )
  
}

export default UserProfile