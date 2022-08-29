import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../component/CheckoutForm";
const promise = loadStripe("pk_test_51LakrAD6PMviDHCnMlvyJWZCGdEuKshYerVWnrMYtdv9tAcS0GDHQV3P5KnSQLvCsgs0qFivsVqQshuIzS0LNaSV00qEBo5KlP");

export const Payment = () => {
  const { store, actions } = useContext(Context);
  

  return (
    <div className="container">
      <div className="row">
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
      </div>
    </div>
  );
};