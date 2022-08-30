import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

const Login = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const [text, setText] = useState({});

  return (
    <div className="register-photo">
      <div className="form-container">
        <div className="image-holder"></div>

        <div
          className="form-control"
          /*  onSubmit={(event) => {
            event.preventDefault();
            console.log(text);
            actions.login(text).then(() => {
              navigate("/");
            });
          }} */
        >
          <br></br>
          <br></br>
          <h2 className="text-center">
            <div class="login1">
              <h1>Bienvenid@ de nuevo</h1>
            </div>
          </h2>
          <br></br>
          <br></br>
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
          <br></br>
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
          <br></br>
          <div className="form-group">
            <button
              type="submit"
              value="registrate"
              className="btn btn-primary btn-block"
              onClick={() => {
                actions.login(text).then(() => {
                  navigate("/");
                });
              }}
            >
              Entrar
            </button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

