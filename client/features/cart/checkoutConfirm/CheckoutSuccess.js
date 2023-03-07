import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Cart.css'

function CheckoutSuccess() {
  return (
		<div>
			<h1>Thank You!</h1>
			<h3 className="checkout-confirmation">
				A confirmation has been sent to your email!
				<br />
				While you are here, join our list for dicounts
			</h3>
			<label htmlFor="list-serv">Email Address: </label>
			<input name="list-serv" type="text" />
			<h2 className="checkout-confirmation">
				or check out our other products <Link to="/home">here!</Link>
			</h2>
		</div>
	);
}

export default CheckoutSuccess