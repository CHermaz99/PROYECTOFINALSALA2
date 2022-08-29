import React from "react";
import { Link } from "react-router-dom";

const Carousel = () => {
  return (
    <div className="wrapper">
      <div className="card text-center">
        <div className="image">
          <video autoPlay controls>
            <source
              src="https://ver-videos.s3.eu-central-1.amazonaws.com/90_1006019-1A04118_1B000.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div className="about-product text-center">
          <h3>COLECCIÓN DE HOMBRE</h3>

          <Link to={"/category/2"} className="btn btn-success buy-now">
            {" "}
            VER{" "}
          </Link>
        </div>
      </div>
      <div className="card text-center">
        <div className="image">
          <video autoPlay controls muted>
            <source
              src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/hRV4zHgQnD_HD.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div className="about-product text-center">
          <h3>COLECCIÓN DE MUJER </h3>

          <Link to={"/category/1"} className="btn btn-success buy-now">
            {" "}
            VER{" "}
          </Link>
        </div>
      </div>
      <div class="card text-center">
        <div class="image">
          <img
            src="https://cms-cdn.flightclub.com/375/09f19803f8f5-db78-de11-5b81-0eeb6877.gif"
            width="300"
          />
        </div>

        <div class="about-product text-center">
          <h3> SNEAKERS</h3>

          <Link to={"/category/3"} className="btn btn-success buy-now">
            {" "}
            VER{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

/*Prueba*/
