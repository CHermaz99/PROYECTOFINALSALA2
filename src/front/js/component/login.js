import React, { useEffect, useState } from "react";

const Login = () => {
  const [login, setLogin] = useState([]);

  useEffect(() => {
    fetch(
      "https://3001-chermaz99-proyectofinal-an2uc8ne5v5.ws-eu60.gitpod.io/api/user/"
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setLogin(response);
      });
  }, []);

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
          <strong>Bienvenid@</strong>
          <br></br>
          a Da Room's!
        </h2>
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
            name="password"
            onChange={(event) => {
              setText({ ...text, [event.target.name]: event.target.value });
            }}
            className="form-control"
            placeholder="Password"
          />
        </div>


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
            Entrar
          </button>
        </div>
        <br></br>
       
      </form>
    </div>
  </div>
  );
};

export default Login;
