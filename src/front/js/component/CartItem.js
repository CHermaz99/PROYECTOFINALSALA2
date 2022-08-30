import React from "react";

const CartItem = ({ data, delFromCart }) => {
  let { id, name, price, description, image } = data;

  return (
    <div class="container bg-white rounded-top" id="zero-pad">
      <div class="row d-flex justify-content-center">
        <div class="d-flex flex-row px-lg-5 mx-lg-5 mobile">
          <div class="d-flex flex-row justify-content-between align-items-center pt-lg-4 pt-2 pb-3 border-bottom mobile">
            <div class="d-flex flex-row px-lg-5 mx-lg-5 mobile">
              <div>
                <img src={image} width="150" height="150" alt="" id="image" />
              </div>
              <div class="d-flex flex-row px-lg-5 mx-lg-5 mobile">
                <div>
                  <h6>{name}</h6>
                </div>
                <div class="pl-md-0 pl-1">
                  {" "}
                  <b>{price}$</b>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex">
            <div class="tooltip-container"
            onClick={() => delFromCart()}>
              <button class="onbutton" data-tooltip="Are you sure?">
                Borrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
