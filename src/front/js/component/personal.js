import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

const Personal = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const [text, setText] = useState({});

  return (
    <>
      <div className="bgpersonal">
        <form
          classNameName="form-control"
          onSubmit={(event) => {
            event.preventDefault();
            console.log(text);
            actions.create_user(text).then(() => {
              navigate("/");
            });
          }}
        />
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Detalles de tu cuenta
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Mis pedidos
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-contact-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-contact"
              type="button"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              Contact Us
            </button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
            tabindex="0"
          >
            <div className="rounded bg-white mt-5 mb-5">
              <div className="row">
                <div className="col-md-3 border-right">
                  <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                    <img
                      className="rounded-circle mt-5"
                      width="150px"
                      src="https://img.wattpad.com/b7bd15fec91de5555f03476d256433a6d100587b/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f4d32354a7349434b6371445953513d3d2d3930363038373238392e313631396165373666383463346635623235343331373034303231332e6a7067?s=fit&w=720&h=720"
                    />
                    <span className="font-weight-bold">Snoppy</span>
                    <span className="text-black-50">snoppy@hotmail.com</span>
                    <span> </span>
                  </div>
                </div>
                <div className="col-md-5 border-right">
                  <div className="p-3 py-5">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h4 className="text-right">Edita tu perfil</h4>
                    </div>
                    <div className="row mt-2">
                      <div className="col-md-6">
                        <div class="input-text">
                          <input
                            type="text"
                            name="name"
                            onChange={(event) => {
                              setText({
                                ...text,
                                [event.target.name]: event.target.value,
                              });
                            }}
                            required="required"
                          />
                          <small>Nombre</small>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div class="input-text">
                          <input
                            type="text"
                            name="password"
                            onChange={(event) => {
                              setText({
                                ...text,
                                [event.target.name]: event.target.value,
                              });
                            }}
                            required="required"
                          />
                          <small>Contraseña</small>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-12">
                        <div class="input-text">
                          <input
                            type="text"
                            name="email"
                            onChange={(event) => {
                              setText({
                                ...text,
                                [event.target.name]: event.target.value,
                              });
                            }}
                            required="required"
                          />
                          <small>Email</small>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div class="input-text">
                          <input
                            type="text"
                            name="address"
                            onChange={(event) => {
                              setText({
                                ...text,
                                [event.target.name]: event.target.value,
                              });
                            }}
                            required="required"
                          />
                          <small>Dirección</small>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div class="input-text">
                          <input
                            type="text"
                            name="address"
                            onChange={(event) => {
                              setText({
                                ...text,
                                [event.target.name]: event.target.value,
                              });
                            }}
                            required="required"
                          />
                          <small>Número de telefono</small>
                        </div>
                      </div>
                    </div>
                    <div className="form-group mt-5 text-center">
                      <button
                        type="submit"
                        value="editar"
                        className="btn btn-primary profile-button"
                        onClick={() => {
                          actions.personal(text).then(() => {
                            navigate("/");
                          });
                        }}
                      >
                        Guardar cambios
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="p-3 py-5">
                    <h4>
                      <b>Establece tus preferencias</b>
                    </h4>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexSwitchCheckDefault"
                      >
                        WOMEN'S WEAR
                      </label>
                    </div>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexSwitchCheckDefault"
                      >
                        MEN'S WEAR
                      </label>
                    </div>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDisabled"
                      />
                      <label
                        className="form-check-label"
                        for="flexSwitchCheckDisabled"
                      >
                        SNEAKERS
                      </label>
                    </div>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckCheckedDisabled"
                        checked
                      />
                      <label
                        className="form-check-label"
                        for="flexSwitchCheckCheckedDisabled"
                      >
                        ¡TODOS LOS PRODUCTOS!
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
          tabindex="0"
        >
          <div className="container">
            <div className="table-wrap">
              <table className="table table-borderless table-responsive">
                <thead>
                  <tr>
                    <th></th>
                    <th className="text-muted fw-600">Pedido</th>
                    <th className="text-muted fw-600">Producto</th>
                    <th className="text-muted fw-600">Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="align-middle alert" role="alert">
                    <td>
                      <input type="checkbox" id="check" />
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="img-container">
                          <img
                            src="https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-ES-Site/Sites-master/es/dw6b7323e1/BH6829_CMB_20.jpg?imwidth=915&impolicy=product"
                            alt=""
                          />
                        </div>
                        <div className="ps-3">
                          <div className="fw-600 pb-1">mark@gmail.com</div>
                          <p className="m-0 text-grey fs-09">
                            Realizado: 03/02/2012
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="fw-600">Chaqueta de hombre</div>
                    </td>
                    <td>
                      <div className="d-inline-flex align-items-center active">
                        <div className="circle"></div>
                        <div className="ps-2">Recibido</div>
                      </div>
                    </td>
                    <td>
                      <div className="btn p-0" data-bs-dismiss="alert">
                        <span className="fas fa-times"></span>
                      </div>
                    </td>
                  </tr>
                  <tr className="align-middle alert" role="alert">
                    <td>
                      <input type="checkbox" id="check" checked />
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="img-container">
                          <img
                            src="https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-ES-Site/Sites-master/es/dw2ce1eb87/EF1682_166_24.jpg?imwidth=915&impolicy=product"
                            alt=""
                          />
                        </div>
                        <div className="ps-3">
                          <div className="fw-600 pb-1">pepa@gmail.com</div>
                          <p className="m-0 text-grey fs-09">
                            Realizado: 03/02/2012
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="fw-600">Vestido de mujer</div>
                    </td>
                    <td>
                      <div className="d-inline-flex align-items-center waiting">
                        <div className="circle"></div>
                        <div className="ps-2">Preparando envio</div>
                      </div>
                    </td>
                    <td>
                      <div className="btn p-0" data-bs-dismiss="alert">
                        <span className="fas fa-times"></span>
                      </div>
                    </td>
                  </tr>
                  <tr className="align-middle alert" role="alert">
                    <td>
                      <input type="checkbox" id="check" />
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="img-container">
                          <img
                            src="https://es.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-chaqueta-de-ch%C3%A1ndal-lv-graphic-pr%C3%AAt-%C3%A0-porter--HNY86WJ67001_PM2_Front%20view.png?wid=1240&hei=1240"
                            alt=""
                          />
                        </div>
                        <div className="ps-3">
                          <div className="fw-600 pb-1">mark@gmail.com</div>
                          <p className="m-0 text-grey fs-09">
                            Realizado: 03/02/2012
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="fw-600">
                        CHAQUETA DE CHÁNDAL LV GRAPHIC
                      </div>
                    </td>
                    <td>
                      <div className="d-inline-flex align-items-center active">
                        <div className="circle"></div>
                        <div className="ps-2">Recibido</div>
                      </div>
                    </td>
                    <td>
                      <div className="btn p-0" data-bs-dismiss="alert">
                        <span className="fas fa-times"></span>
                      </div>
                    </td>
                  </tr>
                  <tr className="align-middle alert" role="alert">
                    <td>
                      <input type="checkbox" id="check" />
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="img-container">
                          <img
                            src="https://es.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-bolso-petite-malle-monogram-reverse-canvas-bolsos--M45960_PM2_Front%20view.png?wid=1240&hei=1240"
                            alt=""
                          />
                        </div>
                        <div className="ps-3">
                          <div className="fw-600 pb-1">harry@gmail.com</div>
                          <p className="m-0 text-grey fs-09">
                            Realizado: 03/02/2012
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="fw-600">BOLSO PETITE MALLE</div>
                    </td>
                    <td>
                      <div className="d-inline-flex align-items-center waiting">
                        <div className="circle"></div>
                        <div className="ps-2">Preparando envio</div>
                      </div>
                    </td>
                    <td>
                      <div className="btn p-0" data-bs-dismiss="alert">
                        <span className="fas fa-times"></span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
          tabindex="0"
        >
          <div className="container9">
            <div className="card9">
              <div className="form">
                <div className="left-side">
                  <span className="line1"></span>
                  <span className="line2"></span>
                  <span className="line3"></span>
                  <div className="contact-us">
                    <p>Contact Us</p>
                    <span></span>
                  </div>
                </div>
                <div className="right-side">
                  <div className="top-div">
                    <h2> ¿Tienes dudas? </h2>
                    <p>
                      {" "}
                      Ponte en contacto con nosotros y te solucionaremos tus
                      preguntas en menos de 24H.
                    </p>
                  </div>
                  <div className="stats">
                    <div className="stats1">
                      <i className="fa fa-map-marker"></i>
                      <span> Gran Via,12. Madrid </span>
                    </div>
                    <div className="stats1">
                      <i className="fa fa-phone"></i>
                      <span>+34 1203 153</span>
                    </div>
                    <div className="stats1">
                      <i className="fa fa-envelope"></i>
                      <span> daroomscontact@.es</span>
                    </div>
                  </div>
                  <div className="card-content">
                    <span>
                      <div className="input-text">
                        <input type="text" required="required" />
                        <small>Nombre</small>
                      </div>
                      <div className="input-text">
                        <input type="text" required="required" />
                        <small>E-mail</small>
                      </div>
                      <div className="textarea">
                        <textarea required="required"></textarea>
                        <small>Tu duda</small>
                      </div>
                    </span>
                  </div>
                  <div className="buttons">
                    <button>SEND</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Personal;
