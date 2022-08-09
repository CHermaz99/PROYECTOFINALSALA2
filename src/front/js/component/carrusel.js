import React from "react";

const Carousel = () => {
  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img
            src="https://www.prada.com/content/dam/pradanux/e-commerce/2022/07/co_26/collections/woman/card_1/2x2_DT.jpg/_jcr_content/renditions/cq5dam.web.1680.1680.webp"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>PRADA</h5>
            <p>Camisa de popelín bordada € 1.180</p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img
            src="https://www.versace.com/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw5f4e3ceb/original/90_1005163-1A03453_2D470_15_RoyalRebellionDenimJacket-Jackets-versace-online-store_0_0.jpg?sw=748&sh=1050&sm=fit&sfrm=jpg"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5> VERSACE</h5>
            <p> CHAQUETA VAQUERA ROYAL REBELLION 1.495 €</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://cdn-images.farfetch-contents.com/18/53/17/51/18531751_40339936_2048.jpg?c=3"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5> OFF WHITE</h5>
            <p>Off Stamp Ribbed Long Dress 385 €</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
