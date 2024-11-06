import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            {/* <!-- Footer Start --> */}
            <div className="container-fluid bg-dark text-light mt-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row gx-5">
                        <div className="col-lg-4 col-md-6 footer-about">
                            <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary p-4">
                                <a href="index.html" className="navbar-brand">
                                    <h1 className="m-0">
                                        <img
                                            src="assests/images/CTMlogo.png"
                                            alt="Logo"
                                            className="me-2"
                                            style={{ height: '120px' }}
                                        />
                                    </h1>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-6">
                            <div className="row gx-5">
                                <div className="col-lg-8 col-md-12 pt-5 mb-5">
                                    <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                        <h3 className="text-light mb-0">Get In Touch</h3>
                                    </div>
                                    <div className="d-flex mb-2">
                                        <i className="bi bi-geo-alt text-primary me-2"></i>
                                        <p className="mb-0">Plot No. C-201, 3rd floor, Platina tower, Phase 8B, Sector 74, Mohali</p>
                                    </div>
                                    <div className="d-flex mb-2">
                                        <i className="bi bi-envelope-open text-primary me-2"></i>
                                        <p className="mb-0">support@clicktrendmarketing.com</p>
                                    </div>
                                    <div className="d-flex mb-2">
                                        <i className="bi bi-telephone text-primary me-2"></i>
                                        <p className="mb-0">+91 98154 98660</p>
                                    </div>
                                    <div className="d-flex mt-4">
                                        <a className="btn btn-primary btn-square me-2" href="https://x.com/Clicktrendmkt"><i className="fab fa-twitter fw-normal"></i></a>
                                        <a className="btn btn-primary btn-square me-2" href="https://www.facebook.com/profile.php?id=61567194712017"><i className="fab fa-facebook-f fw-normal"></i></a>
                                        <a className="btn btn-primary btn-square me-2" href="https://www.linkedin.com/company/click-trend-marketing/"><i className="fab fa-linkedin-in fw-normal"></i></a>
                                        <a className="btn btn-primary btn-square" href="https://www.instagram.com/clicktrendmarketing/"><i className="fab fa-instagram fw-normal"></i></a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                                    <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                        <h3 className="text-light mb-0">Quick Links</h3>
                                    </div>
                                    <div className="link-animated d-flex flex-column justify-content-start">
                                        <Link className="text-light mb-2" to="/">
                                            <i className="bi bi-arrow-right text-primary me-2"></i>Home
                                        </Link>
                                        <Link className="text-light mb-2" to="/about">
                                            <i className="bi bi-arrow-right text-primary me-2"></i>About Us
                                        </Link>
                                        <Link className="text-light mb-2" to="/services">
                                            <i className="bi bi-arrow-right text-primary me-2"></i>Our Services
                                        </Link>
                                        <Link className="text-light mb-2" to="/contact">
                                            <i className="bi bi-arrow-right text-primary me-2"></i>Contact Us
                                        </Link>
                                        <Link className="text-light" to="/career">
                                            <i className="bi bi-arrow-right text-primary me-2"></i>Career
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid text-white" style={{ background: '#061429' }}>
                <div className="container text-center">
                    <div className="row justify-content-end">
                        <div className="col-lg-8 col-md-6">
                            <div className="d-flex align-items-center justify-content-center" style={{ height: '75px' }}>
                                <p className="mb-0">&copy; 2024 All Rights Reserved Designed by <a className="text-white border-bottom" href="https://clicktrendmarketing.com">Click Trend Marketing</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Footer End --> */}

            {/* Back to Top */}
            <a
                href="#"
                className="btn btn-lg btn-primary btn-lg-square rounded back-to-top"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                <i className="bi bi-arrow-up"></i>
            </a>
        </>
    )
}

export default Footer;