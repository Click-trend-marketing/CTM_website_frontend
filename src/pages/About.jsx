import React from 'react';

const About = () => {
    return (
        <>

            {/* <!-- About Start --> */}
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-7">
                            <div className="section-title position-relative pb-3 mb-5">
                                <h5 className="fw-bold text-primary text-uppercase">About Us</h5>
                                <h1 className="mb-0">Trusted Partner for Comprehensive Marketing and IT Services</h1>
                            </div>
                            <p className="mb-4">
                                At <b>Click Trend Marketing</b>, as your trusted partner, we offer end-to-end marketing solutions and cutting-edge IT services designed to drive growth and efficiency. From strategic marketing campaigns to innovative tech solutions, we help elevate your business to the next level.
                            </p>

                            <h3>Our services include:</h3>
                            <p className="mb-0">✅ Digital Marketing Strategy</p>
                            <p className="mb-0">✅ SEO & SEM</p>
                            <p className="mb-0">✅ Social Media Marketing</p>
                            <p className="mb-0">✅ Web Development & Design</p>
                            <p className="mb-0">✅ App Development</p>
                            <p className="mb-0">✅ Content Writing</p>
                            <p className="mb-2">✅ Branding & Analytics</p>
                            <p className="mb-0"><b>Slogan:</b> "Here, every click leads to growth."</p>

                            <p>
                                We believe in the power of trends and clicks to transform businesses, and we’re passionate about delivering results. Now it’s your turn to click and get the growth you deserve. Let’s elevate your brand and make it stand out in the digital landscape.
                            </p>

                            {/* Uncomment below line to add the Request A Quote button */}
                            {/* <a href="quote.html" className="btn btn-primary py-3 px-5 mt-3 wow zoomIn" data-wow-delay="0.9s">Request A Quote</a> */}
                        </div>
                        <div className="col-lg-5" style={{ minHeight: '500px' }}>
                            <div className="position-relative h-100">
                                <img
                                    className="position-absolute w-100 h-100 rounded wow zoomIn"
                                    data-wow-delay="0.9s"
                                    src="assests/images/about.jpg"
                                    alt="About Us"
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About End --> */}
        </>
    );
};
export default About;