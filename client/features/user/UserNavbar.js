import React from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";


const UserNavbar = () => {
  const params = useParams()

  console.log(params)
  return (
  <div>
    <Link to = {`/edit/users/${params.id}`} className="nav-link">
          Edit Profile
    </Link>
    <p>View Order History</p>
  </div>
  )
};

export default UserNavbar;
