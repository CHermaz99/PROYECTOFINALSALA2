import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/index.css";

export const Footer = () => (
  <footer className="footer mt-auto py-3 text-center">
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
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <button type="button" className="btn btn-dark ">
              <i id="icon" className="bi bi-facebook"></i>
            </button>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <button type="button" className="btn btn-dark">
              <i id="icon" className="bi bi-instagram"></i>
            </button>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <button type="button" className="btn btn-dark">
              <i id="icon" className="bi bi-twitter"></i>
            </button>
          </a>
          <a href="https://www.whatsapp.com" target="_blank" rel="noreferrer">
            <button type="button" className="btn btn-dark">
              <i id="icon" className="bi bi-whatsapp"></i>
            </button>
          </a>
          <a href="https://google.com" target="_blank" rel="noreferrer">
            <button type="button" className="btn btn-dark">
              <i id="icon" className="bi bi-google"></i>
            </button>
          </a>
          <a href="https://www.gmail.com" target="_blank" rel="noreferrer">
            <button type="button" className="btn btn-dark">
              <i id="icon" className="bi bi-envelope"></i>
            </button>
          </a>
        </div>
      </div>
    </div>
  </footer>
);
