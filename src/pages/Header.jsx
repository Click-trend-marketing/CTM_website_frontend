import React from 'react';

const Header = () => {
return(
    <>
            {/* <!-- Topbar Start --> */}
            <div className="container-fluid bg-dark px-5 d-none d-lg-block">
                <div className="row gx-0">
                    <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                        <div className="d-inline-flex align-items-center" style={{ height: '45px' }}>
                            {/* <!-- <small className="me-3 text-light"><i className="fa fa-map-marker-alt me-2"></i>123 Street, New York, USA</small> --> */}
                            <small className="me-3 text-light"><i className="fa fa-phone-alt me-2"></i>+91 98154 98660</small>
                            <small className="text-light"><i className="fa fa-envelope-open me-2"></i>support@clicktrendmarketing.com</small>
                        </div>
                    </div>
                    <div className="col-lg-4 text-center text-lg-end">
                        <div className="d-inline-flex align-items-center" style={{ height: '45px' }}>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="https://x.com/Clicktrendmkt"><i className="fab fa-twitter fw-normal"></i></a>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="https://www.facebook.com/profile.php?id=61567194712017"><i className="fab fa-facebook-f fw-normal"></i></a>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="https://www.linkedin.com/company/click-trend-marketing/"><i className="fab fa-linkedin-in fw-normal"></i></a>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="https://www.instagram.com/clicktrendmarketing/"><i className="fab fa-instagram fw-normal"></i></a>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href="https://www.youtube.com/channel/UCkrs184wHv533tiFKF9vIiA"><i className="fab fa-youtube fw-normal"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Topbar End --> */}

    </>
);
};

export default Header;