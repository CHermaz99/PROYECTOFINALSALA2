import React from "react";
const Client = () => {
  return (
    <div className="d-flex align-items-center py-5 mh-100">    
    
        <div className="container">
            <div id="mycarousel" className="carousel slide" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-bs-target="#mycarousel" data-bs-slide-to="0" className="active"></li>
                    <li data-bs-target="#mycarousel" data-bs-slide-to="1"></li>
                    <li data-bs-target="#mycarousel" data-bs-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row">
                            <div className="col-lg-6 ">
                                <img src="https://lowpostactive.com/wp-content/uploads/2019/07/Startups-moda-1.jpg" className="d-block w-100" alt="..."/>
                            </div>
                            <div className="col-lg-6 ">
                                <div className=" d-flex flex-column justify-content-center my-5 px-3">
                                    <p className="review text-center">"Siempre consigo lo que busco, me encanta"</p>
                                    <div className="name d-flex align-items-center justify-content-center">
                                        <span className="fas fa-minus pe-1"></span>
                                        <p className="m-0"> Marta</p>
                                    </div>
                                   
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row">
                            <div className="col-lg-6 ">
                                <img src="https://img.freepik.com/foto-gratis/modelo-femenino-buen-humor-posando-despues-ir-compras_197531-16459.jpg?w=2000" className="d-block w-100" alt="..."/>
                            </div>
                            <div className="col-lg-6 ">
                                <div className=" d-flex flex-column justify-content-center my-5 px-3">
                                    <p className="review text-center">"Los envios son rápidos"</p>
                                    <div className="name d-flex align-items-center justify-content-center">
                                        <span className="fas fa-minus pe-1"></span>
                                        <p className="m-0">Carla</p>
                                    </div>
                                   
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row">
                            <div className="col-lg-6 ">
                                <img src="https://thumbs.dreamstime.com/b/foto-de-perfil-completo-un-hombre-guapo-saltando-tienda-alta-velocidad-comprando-ropa-sostiene-muchas-bolsas-llevan-negra-compras-163878019.jpg" className="d-block w-100" alt="..."/>
                            </div>
                            <div className="col-lg-6 ">
                                <div className=" d-flex flex-column justify-content-center my-5 px-3">
                                    <p className="review text-center">" Toda la ropa me llego en perfecto estado!"</p>
                                    <div className="name d-flex align-items-center justify-content-center">
                                        <span className="fas fa-minus pe-1"></span>
                                        <p className="m-0">Lorenzo</p>
                                    </div>
                                    
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};
export default Client;
