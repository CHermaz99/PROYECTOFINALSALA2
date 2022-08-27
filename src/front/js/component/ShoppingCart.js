import React, { useState, useContext } from "react";
import CartItem from "./CartItem";
import { Context } from "../store/appContext";

const ShoppingCart = () => {
  const { actions, store } = useContext(Context);
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
                    <article classNameName="row">
                      {store.cart.map((item, index) => (
                        <CartItem
                          key={index}
                          data={item}
                          delFromCart={() => actions.removeToCart(item.id)}
                        />
                      ))}
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
              <b className="pl-md-4">
                SUBTOTAL<span className="pl-md-4">$61.78</span>
              </b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
