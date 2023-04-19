import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Restaurant from '../components/Restaurant';


type RestaurantType = {
  restaurant_id: string;
  restaurant_name: string;
  restaurant_url:string

};  
const RestaurantList = () => {
  
  const [restaurant, setRestaurant] = useState<RestaurantType[]>([]);
 /* const sendGetRequest = async () => {
    try {
       axios.get(
        'http://localhost:4000/fetchRestaurantList'
      ).then(res=>{
        console.log(res.data)
        setRestaurant(res.data);
      });
      
      
      console.log("check rest here "+restaurant)
    } catch (err) {
      console.log(err);
    }
  };
  /*
  /* useEffect(() => { 
    const response =  axios.get(
      'http://localhost:4000/fetchRestaurantList'
    );
    console.log(response)
    //setRestaurant(response.data);
  
  }, []);*/
 /* axios.get('http://localhost:4000/fetchRestaurantList').then((response) => {

  setRestaurant(response.data);

console.log(response.data);

});*/


//}, []);
//sendGetRequest()
/*useEffect(() => { 
  axios.get(
    'http://localhost:4000/fetchRestaurantList'
  ).then((response)=>{
    console.log(response.data)
    setRestaurant(response.data);
    console.log(restaurant)
  });


},[]);*/
const sendGetRequest = async () => {
  try {
    const response = await axios.get(
      'http://localhost:4000/fetchRestaurantList'
    );
    setRestaurant(response.data);
    console.log(response);
    console.log(restaurant)
  } catch (err) {
    console.log(err);
  }
};
useEffect(() => {

 sendGetRequest();
 
  }, []);
    return(
     
       <div className='restaurantlistdiv'>
        <table className='restaurntTable'>
          
            
          
{restaurant.map((r) => (
  <tr>
        <Restaurant restaurant={{
    restaurant_id: r.restaurant_id,
    restaurant_name: r.restaurant_name,
  }}/>
  </tr>
      ))}

      </table>
        </div>
    


);
};
export default RestaurantList; 