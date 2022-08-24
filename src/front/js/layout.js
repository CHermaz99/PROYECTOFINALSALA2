import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { Categories } from "./pages/Categories";
import { Product } from "./pages/product";
import { PaginaRegistro } from "./pages/paginaRegistro.js";
import { PaginaLogin } from "./pages/paginaLogin";

import injectContext from "./store/appContext";
import App from "./App";

import ScrollToTop from "./component/scrollToTop";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Carrusel from "./component/carrusel";
import { PaginaRegistro } from "./pages/paginaRegistro.js";
import { PaginaLogin } from "./pages/paginaLogin";
import { PaginaPersonal } from "./pages/paginaPersonal";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<Categories />} path="/category/:id" />
            <Route element={<PaginaRegistro />} path="/registro" />
            <Route element={<PaginaLogin />} path="/login" />
            <Route element={<Product />} path="/product/:id" />
            <Route element={<PaginaPersonal />} path="/personal" />
            <Route element={<App />} path="/carrito" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
