import React, { Component } from 'react'
import { useNavigate } from 'react-router';

type RestMenuProps = {
  restaurantmenu:{
    restaurant_id:String;
    menu_id:String;
    cusine:String;
    name:String;
    price:String;
    desc:String
   
    }
  }

const RestaurantMenu = ({restaurantmenu }:RestMenuProps) => {
 
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
         <h3>
        {restaurantmenu.name} - {restaurantmenu.cusine}- {restaurantmenu.price}- {restaurantmenu.desc} ,<button > Add to cart</button>
      </h3>
      {/* <button onClick={buttonHandler} name={restaurantmenu.menu_id}>Add To Cart</button> */}
      </div>
    )
  
}

export default RestaurantMenu


