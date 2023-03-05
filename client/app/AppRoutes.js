import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import AuthForm from "../features/auth/AuthForm";
import Home from "../features/home/Home";
import Men from "../features/section/Men";
import Women from "../features/section/Women";
import { me } from "./store";
import Category from "../features/section/Category";
import { AnimatePresence } from "framer-motion";

/**
 * COMPONENT
 */

const AppRoutes = () => {
  const location = useLocation();
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <AnimatePresence node="wait">
          <Routes location={location} key={location.key}>
            <Route path="/*" element={<Home />} />
            <Route to="/home" element={<Home />} />
          </Routes>
        </AnimatePresence>
      ) : (
        <AnimatePresence>
          <Routes location={location} key={location.key}>
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
            {/* <Route path="/category" element={<Men />} />
          <Route path="/women" element={<Women />} /> */}
          </Routes>
        </AnimatePresence>
      )}
    </div>
  );
};

export default AppRoutes;
