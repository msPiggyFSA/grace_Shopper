import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../app/store";


const UserNavbar = () => {
  return (
  <div>
    <p>Edit Profile</p>
    <p>View Order History</p>
  </div>
  )
};

export default UserNavbar;
