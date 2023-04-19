import React, { Component } from 'react'
import { useNavigate } from 'react-router';
type Props = {
  restaurant_id:String;
  menu_id:String;
  cusine:String;
  name:String;
  price:String;
  desc:String;
  quantity:number
  
};

const mycart = () => {
 
    return (
      <div>cart is from components</div>
    )
  }

  export default mycart;