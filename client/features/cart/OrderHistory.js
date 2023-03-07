import React from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const OrderHistory = (props) => {
  const navigate = useNavigate();
  const fulfilled = useSelector((state) => {
    return state.cart.userfulfilled.flat();
  });

  const orders = props.props;
  return (
    <div>
      <div>Order History</div>
      {fulfilled.map((order) => {
        return (
          <div
            key={uuidv4()}
            onClick={() => {
              console.log(fulfilled);
              navigate("/pastorders/" + order.id);
            }}
          >
            <div>#{order.id}</div>
            <div>{order.createdAt}</div>
          </div>
        );
      })}
    </div>
  );
};

export default OrderHistory;
