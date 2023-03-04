import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authenticate } from "../../app/store";
import { Link, useNavigate } from "react-router-dom";

/**
  The AuthForm component can be used for Login or Sign Up.
  Props for Login: name="login", displayName="Login"
  Props for Sign up: name="signup", displayName="Sign Up"
**/

const SignUpForm = ({ name, displayName }) => {
  const [form, setForm] = useState({
    username: "", 
    password: '',
    email: '',
    fName:'',
    lName:''
  })
  console.log(form)

  const { error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formName = evt.target.name;
    const username = evt.target.username.value;
    const password = evt.target.password.value;
    dispatch(authenticate({ username, password, method: formName }));
    if (!error) {
      // navigate("/home");
    } else {
      // navigate("/home");
    }

  
    console.log(error);
  };
const changeValue = (prop)=>(event)=>{
    setForm({
        ...form,
        [prop]:event.target.value
    })
  }
  return (
    <div>
      <form onSubmit={handleSubmit} name={name}>
        <div>
        <div>
          <label htmlFor="fName">
            <small>First Name</small>
          </label>
          <input name="fName" type="fName" value={form.fName} onChange={changeValue('fName')}/>
        </div>
        <div>
          <label htmlFor="lName">
            <small>Last Name</small>
          </label>
          <input name="lName" type="lName" value={form.lName} onChange={changeValue('lName')}/>
        </div>
          <label htmlFor="username">
            <small>Username</small>
          </label>
          <input name="username" type="text" value={form.username} onChange={changeValue('username')}/>
        </div>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input name="password" type="password" value={form.password} onChange={changeValue('password')} />
        </div>
        <div>
          <label htmlFor="email">
            <small>Email</small>
          </label>
          <input name="email" type="text" value={form.email} onchange={changeValue('email')}/>
        </div>
        <div>
          <button type="submit">{displayName}</button>
        </div>
        {error && <div> {error} </div>}
      </form>
    </div>
  );
};

export default SignUpForm;
