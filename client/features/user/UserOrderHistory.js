import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { fetchSingleUser, userActions } from "../../app/slices/userSlice";
import UserNavbar from "./UserNavbar"
import { fetchAllCarts } from "../../app/slices/cartSlice";


const UserOrderHistory = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCarts(params.id));
  }, []);

    const orders = useSelector((state) => {
    return state.carts;
    });


  console.log(params)
  console.log("carts babyyyyyyyyyy", orders)


  return (
    <div>
      {/* If admin = true show admin CRUD controls */}
      {/* If loggin = true show user profile with editing options*/}
      {/*Add user profile tab to navbar, add order history, cart, edit profile page as subcats*/}
      <h1>Your Account</h1>
      <UserNavbar />
      {orders.map((order)=>{
          return(
            <div>
              {order.createdAt}
            </div>
          )
        })}

      {/* If loggin = false display error msg*/}
        <p> Sorry, It doesn't seem like you're logged in. Login or Sign Up. Otherwise, click here to return Home.</p>
    </div>
  );
};

export default UserOrderHistory;
