import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Product = () => {
    const [product, setProduct] = useState()
    const params = useParams();

    useEffect(() => {
        // Otras formas de hacerlo >>
        // https://3001-chermaz99-proyectofinal-blwubh6zyn9.ws-eu59.gitpod.io/api/product/3
        // process.env.BACKEND_URL + '/api/product/' + params.id
        fetch(`${process.env.BACKEND_URL}/api/product/${params.id}`)
        .then((data) => data.json())
        .then((data) => setProduct(data));
    }, []);

    return product ? (
        <div className="container">
            <div className="row">
                <div class="card col-12">
                    <img src={product.image} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{product.name}</h5>
                        <p class="card-text">
                            <ul>
                                <li>Description: {product.description}</li>
                                <li>Price: {product.price}</li>
                                <li>Stock: {product.stock}</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )   :   ( 
        <h1 className="display-4">Cargando producto ...</h1>
    );
};