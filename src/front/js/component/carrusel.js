import React from "react";

const Carousel = () => {
  return (
    <div className="row">
        <div className="col-12 pb-5">
           
            <section className="row">
               
                <div className="col-12 col-md-6 pb-0 pb-md-3 pt-2 pr-md-1">
                    <div id="featured" className="carousel slide carousel" data-ride="carousel">
                     
                        <ol className="carousel-indicators top-indicator">
                            <li data-target="#featured" data-slide-to="0" className="active"></li>
                            <li data-target="#featured" data-slide-to="1"></li>
                            <li data-target="#featured" data-slide-to="2"></li>
                            <li data-target="#featured" data-slide-to="3"></li>
                        </ol>
                        
                      
                        <div className="carousel-inner">
                      
                            <div className="carousel-item active">
                                <div className="card border-0 rounded-0 text-light overflow zoom">
                                    <div className="position-relative">
                                       
                                        <div className="ratio_left-cover-1 image-wrapper">
                                            <a href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
                                                <img className="img-fluid w-100"
                                                     src="https://www.prada.com/content/dam/pradanux/e-commerce/2022/07/co_26/collections/woman/card_1/2x2_DT.jpg/_jcr_content/renditions/cq5dam.web.1680.1680.webp"
                                                     alt="Bootstrap news template"/>
                                            </a>
                                        </div>
                                        <div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                          
                                            <a href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
                                                <h2 className="h3 post-title text-white my-1">Bootstrap 4 template news portal magazine perfect for news site</h2>
                                            </a>
                                          
                                            <div className="news-meta">
                                                <span className="news-author">by <a className="text-white font-weight-bold" href="../category/author.html">Jennifer</a></span>
                                                <span className="news-date">Oct 22, 2019</span>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            
                       
                            <div className="carousel-item">
                                <div className="card border-0 rounded-0 text-light overflow zoom">
                                    <div className="position-relative">
                                      
                                        <div className="ratio_left-cover-1 image-wrapper">
                                            <a href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
                                                <img className="img-fluid w-100"
                                                     src="https://bootstrap.news/source/img2.jpg"
                                                     alt="Bootstrap news theme"/>
                                            </a>
                                        </div>
                                        <div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                     
                                            <a href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
                                                <h2 className="h3 post-title text-white my-1">Walmart shares up 10% on online sales lift</h2>
                                            </a>
                                         
                                            <div className="news-meta">
                                                <span className="news-author">by <a className="text-white font-weight-bold" href="../category/author.html">Jennifer</a></span>
                                                <span className="news-date">Oct 22, 2019</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                           
                            <div className="carousel-item">
                                <div className="card border-0 rounded-0 text-light overflow zoom">
                                    <div className="position-relative">
                                      
                                        <div className="ratio_left-cover-1 image-wrapper">
                                            <a href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
                                                <img className="img-fluid w-100"
                                                     src="https://bootstrap.news/source/img3.jpg"
                                                     alt="Bootstrap blog template"/>
                                            </a>
                                        </div>
                                        <div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                          
                                            <a href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
                                                <h2 className="h3 post-title text-white my-1">Bank chief warns on Brexit staff moves to other company</h2>
                                            </a>
                                         
                                            <div className="news-meta">
                                                <span className="news-author">by <a className="text-white font-weight-bold" href="../category/author.html">Jennifer</a></span>
                                                <span className="news-date">Oct 22, 2019</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            
                            <div className="carousel-item">
                                <div className="card border-0 rounded-0 text-light overflow zoom">
                                    <div className="position-relative">
                                     
                                        <div className="ratio_left-cover-1 image-wrapper">
                                            <a href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
                                                <img className="img-fluid w-100"
                                                     src="https://bootstrap.news/source/img4.jpg"
                                                     alt="Bootstrap portal template"/>
                                            </a>
                                        </div>
                                        <div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                          
                                            <a href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
                                                <h2 className="h3 post-title text-white my-1">PRADA</h2>
                                            </a>
                                          
                                            <div className="news-meta">
                                                <span className="news-author">by <a className="text-white font-weight-bold" href="../category/author.html"></a></span>
                                                <span className="news-date"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                       
                    </div>
                    
                  
                    <a className="carousel-control-prev" href="#featured" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#featured" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
             
                
                
                <div className="col-12 col-md-6 pt-2 pl-md-1 mb-3 mb-lg-4">
                    <div className="row">
                      
                        <div className="col-6 pb-1 pt-0 pr-1">
                            <div className="card border-0 rounded-0 text-white overflow zoom">
                                <div className="position-relative">
                                   
                                    <div className="ratio_right-cover-2 image-wrapper">
                                        <a href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
                                            <img className="img-fluid"
                                                 src="https://bootstrap.news/source/img5.jpg"
                                                 alt="simple blog template bootstrap"/>
                                        </a>
                                    </div>
                                    <div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                      
                                        <a className="p-1 badge badge-primary rounded-0" href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">Lifestyle</a>

                                      
                                        <a href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
                                            <h2 className="h5 text-white my-1">Should you see the Fantastic Beasts sequel?</h2>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                       
                        <div className="col-6 pb-1 pl-1 pt-0">
                            <div className="card border-0 rounded-0 text-white overflow zoom">
                                <div className="position-relative">
                                   
                                    <div className="ratio_right-cover-2 image-wrapper">
                                        <a href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
                                            <img className="img-fluid"
                                                 src="https://bootstrap.news/source/img6.jpg"
                                                 alt="bootstrap templates for blog"/>
                                        </a>
                                    </div>
                                    <div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                    
                                        <a className="p-1 badge badge-primary rounded-0" href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">Motocross</a>
                                        
                                        <a href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
                                            <h2 className="h5 text-white my-1">Three myths about Florida elections recount</h2>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                  
                        <div className="col-6 pb-1 pr-1 pt-1">
                            <div className="card border-0 rounded-0 text-white overflow zoom">
                                <div className="position-relative">
                                    
                                    <div className="ratio_right-cover-2 image-wrapper">
                                        <a href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
                                            <img className="img-fluid"
                                                 src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_733,c_limit/bce2325f-f324-4d63-83a9-22c1e9160d19/zapatillas-ropa-y-accesorios-para-mujer.jpg"
                                                 alt="bootstrap blog wordpress theme"/>
                                        </a>
                                    </div>
                                    <div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                      
                                        <a className="p-1 badge badge-primary rounded-0" href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">Fitness</a>
                                      
                                        <a href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
                                            <h2 className="h5 text-white my-1">Finding Empowerment in Two Wheels and a Helmet</h2>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                     
                        <div className="col-6 pb-1 pl-1 pt-1">
                            <div className="card border-0 rounded-0 text-white overflow zoom">
                                <div className="position-relative">
                                  
                                    <div className="ratio_right-cover-2 image-wrapper">
                                        <a href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
                                            <img className="img-fluid"
                                                 src="https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-ES-Site/Library-Sites-LacosteContent/es/dw64e9b150/fw22/homepage/2022-08-03/2B-polo.jpg?imwidth=840&impolicy=custom"
                                                 alt="blog website templates bootstrap"/>
                                        </a>
                                    </div>
                                    <div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                       
                                        <a className="p-1 badge badge-primary rounded-0" href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/"></a>
                                      
                                        <a href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
                                            <h2 className="h5 text-white my-1"> LACOSTE</h2>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                      
                    </div>
                </div>
         
            </section>
            
        </div>
    </div>
  
  );
};

export default Carousel;
