import PropTypes from 'prop-types'
import React, { Component } from 'react'
import homepageimg from '../images/homepageimg.png'
import { useNavigate } from 'react-router';

const Home = () => {
    const navigate = useNavigate();
    const redriecttoRestaurantlist=() => {
        navigate('/RestaurantList');
    }
  console.log(homepageimg)
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