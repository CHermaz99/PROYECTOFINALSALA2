import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

const Personal = () => {
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
            <br></br>a Da Room's! Area personal
          </h2>

          <br></br>
          <br></br>
          <div className="form-group">
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
        </form>
      </div>
    </div>
  );
};

export default Personal;
