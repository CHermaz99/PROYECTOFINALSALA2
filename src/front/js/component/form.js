import React from "react";
import "../../styles/home.css";

const Form = () => {
  return (
    <>
      <div id="main-form" >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://www.versace.com/on/demandware.static/-/Library-Sites-ver-shared-trans/default/dw975055fa/images/homepage/hp-pre-fall-22-20072022-desk.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5> ÚNETE A DA ROOM'S </h5>
              <h2> INVIERTE EN TI, SIN CULPA</h2>
              <a href="#0" className="btn btn-info">
                MORE INFO
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://static.fendi.com/cms/resource/image/607362/landscape_ratio16x9/1920/1080/5713ce37664cedf58639218f77b1bb3e/DE1979EA8BAF8C4CD95F3AD7DDF3761C/herobanner-baguette-m.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>It is a long established </h5>
              <h2> fact that a reader distracted</h2>
              <a href="#0" className="btn btn-info">
                MORE INFO
              </a>
            </div>
          </div>
        </div>
      </div>
      <section className="home__form">
        <div className="container">
          <div className="home__form-container text-center">
            <h3> Únete y disfruta de un 10% de descuento  </h3>
            <p>
            Recibe información sobre eventos, colecciones y noticias exclusivas.
            </p>
            <form>
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <div className="input-box ">
                      <input
                        type="email"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        className="form-control"
                        placeholder="Email"
                        aria-label="email"
                        aria-describedby="email"
                        required
                      />
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <button type="submit" className="btn btn-danger">
                    Join
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
