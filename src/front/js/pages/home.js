import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Carousel from "../component/carrusel";
import Form from "../component/form";
import Client from "../component/client";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid">
      <div className="principal mt-20">
        <h2> DESCUBRE DA ROOM'S</h2>
      </div>
      <div class="container mt-10">
        <Carousel />
      </div>
      <div className="container">
        <div className="segundo">
          <h2>LOS PRODUCTOS MÁS DESTACADOS</h2>
        </div>
        <Client />
      </div>
      <div className="container">
        <Form />
      </div>
    </div>
  );
};

export default Home;
