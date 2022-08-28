import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/index.css";

export const Footer = () => (
  <footer className="footer mt-auto text-center">
    <div className="container-fluid bg-dark text-white text-center">
      <div className="row align-items-start">
        <div className="darooms">
          <Link to="/" className="navbar-brand">
            <h2>DA ROOM'S</h2>
          </Link>
        </div>
      </div>
      <div id="address">Calle Gran Vía 12, 28002, MADRID</div>
      <div id="copy">Copyright@DaRooms 2022</div>
      <div className="row align-items-center">
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
      </div>
    </div>
  </footer>
);
