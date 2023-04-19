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
      <div className="card restaurant-card">
      <div className="card-body">
        <div className="row">
          <div className="col-md-3">
            <img src={`../images/${restaurant.restaurant_id}.png`} alt="Restaurant image" className="img-fluid restaurant-image" />
          </div>
          <div className="col-md-6">
            <h5 className="card-title restaurant-name">{restaurant.restaurant_name}</h5>
          </div>
          <div className="col-md-3 d-flex justify-content-end align-items-center">
            <button onClick={buttonHandler} name={restaurant.restaurant_id} className="btn btn-warning order-button">Order here</button>
          </div>
        </div>
      </div>
    </div>
    )
  
}

export default Restaurant


