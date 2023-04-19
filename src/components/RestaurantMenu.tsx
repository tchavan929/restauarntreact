import React, { Component, useState } from 'react'
import { useNavigate } from 'react-router';
import cart from './mycart';

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
  type CartProps={
    name: String, 
    menu_id: String, 
    price: String

  }

const RestaurantMenu = ({restaurantmenu }:RestMenuProps) => {
 
  // function redirectToMenu(restaurant_id: string): {
  //   
  // }
  const [cartlist,setCart]=useState([{}]);
  const navigate = useNavigate();
  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const button: HTMLButtonElement = event.currentTarget;
    redirectToMenu(button.name);
  };
  function redirectToMenu(name: string) {
    navigate(`/RestaurantMenuList/${name}`);
  }
 

  function addtomycart(name: String, menu_id: String, price: String): void {
   console.log("@cart.length",cartlist.length)
   console.log("@cartlist before adding",cartlist);
    setCart((prevState) => [
      ...prevState,
      {  name: name, 
        menu_id: menu_id, 
        price: price },
    ]);
    console.log("@cartlist",cartlist);
   cartlist.map((item)=>{
    console.log("@item",item);
   }) 
  }

  // const redirectToMenu ({restaurant}:RestProps)=>({


  // });
 
  

    return (
      <div className="menu-item">
      <h3>{restaurantmenu.name} - {restaurantmenu.cusine} - ${restaurantmenu.price} - {restaurantmenu.desc}</h3>
      <button onClick={()=>addtomycart(restaurantmenu.name,restaurantmenu.menu_id,restaurantmenu.price)}>Add to cart</button>
    
    </div>
    )
  
}

export default RestaurantMenu


