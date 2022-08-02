import React, { Component } from "react";
import "../../styles/footer.css";

export const Footer = () => (
  <footer className="footer mt-auto py-3 text-center">
    <div className="container-fluid bg-dark text-white text-center">
      <div className="row align-items-start">
        <div className="col">
          <h2>DA ROOM'S</h2>
        </div>
        <div className="col"></div>
        <div className="col">
          <button id="contact" type="button" className="btn btn-dark">
            INICIO
          </button>
          <button id="contact" type="button" className="btn btn-dark">
            CONTACTO
          </button>
        </div>
      </div>
      <div className="row align-items-center">
        <div id="address" className="col">
          Gran Vía, 12 28002<br></br>MADRID
        </div>
        <div className="col">
          <button type="button" className="btn btn-dark ">
            <i id="icon" className="bi bi-facebook"></i>
          </button>
          <button type="button" className="btn btn-dark">
            <i id="icon" className="bi bi-instagram"></i>
          </button>
          <button type="button" className="btn btn-dark">
            <i id="icon" className="bi bi-twitter"></i>
          </button>
          <button type="button" className="btn btn-dark">
            <i id="icon" className="bi bi-whatsapp"></i>
          </button>
          <button type="button" className="btn btn-dark">
            <i id="icon" className="bi bi-google"></i>
          </button>
          <button type="button" className="btn btn-dark">
            <i id="icon" className="bi bi-envelope"></i>
          </button>
        </div>
        <div id="copy" className="col">
          Copyright@DaRooms 2022
        </div>
      </div>
    </div>
  </footer>
);
