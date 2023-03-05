import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'

function EditUserProfile() {

	return (
		<div className="form-group">
			<div>Edit Your Account Information</div>
			<input
				placeholder="Username"
				type="text"
				value={form.Username}
			/>
			<input
				placeholder="First?"
				type="number"
				value={form.First}
			/>
			<input
				placeholder="image URL"
				type="text"
				value={form.Last}
			/>
      <input
				placeholder="image URL"
				type="text"
				value={form.Email}
			/>
      <input
				placeholder="image URL"
				type="text"
				value={form.Password}
			/>
			<div>
				<button
					onClick={() => {
						// navigate("/home");
            console.log(params, 'this is params');
					}}>
					Submit
				</button>
			</div>
		</div>
	);
}
export default EditUserProfile
