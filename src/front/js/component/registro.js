import React from "react";

const Registro = () => {
  // UseEffect hace envío y verifica información
  // UseState envio y activación al registrar
  return (
    <>
      <form className="form-control">
        <div className="container col-8">
          <br></br>
          <br></br>
          <div className="container col-6">
            <h1>UNETE AL CLUB</h1>
          </div>
          <br></br>
          <br></br>
          <div className="input-group input-group-lg">
            <span className="input-group-text" id="inputGroup-sizing-lg">
              Name
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
              placeholder="Nombre completo"
            />
          </div>
          <br></br>
          <div className="input-group input-group-lg">
            <span className="input-group-text" id="inputGroup-sizing-lg">
              Phone Number
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
            />
          </div>
          <br></br>
          <div className="input-group input-group-lg">
            <span className="input-group-text" id="inputGroup-sizing-lg">
              Email
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
            />
          </div>
          <br></br>
          <div className="input-group input-group-lg">
            <span className="input-group-text" id="inputGroup-sizing-lg">
              Address
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
            />
          </div>
          <br></br>
          <div className="input-group input-group-lg">
            <span className="input-group-text" id="inputGroup-sizing-lg">
              Pass
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
            />
          </div>
          <br></br>
          <div className="input-group input-group-lg">
            <span className="input-group-text" id="inputGroup-sizing-lg">
              Confirm Pass
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
            />
          </div>
          <br></br>
          <div className="input-group input-group-lg">
            <span className="input-group-text" id="inputGroup-sizing-lg">
              Large
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
            />
          </div>
          <br></br>
          <br></br>
          <div className="container-fluid col-6">
            <button type="button" className="btn btn-light btn-lg">
              CONTINUE
            </button>
            <button type="button" className="btn btn-light btn-lg">
              SIGN IN
            </button>
          </div>
        </div>
      </form>
      <div className="container-fluid col-4">
        <img
          src="https://m.media-amazon.com/images/I/41mx67OkorS._AC_SL1500_.jpg"
          className="d-block w-100"
          alt="..."
        />
      </div>
    </>
  );
};

export default Registro;
