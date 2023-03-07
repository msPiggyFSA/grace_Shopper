import React from 'react'
import { Link } from "react-router-dom";
import "../css/Cart.css";

function CheckoutUnsuccess() {
  return (
		<div>
			<h1>Oh no, your payment failed</h1>
			<h3 className="checkout-confirmation">
				your order could not be processed! please try again
			</h3>
		</div>
	);
}

export default CheckoutUnsuccess