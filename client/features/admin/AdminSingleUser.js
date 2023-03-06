import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { fetchSingleUser, userActions } from "../../app/slices/userSlice";
import UserNavbar from "../user/UserNavbar"


const AdminSingleUser = () => {
	const navigate = useNavigate();
	const params = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchSingleUser(params.id));
	}, []);

	const user = useSelector((state) => {
		return state.users.singleUser;
	});

	console.log("##############################single user", user);

	return (
		<div>
			{/* If admin = true show admin CRUD controls */}
			{/* If loggin = true show user profile with editing options*/}
			{/*Add user profile tab to navbar, add order history, cart, edit profile page as subcats*/}
			<h1>User Information</h1>
			<UserNavbar />
			<p>Username: {user.username}</p>
			<p>First Name: {user.fName}</p>
			<p>Last Name: {user.lName}</p>
			<p>Email: {user.email}</p>
			<p>Password: </p>
			<p>Shipping Address:</p>
			<p>Billing Address:</p>
			{/* If loggin = false display error msg*/}
			<p>
				{" "}
				Sorry, It doesn't seem like you're logged in. Login or Sign Up.
				Otherwise, click here to return Home.
			</p>
		</div>
	);
};

export default AdminSingleUser;
