import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.css";
import Product from "../component/product";
import { Link, useParams } from "react-router-dom";

export const Categories = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  useEffect(() => {
    actions.getProducts(params.id);
    console.log(params.id);
  }, [params.id]);

  return (
    <div className="container">
      <div className="row">
        {store.products.map((product) => {
          return (
            <div className="col-12 col-md-4">
              <Product
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
