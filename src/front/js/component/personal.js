import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

const Personal = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const [text, setText] = useState({});

  return <h1>Hola</h1>;
};

export default Personal;
