import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
const Registro = () => {
  // UseEffect hace envío y verifica información
  // UseState envio y activación al registrar
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const [text, setText] = useState({});

  return (
    <>
      <form
        className="form-control"
        onSubmit={(event) => {
          event.preventDefault();
          console.log(text);
          actions.create_user(text).then(() => {
            navigate("/");
          });
        }}
      >
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
              name="name"
              onChange={(event) => {
                setText({ ...text, [event.target.name]: event.target.value });
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
              name="phone_number"
              onChange={(event) => {
                setText({ ...text, [event.target.name]: event.target.value });
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
              name="email"
              onChange={(event) => {
                setText({ ...text, [event.target.name]: event.target.value });
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
              name="address"
              onChange={(event) => {
                setText({ ...text, [event.target.name]: event.target.value });
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
              name="password"
              onChange={(event) => {
                setText({ ...text, [event.target.name]: event.target.value });
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
              name="confirm"
              onChange={(event) => {
                setText({ ...text, [event.target.name]: event.target.value });
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
              name="text7"
              onChange={(event) => {
                setText({ ...text, [event.target.name]: event.target.value });
              }}
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
            />
          </div>
          <br></br>
          <br></br>
          <div className="container-fluid col-6">
            <input type="submit" className="vamos" value="registrate" />
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
