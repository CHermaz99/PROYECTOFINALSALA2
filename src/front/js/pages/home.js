import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Carousel from "../component/carrusel";
import Form from "../component/form";
import Client from "../component/client";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid">
      <p className="principal mt-20"><h2> DESCUBRE DA ROOM'S</h2></p>
      <div class="container mt-10">
        <Carousel />
      </div>
      <div className="container">
        <p className="segundo"><h2>LOS PRODUCTOS MÁS DESTACADOS</h2></p>
      <Client/>
      </div>
      <div className="container">
       <Form/>
        </div>
    </div>
  );
};

export default Home;
