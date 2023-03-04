import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { userActions } from "../../app/slices/userSlice";

const UserView = (props) => {
  const dispatch = useDispatch();


  const user = useSelector((state) => {return state.auth.user});
      console.log("333333333333333333333this is", user);

  return (
    console.log("#########this is", props.props),
    console.log("#########this is"),
    <div>

      {/*if logged in
      <h1>User information</h1>
      First Name: {props.user.fName}
      Last Name: {props.user.lName}
      Username: {props.user.username}
      Password: {props.user.password}
      Email: {props.user.email}*/}
      {/* Produce form */}
      <p>Form Goes Here if not Logged in</p>
      {/* if user isn't right/ login failed */}
      <p> Uh Oh! Either you forgot your own name and password or you don't have an account with us. Try agian or Sign up here! </p>


    </div>
  );
};

export default UserView;
