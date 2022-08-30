import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Product = () => {
  const [product, setProduct] = useState();
  const params = useParams();
  const { actions, store } = useContext(Context);

  useEffect(() => {
    // Otras formas de hacerlo >>
    // https://3001-chermaz99-proyectofinal-blwubh6zyn9.ws-eu59.gitpod.io/api/product/3
    // process.env.BACKEND_URL + '/api/product/' + params.id
    fetch(`${process.env.BACKEND_URL}/api/product/${params.id}`)
      .then((data) => data.json())
      .then((data) => setProduct(data));
  }, []);
  const addToCart = (product) => {
    actions.addToCart(product);
  };

  return product ? (
    <div className="fondop">
      <div className="container-fluid">
        <div className="row">
          <div class="col-md-5">
            <img src={product.image} className="card5" alt="..." />
          </div>
          <div className="col-md-7">
            <h4 className="titulop">{product.name}</h4>
            <div className="price">
              <span className="mr-2">
                <i className="fa fa-rupee text-success"></i>
                <strong>{product.price} $</strong>
              </span>
            </div>
            <div className="d-flex flex-row">
              <div className="estrellas icons mr-2">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-o"></i>
                <i className="fa fa-star-o"></i>
              </div>
              <span id="ratings">1200 ratings &amp; 564 reviews</span>
            </div>
            <div className="d-flex align-items-center mt-4 offers mb-1">
              <i className="fa fa-check-square-o mt-1"></i>
              <span className="ml-1 font-weight-bold">
                {product.description}
              </span>
            </div>
            <div className="mt-3">
              <button
                onClick={() => addToCart(product)}
                className="btn btn-dark mr-2"
                type="button"
              >
                ADD TO CART <i class="bi bi-cart3"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    /* <h1 className="display-4">Cargando producto ...</h1> */
    <div className="container">
      <div className="row">
        <div id="loader">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="lading"></div>
        </div>
      </div>
    </div>
  );
};
