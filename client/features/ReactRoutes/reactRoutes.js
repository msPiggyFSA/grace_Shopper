import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Contact from "../footer/Contact";
import About from "../footer/About";
import Refund from "../footer/Feedback";
import Home from "../home/Home";
import SingleProductView from "../SingleProduct/SingleProductView";
import Category from "../section/Category";
import CartView from "../cart/CartView";
import AddProduct from "../admin/AddProduct";
import AuthForm from "../auth/AuthForm";
import SignUpForm from "../auth/SignUpForm";
// import CartProducts from "../cart/CartProduct";
import EditProduct from "../admin/EditProduct";
import UserProfile from "../user/UserProfile";
import EditUserProfilePage from "../user/EditUserProfilePage";
import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import AdminSingleUser from "../admin/AdminSingleUser";
import AdminAllUserView from "../admin/AdminAllUserView";
import Combined from "../auth/Combined.js";
<<<<<<< HEAD
import Feedback from "../footer/Feedback";
=======
>>>>>>> 7582a3200b428e405ab480fc6235f2f0a95bd956
import OrderHistory from "../cart/OrderHistory";
import SingleOrder from "../cart/SingleOrder";
import CheckoutSuccess from "../cart/checkoutConfirm/CheckoutSuccess";
import CheckoutUnsuccess from "../cart/checkoutConfirm/CheckoutUnsuccess";

const ReactRoute = () => {
  const isAdmin = useSelector((state) => state.auth.me.admin) === true;
  const location = useLocation();
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  return (
<<<<<<< HEAD
    <AnimatePresence node="wait">
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/about" element={<About />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/product/:id" element={<SingleProductView />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/cart" element={<CartView />} />
        {/* <Route path="/cartProducts" element={<CartProducts />} /> */}
        <Route path="/login" element={<Combined />} />
        <Route path="/signup" element={<Combined />} />
        <Route path="/users/:id" element={<UserProfile />} />
        {isLoggedIn && isAdmin ? (
          <>
            <Route path="/addprod" element={<AddProduct />} />
            <Route path="/product/edit/:id" element={<EditProduct />} />
            <Route path="/users/:id" element={<UserProfile />} />
            <Route path="/admin/viewAllUsers" element={<AdminAllUserView />} />
            <Route path="/admin/users/:id" element={<AdminSingleUser />} />
            <Route
              path="/admin/edit/users/:id"
              element={<EditUserProfilePage />}
            />
          </>
        ) : isLoggedIn ? (
          <>
            <Route path="/users/:id" element={<UserProfile />} />
            <Route path="/edit/users/:id" element={<EditUserProfilePage />} />
          </>
        ) : (
          <></>
        )}
      </Routes>
    </AnimatePresence>
  );
=======
		<AnimatePresence node="wait">
			<Routes location={location} key={location.key}>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/about" element={<About />} />
				<Route path="/refund" element={<Refund />} />
				<Route path="/product/:id" element={<SingleProductView />} />
				<Route path="/category/:id" element={<Category />} />
				<Route path="/cart" element={<CartView />} />
				{/* <Route path="/cartProducts" element={<CartProducts />} /> */}
				<Route path="/login" element={<Combined />} />
				<Route path="/signup" element={<Combined />} />
				{/* <Route path="/users/:id" element={<UserProfile />} />
				<Route path="/pastorders" element={<OrderHistory />} />
				<Route path="/pastorders/:id" element={<SingleOrder />} /> */}
				<Route path="order/success" element={<CheckoutSuccess/>} />
				<Route path="order/unsuccess" element={<CheckoutUnsuccess/>}/>
				{isLoggedIn && isAdmin ? (
					<>
						<Route path="/addprod" element={<AddProduct />} />
						<Route path="/product/edit/:id" element={<EditProduct />} />
						<Route path="/users/:id" element={<UserProfile />} />
						<Route path="/admin/viewAllUsers" element={<AdminAllUserView />} />
						<Route path="/admin/users/:id" element={<AdminSingleUser />} />
						<Route
							path="/admin/edit/users/:id"
							element={<EditUserProfilePage />}
						/>
					</>
				) : isLoggedIn ? (
					<>
						<Route path="/users/:id" element={<UserProfile />} />
						<Route path="/edit/users/:id" element={<EditUserProfilePage />} />
            <Route path="/users/:id" element={<UserProfile />} />
            <Route path="/pastorders" element={<OrderHistory />} />
            <Route path="/pastorders/:id" element={<SingleOrder />} />
					</>
				) : (
					<></>
				)}
			</Routes>
		</AnimatePresence>
	);
>>>>>>> 7582a3200b428e405ab480fc6235f2f0a95bd956
};

export default ReactRoute;
