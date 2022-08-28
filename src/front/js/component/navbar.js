import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const Navbar = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/category")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);
  return (
    <nav className="navbar navbar-expand-lg sticky-top my-navbar">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          DA ROOM'S
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="bi bi-justify"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  mb-2 mb-lg-0">
            {categories.map((category, index) => {
              return (
                <li className="nav-item" key={index}>
                  <Link className="nav-link" to={`/category/${category.id}`}>
                    {category.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="botones-user-cart">
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={() => {
                localStorage.getItem("token")
                  ? navigate("/personal")
                  : navigate("/registro");
              }}
            >
              <i className="bi bi-person-circle fa-lg"></i>
            </button>
            <Link to="/carrito">
              <button type="button" className="btn btn-outline-success">
                <i className="bi bi-bag-heart fa-lg"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
