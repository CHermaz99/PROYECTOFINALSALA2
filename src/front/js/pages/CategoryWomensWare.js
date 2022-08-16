import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.css";
import Product from "../component/product";
import { Link, useParams } from "react-router-dom";

export const CategoryWomensWare = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [category, setCategory] = useState(params.id);
  useEffect(() => {
    if (store.activeCategory != params.id) {console.log(store.activeCategory)}
    actions.getProducts(store.activeCategory)
    console.log(params.id);
  }, []);

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
