import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Product = (props) => {
    return <div className="card7">
        <img src={props.image} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">Price: {props.price}$</p>
            <Link to={`/product/${props.id}`} className="btn btn-primary">
                Detail
            </Link>
        </div>
  </div>
}

Product.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string
};

export default Product