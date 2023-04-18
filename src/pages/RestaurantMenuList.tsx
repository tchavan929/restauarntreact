import axios from 'axios';
import React, { useState, useEffect }  from 'react'
import { useParams } from 'react-router-dom';
import RestaurantMenu from '../components//RestaurantMenu';
import Search from '../components/Search';
import CartContext from '../context/CartContext ';
import { commerce } from '../lib/Commerce';

type Props = {};
type RestaurantMenuType = {
  
    restaurant_id:String;
    menu_id:String;
    cusine:String;
    name:String;
    price:String;
    desc:String;
    
  

}
const RestaurantMenuList = (props: Props) => {
  const params = useParams();
  const [search, setSearch] = useState('');
  console.log(params.id)
  const [restaurantmenu, setRestaurantmenu] = useState<RestaurantMenuType[]>([]);

  const sendGetRequest = async () => {
   // const [cart, setCart] = useState();

  /*const addProductToCart = (productId) => {
    commerce.cart.add(productId, 1)
      .then(result => {
        setCart(result.cart);
        alert("Product added to cart");
      });
  }*/
    try {
      const response = await axios.get(
        `http://localhost:4000/fetchRestaurantMenu/${params.id}`
      );
      setRestaurantmenu(response.data);
      console.log(response);
      console.log(restaurantmenu)
    } catch (err) {
      console.log(err);
    }
  };
  const filterGrocery = (name: string) => {
    if (name) {
      setSearch(name);
    } else {
      setSearch('');
    }
  };
  useEffect(() => {

    sendGetRequest();
    //commerce.cart.retrieve()
    /*.then(cart => {
      setCart(cart);
    })*/
    
     }, []);
  return (
    <div>
       {/* <CartContext.Provider value={{cart, setCart, addProductToCart}}> */}
      <Search filterTasks={filterGrocery} />
      {restaurantmenu.filter((t) => t.name.toLowerCase().includes(search.toLowerCase())).map((r) => (
        <RestaurantMenu restaurantmenu={{
    restaurant_id: r.restaurant_id,
    menu_id:r.menu_id,
    cusine:r.cusine,
    name:r.name,
    price:r.price,
    desc:r.desc
  }}/>
      ))}
      {/* </CartContext.Provider> */}
    </div>
  )
}

export default RestaurantMenuList