import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom'
import { fetchSingleUser, userActions } from "../../app/slices/userSlice";
import { authenticate } from "../../app/store";
import { editUserProfile } from '../../app/slices/userSlice';

function EditUserProfilePage() {
{/*	validate if current user is same as profile  or is admin to allow edits*/}
	const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
	const { error } = useSelector((state) => state.auth);

	useEffect(() => {
    dispatch(fetchSingleUser(params.id));
  }, [edit]);

    const user = useSelector((state) => {
    return state.users.singleUser;
    });

		const [edit, setEdit] = useState(user);

		useEffect(() => {setEdit(user)}, [user]);

		console.log ("EDITTTTTTTTT", edit);
		console.log ("userrrrrrrrr", user);

		const handleSubmit = (evt) => {
			evt.preventDefault();
			const formName = evt.target.name;
			const username = evt.target.username.value;
			const password = evt.target.password.value;
			const fName = evt.target.fName.value
			const lName = evt.target.lName.value
			const email = evt.target.email.value
			console.log(formName, username, ' thisis formname, user, password')
			dispatch(authenticate({ username, fName, lName, email, password, method: formName }));
			// dispatch(createNewUser({form}))
			if (!error) {
				dispatch(editUserProfile({edit}))
				navigate(`/login`)
			} else {
				// navigate("/home");
			}

			console.log(error);
		};
		const changeValue = (prop) => (evt) => {
			evt.preventDefault();
			return setEdit({
				...edit,
				[prop]: evt.target.value,
			});

		};

	return (
		<form onSubmit={handleSubmit}>
		<div className="form-group">
			<h1>Edit Your Account Information</h1>
			<label htmlFor="fName">
            First Name:
      </label>
			<input
				name="fName"
				type="text"
				value={`${edit.fName}`}
				onChange={changeValue("fName")}
			/>
			<label htmlFor="lName">
            Last Name:
      </label>
			<input
				value={`${edit.lName}`}
				name="lName"
				type="text"
				onChange={changeValue("lName")}
			/>
			<label htmlFor="username">
            Username:
      </label>
			<input
				value={`${edit.username}`}
				name="username"
				type="text"
				onChange={changeValue("username")}
			/>
			<label htmlFor="email">
            E-Mail:
      </label>
      <input
				value={`${edit.email}`}
				name="email"
				type="text"
				onChange={changeValue("email")}
			/>
			<label htmlFor="password">
            Password:
      </label>
      <input
				placeholder={`${edit.password}`}
				name="password"
				type="text"
				onChange={changeValue("password")}
			/>
			<label htmlFor="shipping">
            Shipping Address:
      </label>
			<input
				value={`${edit.shipping}`}
				name="shipping"
				type="text"
				onChange={changeValue("shipping")}
			/>
			<label htmlFor="billing">
            Billing Address:
      </label>
			<input
				value={`${edit.billing}`}
				name="billing"
				type="text"
			/>
			<div>
				<button
					onClick={() => {
						// navigate("/UserProfile");
            console.log(params, 'this is params');
					}}>
					Submit Changes
				</button>
				</div>
		</div>
	</form>
	);
}
export default EditUserProfilePage
