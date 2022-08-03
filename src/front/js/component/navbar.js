import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";


export const Navbar = () => {
	return (

		<nav className="navbar navbar-expand-lg sticky-top my-navbar">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">DA ROOM'S</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link" href="#">WomensWear</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">MensWear</a>
						</li>
							<li className="nav-item">
							<a className="nav-link" href="#">Sneakers</a>
						</li>
					</ul>
					<form className="d-flex" role="search">
						<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
						<button className="btn btn-outline-secondary" type="submit"><i className="bi bi-search fa-lg"></i></button>
					</form>
					<div className="botones-user-cart">
						<button type="button" className="btn btn-outline-secondary"><i className="bi bi-person-circle fa-lg"></i></button>
						<button type="button" className="btn btn-outline-secondary"><i className="bi bi-bag-heart fa-lg"></i></button>
					</div>
				</div>
			</div>
		</nav>

	);
};