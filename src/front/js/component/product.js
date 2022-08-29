import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const Product = (props) => {
  const [product, setProduct] = useState();
  const params = useParams();
  const { actions, store } = useContext(Context);
  const addToCart = (product) => {
    actions.addToCart(product);
  };

  return (
    <div className="container-fluid mt-3 mb-3">
      <div className="row g-2">
        <div className="col-md-10">
          <div className="card4">
            <div className="img-container">
              <div className="d-flex justify-content-between align-items-center p-2 first">
                {" "}
                <span className="wishlist">
                  <i className="fa fa-heart"></i>
                </span>{" "}
              </div>{" "}
              <img src={props.image} className="img-fluid" />
            </div>
            <div className="product-detail-container">
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="mb-0">{props.name}</h6>{" "}
                <span className="text-danger font-weight-bold">
                  {props.price}$
                </span>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-2">
                <div className="ratings">
                  {" "}
                  <i className="fa fa-star"></i> <span>5</span>{" "}
                </div>
                <div className="size">
                  {" "}
                  <label className="radio">
                    {" "}
                    <input type="radio" name="size1" value="small" />{" "}
                    <span>S</span>{" "}
                  </label>{" "}
                  <label className="radio">
                    {" "}
                    <input
                      type="radio"
                      name="size1"
                      value="Medium"
                      checked
                    />{" "}
                    <span>M</span>{" "}
                  </label>{" "}
                  <label className="radio">
                    {" "}
                    <input type="radio" name="size1" value="Large" />{" "}
                    <span>L</span>{" "}
                  </label>{" "}
                </div>
              </div>
              <div>
                <Link
                  to={`/product/${props.id}`}
                  className="btn btn-danger btn-block mt-3"
                >
                  Ver mÃ¡s
                </Link>
              </div>
              <div>
                <button
                  onClick={() => addToCart(props.product)}
                  className="btn btn-danger btn-block mt-3"
                  type="button"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  product: PropTypes.object,
};

export default Product;

/* Copia backup

  const Product = (props) => {
      return <div classNameName="card7">
          <img src={props.image} classNameName="card-img-top" alt="..." />
          <div classNameName="card-body">
              <h5 classNameName="card-title">{props.name}</h5>
              <p classNameName="card-text">Price: {props.price}$</p>
              <Link to={`/product/${props.id}`} classNameName="btn btn-primary">
                  Detail
              </Link>
          </div>
  </div>
  }

*/