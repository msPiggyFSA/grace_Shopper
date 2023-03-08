import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { fetchAllUsers, userActions } from "../../app/slices/userSlice";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";


const AdminAllUserView = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

    const users = useSelector((state) => {
    return state.users.users.flat()
    });

      console.log("333333333333333333333this is user 2", users);
      // console.log("single user", users[0]);
      // console.log ("props", props)

  return (
    <div>
      <h1>All Users</h1>
        {users.map((user)=>{
          return(
         <div>
          <Link to={`/admin/users/${user.id}`}>{user.username}</Link>
          <Button>
            <Link to={`/admin/edit/users/${user.id}`}>
              Edit User
            </Link>
          </Button>
          </div>
          )
        })}
    </div>
  );
};

export default AdminAllUserView;
