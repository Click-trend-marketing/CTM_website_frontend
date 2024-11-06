import React from 'react';

const Features = () => {
return(
    <>

{/* <!-- Features Start --> */}
<div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                        <h5 className="fw-bold text-primary text-uppercase">Why Choose Us</h5>
                        <h1 className="mb-0">We Fuel Your Business for Exponential Growth</h1>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-4">
                            <div className="row g-5">
                                <div className="col-12 wow zoomIn" data-wow-delay="0.2s">
                                    <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                                        <i className="fa fa-cubes text-white"></i>
                                    </div>
                                    <h4>Best Services</h4>
                                    <p className="mb-0">We offer industry-leading services designed to deliver exceptional results and drive your business forward.</p>
                                </div>
                                <div className="col-12 wow zoomIn" data-wow-delay="0.6s">
                                    <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                                        <i className="fa fa-award text-white"></i>
                                    </div>
                                    <h4>Company Culture</h4>
                                    <p className="mb-0">Our company culture is built on innovation, creativity, and a commitment to deliver excellence in everything we do.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow zoomIn" data-wow-delay="0.9s" style={{ minHeight: '350px' }}>
                            <div className="position-relative h-100">
                                <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.1s"
                                    src="assests/images/feature.jpg" alt="Features" style={{ objectFit: 'cover' }} />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="row g-5">
                                <div className="col-12 wow zoomIn" data-wow-delay="0.4s">
                                    <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                                        <i className="fa fa-users-cog text-white"></i>
                                    </div>
                                    <h4>Professional Staff</h4>
                                    <p className="mb-0">Our experienced team is dedicated to delivering top-tier solutions tailored to your business needs.</p>
                                </div>
                                <div className="col-12 wow zoomIn" data-wow-delay="0.8s">
                                    <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                                        <i className="fa fa-phone-alt text-white"></i>
                                    </div>
                                    <h4>Advanced Technology</h4>
                                    <p className="mb-0">We leverage the latest technologies to provide innovative solutions that drive your business forward.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Features End --> */}
    </>
);
};



export default Features;