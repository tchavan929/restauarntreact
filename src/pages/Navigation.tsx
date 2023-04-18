import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext, { AuthContextType } from '../context/AuthContext';
import { useNavigate } from 'react-router';

const Navigation = () => {
    const auth = useContext(AuthContext) as AuthContextType;
    const navigate = useNavigate();
    const logoutuser=()=>{
        auth.logout();
navigate('/Home');
    }
    return(
        <nav>
            <ul>
            <   li>
                    <NavLink to="/Home" >HomePage</NavLink>
                </li>
                {!auth.isLoggedIn && (
                <li>
                    <NavLink to="/Login" >Login</NavLink>
                </li>
                )}
                 {!auth.isLoggedIn && (
                <li>
                    <NavLink to="/Registration" >Registration</NavLink>
                </li>
                 )}
                <li>
                    <NavLink to="/RestaurantList" >RestaurantList</NavLink>
                </li>
              
                {/* {auth.isLoggedIn && (
                <li>
                    <NavLink to="/RestaurantMenuList" >RestaurantMenuList</NavLink>
                </li>
                )} */}
                 {auth.isLoggedIn && (
                    
                    <li>
                        <NavLink to="/UserProfile" >User Profile</NavLink>
                    </li>
                    )}
                {auth.isLoggedIn && (
                    
                <li>
                    <NavLink to="/Logout" onClick={logoutuser}>Logout</NavLink>
                </li>
                )}

                
            </ul>
        </nav>
    );
};
export default Navigation; 
