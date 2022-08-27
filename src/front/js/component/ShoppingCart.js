import React, { useContext } from "react";
import CartItem from "./CartItem";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

// Codigo actualizado Stefany
const ShoppingCart = () => {
  const { actions, store } = useContext(Context);
  let items = [];
  return (
    <div className="container bg-white rounded-top" id="zero-pad">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-10 col-12 pt-3">
          <div className="d-flex flex-column pt-4">
            <div>
              <h5 className="text-uppercase font-weight-normal"> TU CARRITO</h5>
            </div>
          </div>
          <div className="container bg-light rounded-bottom py-4" id="zero-pad">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-10 col-12">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="px-md-0 px-1" id="footer-font">
                    <article className="row">
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
                          </>
                        );
                      })}
                    </article>
                  </div>
                </div>
              </div>
              <button
                button
                className="btn btn-sm bg-light border border-dark"
                onClick={() => actions.clearCart()}
              >
                Limpiar Carrito
              </button>
              <div>
                <Link className="btn btn-dark" to={"/pago"}>
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
// Termina codigo actualizado Stefany

/* Empieza codigo backup Eric

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

Termina codigo backup Eric */ 