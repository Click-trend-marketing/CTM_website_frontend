import React from 'react';

const Service = () => {
return(
    <>
 {/* <!-- Service Start --> */}
 <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                        <h5 className="fw-bold text-primary text-uppercase">Our Services</h5>
                        <h1 className="mb-0">Custom Solutions for Your Successful Business</h1>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                                <div className="service-icon">
                                    <i className="fa fa-shield-alt text-white"></i>
                                </div>
                                <h4 className="mb-3">Digital Marketing</h4>
                                <p className="m-0">Our digital marketing strategies are designed to boost your online presence and drive measurable growth.</p>
                                <a className="btn btn-lg btn-primary rounded" href="">
                                    <i className="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                                <div className="service-icon">
                                    <i className="fa fa-chart-pie text-white"></i>
                                </div>
                                <h4 className="mb-3">CRM</h4>
                                <p className="m-0">Our custom CRM solutions help streamline your customer interactions, enhance relationships, and drive business efficiency.</p>
                                <a className="btn btn-lg btn-primary rounded" href="">
                                    <i className="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
                            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                                <div className="service-icon">
                                    <i className="fa fa-code text-white"></i>
                                </div>
                                <h4 className="mb-3">Web Development</h4>
                                <p className="m-0">We create responsive, high-performance websites that deliver exceptional user experiences and drive business results.</p>
                                <a className="btn btn-lg btn-primary rounded" href="">
                                    <i className="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                                <div className="service-icon">
                                    <i className="fab fa-android text-white"></i>
                                </div>
                                <h4 className="mb-3">App Development</h4>
                                <p className="m-0">Our App development services deliver innovative, user-friendly mobile apps that enhance engagement and drive business growth.</p>
                                <a className="btn btn-lg btn-primary rounded" href="">
                                    <i className="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                                <div className="service-icon">
                                    <i className="fa fa-search text-white"></i>
                                </div>
                                <h4 className="mb-3">SEO Optimization</h4>
                                <p className="m-0">Our SEO strategies are designed to improve your search rankings, increase organic traffic, and boost your online visibility.</p>
                                <a className="btn btn-lg btn-primary rounded" href="">
                                    <i className="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
                            <div className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
                                <h4 className="text-white mb-3">Get in Touch with Us</h4>
                                <p className="text-white mb-3">Whether you're a potential client seeking innovative solutions or a candidate looking to join our dynamic team, we want to hear from you</p>
                                <h4 className="text-white mb-0">+91 98154 98660</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Service End --> */}

    </>
);
};



export default Service;