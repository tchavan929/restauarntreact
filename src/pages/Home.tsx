import PropTypes from 'prop-types'
import React, { Component } from 'react'
import homepageimg from '../images/homepageimg.png'
import { useNavigate } from 'react-router';
//const server_url = process.env.REACT_APP_CATID_MOVIE;

const Home = () => {
  const server_url = process.env.REACT_APP_API_URI;
    const navigate = useNavigate();
    const redriecttoRestaurantlist=() => {
        navigate('/RestaurantList');
    }
  console.log("@ check for env variable",process.env.NODE_ENV)
  console.log("@ check for env variable",process.env.REACT_APP_CATID_MOVIE)
    return (
      <div>
      <img src={homepageimg} alt="Home Page Alt image " className='homepageimage'/>
      <br/>
      {/* <button onClick={redriecttoRestaurantlist} className="homepagebutton"/> */}
      <div className="homepagebutton">
      <a onClick={redriecttoRestaurantlist} >
      <img src={`../images/ordernowButton.png`} alt="Order Now " />
      </a>
      </div>
      
      </div>
    )
  
}

export default Home