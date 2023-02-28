import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AuthForm from '../features/auth/AuthForm';
import Home from '../features/home/Home';
import Men from '../features/section/Men';
import Women from '../features/section/Women';
import { me } from './store';

/**
 * COMPONENT
 */

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
		<div>
			<Routes>
				<Route path="/men" element={<Men />} />
				<Route to="/women" element={<Women />} />
			</Routes>
			{isLoggedIn ? (
				<Routes>
					<Route path="/*" element={<Home />} />
					<Route to="/home" element={<Home />} />
				</Routes>
			) : (
				<Routes>
					<Route
						path="/*"
						element={<AuthForm name="login" displayName="Login" />}
					/>
					<Route
						path="/login"
						element={<AuthForm name="login" displayName="Login" />}
					/>
					<Route
						path="/signup"
						element={<AuthForm name="signup" displayName="Sign Up" />}
					/>
				</Routes>
			)}
		</div>
	);
};

export default AppRoutes;
