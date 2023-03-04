import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { fetchAllUsers, userActions } from "../../app/slices/userSlice";


const UserView = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

    const users = useSelector((state) => {
    return state.users.users.flat();
    });

      console.log("333333333333333333333this is user 2", users);
      console.log("single user", users[0]);
      console.log ("props", props)

  return (
    <div>
      <h1>User information</h1>
      First Name: {props.user.fName}
      Last Name: {props.user.lName}
      Username: {props.user.username}
      Password: {props.user.password}
      Email: {props.user.email}
    </div>
  );
};

export default UserView;
