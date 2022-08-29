import React from "react";
import { Link } from "react-router-dom";
const Client = () => {
  return (
    <div className="container">
      <div className="bgclient">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="product-grid2">
              <div className="product-image2">
                <a href="#">
                  <img
                    className="pic-1"
                    src="https://www.versace.com/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwb95603a1/original/90_1003927-1A04155_5B040_16_SilverBaroqueSilkShirt-Shirts-versace-online-store_0_0.jpg?sw=748&sh=1050&sm=fit&sfrm=jpg"
                  />
                  <img
                    className="pic-2"
                    src="https://www.versace.com/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwcd04467c/original/90_1003927-1A04155_5B040_18_SilverBaroqueSilkShirt-Shirts-versace-online-store_0_0.jpg?sw=748&sh=1050&sm=fit&sfrm=jpg"
                  />
                </a>
                <ul className="social">
                  <li>
                    <a href="#" data-tip="Quick View">
                      <Link to={"/category/3"} ><i className="fa fa-eye"></i></Link>
                    </a>
                  </li>

                  <li>
                    <a href="#" data-tip="Add to Cart">
                      <i className="fa fa-shopping-cart"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="product-content">
                <h3 className="title">
                  <a href="#">CAMISA DE SEDA SILVER BAROQUE</a>
                </h3>
                <span className="price">950 €</span>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="product-grid2">
              <div className="product-image2">
                <a href="#">
                  <img
                    className="pic-1"
                    src="https://www.versace.com/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwf8381fef/original/90_1005835-1A04072_6D160_16_DenimPatchworkOvershirt-BlousesandTops-versace-online-store_0_0.jpg?sw=748&sh=1050&sm=fit&sfrm=jpg"
                  />
                  <img
                    className="pic-2"
                    src="https://www.versace.com/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw2de5c3d1/original/90_1005835-1A04072_6D160_18_DenimPatchworkOvershirt-BlousesandTops-versace-online-store_0_0.jpg?sw=748&sh=1050&sm=fit&sfrm=jpg"
                  />
                </a>
                <ul className="social">
                  <li>
                    <a href="#" data-tip="Quick View">
                      <i className="fa fa-eye"></i>
                    </a>
                  </li>

                  <li>
                    <a href="#" data-tip="Add to Cart">
                      <i className="fa fa-shopping-cart"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="product-content">
                <h3 className="title">
                  <a href="#">SOBRECAMISA VAQUERA DE PATCHWORK</a>
                </h3>
                <span className="price">1.790 €</span>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="product-grid2">
              <div className="product-image2">
                <a href="#">
                  <img
                    className="pic-1"
                    src="https://media.gq.com.mx/photos/6064ab7cc94329bc868c410f/master/pass/bad%20bunny%20adidas%20forum.jpg"
                  />
                  <img
                    className="pic-2"
                    src="https://media.gq.com.mx/photos/6064ab78798c042a70dae331/master/w_1600,c_limit/bad%20bunny%20adidas%20forum%20rosas.jpg"
                  />
                </a>
                <ul className="social">
                  <li>
                    <a href="#" data-tip="Quick View">
                      <i className="fa fa-eye"></i>
                    </a>
                  </li>

                  <li>
                    <a href="#" data-tip="Add to Cart">
                      <i className="fa fa-shopping-cart"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="product-content">
                <h3 className="title">
                  <a href="#">BAD BUNNY X ADIDAS FORUM</a>
                </h3>
                <span className="price">600€</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Client;
