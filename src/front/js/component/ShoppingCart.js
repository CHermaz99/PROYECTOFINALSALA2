import React, { useContext } from "react";
import CartItem from "./CartItem";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  const { actions, store } = useContext(Context);
  let items = [];
  return (
    <div>
      <h3>Carrito</h3>
      <article className="box">
        <button onClick={() => actions.clearCart()}>Limpiar Carrito</button>
        <br />
        <br />
        {store.cart.map((item, index) => {
          items = [...items, item.price];
          let total = items.reduce((a, b) => a + b);
          return (
            <>
              <CartItem
                key={index}
                data={item}
                delFromCart={() => actions.removeToCart(item.id)}
              />
              <div className="container">
                <h4> Total: {total}</h4>
              </div>
              <div>
                <Link className="btn btn-dark" to={"/pago"} >
                  Checkout
                </Link>
              </div>
            </>
          );
        })}
      </article>
    </div>
  );
};

export default ShoppingCart;
