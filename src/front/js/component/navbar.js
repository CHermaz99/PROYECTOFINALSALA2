import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import {}
import "../../styles/home.css";

export const Navbar = () => {
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
        <Link to="/" className="btn navbar-brand ">
          DA ROOM'S
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button className="btn btn-outline-secondary" type="submit">
              <i className="bi bi-search fa-lg"></i>
            </button>
          </form>
          <div className="botones-user-cart">
            <Link to="/registro">
              <button type="button" className="btn btn-outline-secondary">
                <i className="bi bi-person-circle fa-lg"></i>
              </button>
            </Link>
            <button type="button" className="btn btn-outline-secondary">
              <i className="bi bi-bag-heart fa-lg"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
