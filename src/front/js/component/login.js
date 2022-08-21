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
          <br></br>
          <br></br>
          <h2 className="text-center">
            <strong>Bienvenid@</strong>
            <br></br>
            <br></br>a Da Room's!
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
              type="text"
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
              onClick={() => alert("Login")}
            >
              Entrar
            </button>
            <br></br>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
