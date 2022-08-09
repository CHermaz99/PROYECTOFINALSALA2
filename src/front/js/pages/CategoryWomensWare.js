import React, { useContext, useEffect } from "react"
import { Context } from "../store/appContext";
import "../../styles/index.css";
import Product from "../component/product";

export const CategoryWomensWare = () => {
    const { store, actions } = useContext(Context);
    useEffect(() => {
       actions.getProducts()
    },[])

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
}
