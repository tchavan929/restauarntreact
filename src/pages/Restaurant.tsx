import React, { Component } from 'react'
import { useNavigate } from 'react-router';

type RestProps = {
  restaurant:{
    restaurant_id: string;
    restaurant_name: string;
    }
  }

const Restaurant = ({restaurant }:RestProps) => {
 
  // function redirectToMenu(restaurant_id: string): {
  //   
  // }
  const navigate = useNavigate();
  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const button: HTMLButtonElement = event.currentTarget;
    redirectToMenu(button.name);
  };
  function redirectToMenu(name: string) {
    navigate(`/RestaurantMenuList/${name}`);
  }
  // const redirectToMenu ({restaurant}:RestProps)=>({


  // });
 
  

    return (
      <div>

      <tr>
        <td>{restaurant.restaurant_id}</td>
        <td>{restaurant.restaurant_name}</td>
        <td><button onClick={buttonHandler} name={restaurant.restaurant_id} className="orderbutton">Order here</button></td>
      </tr>
        {/* {restaurant.restaurant_id} - {restaurant.restaurant_name} */}
      
      
      </div>
    )
  
}

export default Restaurant


