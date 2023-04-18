import React, { Component } from 'react'
import { useNavigate } from 'react-router';
import homepageimg from '../images/homepageimg.png'

type RestProps = {
  restaurant:{
    restaurant_id: string;
    restaurant_name: string;
    }
  }
  //const imagesrc= import('../images/001.png');
  const imagesrc=()=>{
    import('../images/001.png');
  }
const Restaurant = ({restaurant }:RestProps) => {
 
  // function redirectToMenu(restaurant_id: string): {
  //   
  // }
  console.log(imagesrc)
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
 
  //const imgd = new IMG()
// console.log(homepageimg)
    return (
      <div>
         <div>
       {/* <td> {restaurant.restaurant_id}</td>   */}
       <td><img  src={`../images/${restaurant.restaurant_id}.png`}  alt="Home Page Alt image " width="100px" height="100px" className='img-custom-size'/></td>
       <td className='restaurantname'>{restaurant.restaurant_name}</td>
        {/* img  src={restaurant.restaurant_url}  alt="Home Page Alt image "/> */}
        
        <td><button onClick={buttonHandler} name={restaurant.restaurant_id} className="orderbutton">Order here</button></td>
      </div>
      {/* <img  src="https://i.pinimg.com/564x/98/bf/03/98bf03d37e5fb4960c538a2922f40f13.jpg"  alt="Home Page Alt image "/> */}
      {/* <button onClick={buttonHandler} name={restaurant.restaurant_id}>Order here</button> */}
      </div>
    )
  
}

export default Restaurant


