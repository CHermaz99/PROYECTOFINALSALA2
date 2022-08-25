import React, { useState, useContext } from "react";
import CartItem from "./CartItem";
import { Context } from "../store/appContext";

const ShoppingCart = () => {
  const { actions, store } = useContext(Context);
  return (
    <div>
      <h3>Carrito</h3>
      <article className="box">
        <button onClick={() => actions.clearCart()}>Limpiar Carrito</button>
        <br />
        <br />
        {store.cart.map((item, index) => (
          <CartItem
            key={index}
            data={item}
            delFromCart={() => actions.removeToCart(item.id)}
          />
        ))}
      </article>
    </div>
  );
};

export default ShoppingCart;
