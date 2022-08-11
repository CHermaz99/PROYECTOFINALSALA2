import React, { useState } from "react";
import { Link } from "react-router-dom";

const Registro = () => {
  // UseEffect hace envío y verifica información
  // UseState envio y activación al registrar

  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");
  const [text5, setText5] = useState("");
  const [text6, setText6] = useState("");
  const [text7, setText7] = useState("");

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
              onChange={(event) => {
                setText1(event.target.value);
              }}
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
              onChange={(event) => {
                setText2(event.target.value);
              }}
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
              onChange={(event) => {
                setText3(event.target.value);
              }}
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
              onChange={(event) => {
                setText4(event.target.value);
              }}
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
              onChange={(event) => {
                setText5(event.target.value);
              }}
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
              onChange={(event) => {
                setText6(event.target.value);
              }}
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
              onChange={(event) => {
                setText7(event.target.value);
              }}
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
            <Link to="/login">
              <button
                type="button"
                className="btn btn-light btn-lg"
                onClick={() => alert("Sign in")}
              >
                SIGN IN
              </button>
            </Link>
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
