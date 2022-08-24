import React from "react";

const CartItem = ({ data, delFromCart }) => {
  let { id, name, price, description, image } = data;

  return (
    <div style={{ borderBottom: "thin solid gray" }}>
      <h4>{name}</h4>
      <h5>{price}</h5>
      <button onClick={() => delFromCart()}>Eliminar producto</button>
    </div>
  );
};

export default CartItem;
