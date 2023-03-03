import React from "react";

const OrderHistory = (props) => {
  const orders = props.props;
  return (
    <div>
      <div>Order History</div>
      {orders.map((order) => {
        return <div>{order.id}</div>;
      })}
    </div>
  );
};

export default OrderHistory;
