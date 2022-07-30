import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";


export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg my-navbar navbar-dark bg-dark">
			<div className="container">
				<a className="navbar-brand" href="#">Da Room's</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">Home</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">WomensWear</a>
						</li>

						<li className="nav-item">
							<a className="nav-link">MensWear</a>
						</li>
						<li className="nav-item">
							<a className="nav-link">Sneakers</a>
						</li>
					</ul>
					<form className="d-flex" role="search">
						<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
						<button className="btn btn-outline-success" type="submit">Search</button>
					</form>
				</div>
			</div>
		</nav>
	);
};