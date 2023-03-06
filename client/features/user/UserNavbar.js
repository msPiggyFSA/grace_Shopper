import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const UserNavbar = () => {
  const params = useParams()
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const isAdmin = useSelector((state) => state.auth.me.admin);

  console.log(params)
  return (
  <div>
    {isLoggedIn && isAdmin ? (
          <div>
            <div>
              <Link to = {`/admin/edit/users/${params.id}`} className="nav-link">
                Edit Profile
              </Link>
              <p>View Order History</p>
            </div>
          </div>
        ): (
          <div>
            <Link to = {`/edit/users/${params.id}`} className="nav-link">
              Edit Profile
            </Link>
            <p>View Order History</p>
        </div>
        )}
  </div>
  )
};

export default UserNavbar;
