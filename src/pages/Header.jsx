import React, { useState, useEffect } from 'react';
import axios from 'axios';
import apiUrl from '../common';

const Header = () => {
    const [contactInfo, setContactInfo] = useState({
        phone: '',
        email: '',
    });
    const [loading, setLoading] = useState(true);  // Loading state
    const [error, setError] = useState(null);  // Error state

    useEffect(() => {
        const fetchContactInfo = async () => {
            try {
                // Make the API call to fetch contact data
                const response = await axios.get(`${apiUrl}/getUserData`);
                if (response.data && response.data.user) {
                    const { phone, adminUpdatedEmail: email } = response.data.user;
                    setContactInfo({ phone, email });
                } else {
                    throw new Error("User data not found");
                }
            } catch (error) {
                console.error('Error fetching contact info:', error);
                setError("Failed to load contact info. Please try again later.");
            } finally {
                setLoading(false);  // Set loading to false once the data has been fetched
            }
        };

        fetchContactInfo();
    }, []);  // Only runs once when component is mounted

    // Loading and error handling
    if (loading) {
        return (
            <div className="container text-center text-light">
                <p>Loading...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container text-center text-light">
                <p>{error}</p>
            </div>
        );
    }

    return (
        <>
            {/* <!-- Topbar Start --> */}
            <div className="container-fluid bg-dark px-5 d-none d-lg-block">
                <div className="row gx-0">
                    <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                        <div className="d-inline-flex align-items-center" style={{ height: '45px' }}>
                            <small className="me-3 text-light">
                                <i className="fa fa-phone-alt me-2"></i>
                                {contactInfo.phone}
                            </small>
                            <small className="text-light">
                                <i className="fa fa-envelope-open me-2"></i>
                                {contactInfo.email}
                            </small>
                        </div>
                    </div>
                    <div className="col-lg-4 text-center text-lg-end">
                        <div className="d-inline-flex align-items-center" style={{ height: '45px' }}>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="https://x.com/Clicktrendmkt">
                                <i className="fab fa-twitter fw-normal"></i>
                            </a>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="https://www.facebook.com/profile.php?id=61567194712017">
                                <i className="fab fa-facebook-f fw-normal"></i>
                            </a>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="https://www.linkedin.com/company/click-trend-marketing/">
                                <i className="fab fa-linkedin-in fw-normal"></i>
                            </a>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="https://www.instagram.com/clicktrendmarketing/">
                                <i className="fab fa-instagram fw-normal"></i>
                            </a>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href="https://www.youtube.com/channel/UCkrs184wHv533tiFKF9vIiA">
                                <i className="fab fa-youtube fw-normal"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Topbar End --> */}
        </>
    );
};

export default Header;
