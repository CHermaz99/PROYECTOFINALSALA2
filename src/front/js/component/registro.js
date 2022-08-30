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
    <div className="register-photo">
      <div className="form-container">
        <div className="image-holder"></div>

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
          <h2 className="text-center">
            <strong>Adentrate</strong>
            <br></br>
            en Da Room's!
          </h2>

          <div className="form-group">
            <input
              type="text"
              name="name"
              onChange={(event) => {
                setText({ ...text, [event.target.name]: event.target.value });
              }}
              className="form-control"
              placeholder="Name"
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="phone_number"
              onChange={(event) => {
                setText({ ...text, [event.target.name]: event.target.value });
              }}
              className="form-control"
              placeholder="Phone Number"
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="email"
              onChange={(event) => {
                setText({ ...text, [event.target.name]: event.target.value });
              }}
              className="form-control"
              placeholder="Email"
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="address"
              onChange={(event) => {
                setText({ ...text, [event.target.name]: event.target.value });
              }}
              className="form-control"
              placeholder="Address"
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              onChange={(event) => {
                setText({ ...text, [event.target.name]: event.target.value });
              }}
              className="form-control"
              placeholder="Password"
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              name="confirm"
              onChange={(event) => {
                setText({ ...text, [event.target.name]: event.target.value });
              }}
              className="form-control"
              placeholder="Confirm Password"
            />
          </div>
          <br></br>
          <div className="form-group">
            <div className="form-check">
              <label className="form-check-label">
                <input className="form-check-input" type="checkbox" />
                De acuerdo con los términos de uso
              </label>
            </div>
          </div>

          <div className="form-group">
            <button
              type="submit"
              value="registrate"
              className="btn btn-primary btn-block"
              onClick={() => alert("Sign in")}
            >
              Regístrate
            </button>
          </div>
          <br></br>
          <a className="already" href="/login">
            ¿Tienes cuenta?<h5>Entra si ya eres usuario</h5>
          </a>
          <br></br>
        </form>
      </div>
    </div>
  );
};

export default Registro;