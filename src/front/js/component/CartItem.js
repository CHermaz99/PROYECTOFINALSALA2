import React from "react";

const CartItem = ({ data, delFromCart }) => {
  let { id, name, price, description, image } = data;

  return (
    <div class="container bg-white rounded-top" id="zero-pad">
      <div class="row d-flex justify-content-center">
        <div class="col-lg-10 col-12 pt-3">
        <div class="d-flex flex-row justify-content-between align-items-center pt-lg-4 pt-2 pb-3 border-bottom mobile">
                <div class="d-flex flex-row align-items-center">
                    <div><img src={image} width="150" height="150" alt="" id="image"/></div>
                    <div class="d-flex flex-column pl-md-3 pl-1">
                        <div><h6>{name}</h6></div>
                        <div >Art.No:<span class="pl-2">{id}</span></div>
                        <br></br>
                        <br></br>
                        <div>DESCRIPCIÓN: <span class="pl-3">{description}</span></div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div class="pl-md-0 pl-1"> PRECIO:<b>{price}$</b></div>
                    </div>                    
                </div>
                </div>
          <div class="d-flex">
          <button className= "btn btn-sm bg-light border border-dark" onClick={() => delFromCart()}>Eliminar producto</button>
         </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
