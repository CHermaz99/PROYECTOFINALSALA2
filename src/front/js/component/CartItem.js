import React from "react";

const CartItem = ({ data, delFromCart }) => {
  let { id, name, price, description, image } = data;

  return (
    <div style={{ borderBottom: "thin solid gray" }}>
      <div className="imageCart">
        <img src={image} />
      </div>
      <br />
      <h5>{name}</h5>
      <h5>{price}.00$</h5>
      <br />
      <button onClick={() => delFromCart()}>Eliminar producto</button>
      <br />
      <br />
    </div>
  );
};

export default CartItem;
