import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import decode from 'jwt-decode';
import AuthContext, { AuthContextType } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const auth = useContext(AuthContext) as AuthContextType;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const [emailError, setEmailError] = useState('');

  const [error, setError] = useState();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('hello');
    let formValid = true;
    let emailPattern =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email === '') {
      formValid = false;
      setEmailError('Please enter email');
    } else if (!email.match(emailPattern)) {
      formValid = false;
      setEmailError('Please enter email in valid format');
    } else {
      formValid = true;
      setEmailError('');
    }

    if (formValid) {
      let config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      let data = {
        email: email,
        password: password,
      };

      try {
        const response = await axios.post(
          'https://restaurantserverwindow.azurewebsites.net/login',
          data,
          config
        );
        console.log(response.data);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('email', response.data.email);
       auth.login();
        console.log(auth)
        
        navigate('/RestaurantList');
      } catch (err: any) {
        console.log(err);
        setError(err.response.data.errors || 'something went wrong');
      }
    }
  };

  return (
    <>
      <h1>Sign In</h1>
      <p>Sign Into Your Account</p>

      {error && <p style={{ color: 'red' }}>{error}</p>}
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
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={(e) => onChange(e)}
          />
        </div>

        <input type='submit' value='Login' className="registerbtn" />
      </form>
      <p>
        <Link to='/Registration'>Register</Link>
      </p>
    </>
  );
};

export default Login;
