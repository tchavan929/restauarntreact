import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import AuthContext, { AuthContextType } from '../../context/AuthContext';

const Register = () => {
  const auth = useContext(AuthContext) as AuthContextType;
  const navigate = useNavigate();
  const [formData2, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData2;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData2, [e.target.name]: e.target.value });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    let data = {
      name: name,
      email: email,
      password: password,
    };
    try {
      const response = await axios.post(
        'https://restaurantserverwindow.azurewebsites.net/register',
        data,
        config
      );
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('email', response.data.email);

      let decodeddata = decode(response.data.token);
      console.log(decodeddata);
      auth.login();
      navigate('/RestaurantList');
    } catch (e: any) {
      console.log('error ', e.message);
    }
  };
  return (
    <>
      <h1>Sign Up</h1>
      <p>Create Your Account</p>
      <form onSubmit={(e) => onSubmit(e)}>
        <div>
          <input
            type='text'
            placeholder='Name'
            name='name'
            required
            value={name}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div>
          <input
            type='password'
            placeholder='Confirm Password'
            name='password2'
            value={password2}
            onChange={(e) => onChange(e)}
          />
        </div>

        <input type='submit' value='Register' className="registerbtn" />
      </form>
      <p>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
    </>
  );
};

export default Register;
