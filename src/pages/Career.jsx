import React from 'react';

const Careers = () => {
    return (
        <>
            {/* <!-- Careers Start --> */}
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-7">
                            <div className="section-title position-relative pb-3 mb-5">
                                <h5 className="fw-bold text-primary text-uppercase">Careers</h5>
                                <h1 className="mb-0">Be Part of Our Journey to Revolutionize Marketing & IT Solutions</h1>
                            </div>
                            <p className="mb-4">
                                At <b>Click Trend Marketing</b>, we’re not just building solutions; we’re crafting experiences that help our clients thrive in a dynamic digital landscape. We believe that success is achieved through innovation, passion, and collaboration. Our team comprises creative thinkers, tech enthusiasts, and marketing experts who are dedicated to helping businesses grow and succeed.
                            </p>
                            <p className="mb-4">
                                We offer a supportive and engaging work environment, where your ideas matter, your growth is a priority, and your career has endless potential. Check out our open positions below, and if you’re ready to bring your expertise and energy to our team, we encourage you to apply.
                            </p>

                            <h3>Open Positions:</h3>

                            {/* Digital Marketing Specialist */}
                            <div className="position mb-4">
                                <h4><b>Digital Marketing Specialist</b> - Full-Time</h4>
                                <p>
                                    We’re looking for a Digital Marketing Specialist with a strong background in digital campaign strategy, social media management, and analytics. The ideal candidate will have a passion for identifying trends, understanding customer behavior, and optimizing strategies to deliver results. If you’re skilled in SEO, SEM, and have a knack for creating impactful marketing messages, this role is for you.
                                </p>
                                <ul>
                                    <li>Develop, execute, and optimize digital marketing campaigns across multiple platforms</li>
                                    <li>Analyze data and create actionable insights to improve ROI</li>
                                    <li>Collaborate with our creative and content teams to produce engaging marketing materials</li>
                                    <li>Requirements: Bachelor’s in Marketing, 3+ years in digital marketing</li>
                                </ul>
                            </div>

                            {/* SEO Expert */}
                            <div className="position mb-4">
                                <h4><b>SEO Expert</b> - Full-Time</h4>
                                <p>
                                    As our SEO Expert, you’ll drive our clients’ search visibility through strategic SEO techniques. This role involves deep keyword research, on-page and off-page SEO, link building, and keeping up with Google’s latest algorithm changes. You’ll work closely with our content and development teams to optimize every aspect of our clients’ online presence.
                                </p>
                                <ul>
                                    <li>Perform keyword research and implement SEO strategies</li>
                                    <li>Optimize website structure, content, and design for search engines</li>
                                    <li>Monitor SEO performance and provide insights and adjustments</li>
                                    <li>Requirements: Bachelor’s in Digital Marketing or similar, 3+ years in SEO</li>
                                </ul>
                            </div>

                            {/* Frontend Developer */}
                            <div className="position mb-4">
                                <h4><b>Frontend Developer</b> - Full-Time</h4>
                                <p>
                                    We’re looking for a Frontend Developer with expertise in React, HTML, CSS, and JavaScript to bring innovative designs to life. As a part of our development team, you’ll work closely with designers and backend developers to create user-friendly, responsive websites and applications.
                                </p>
                                <ul>
                                    <li>Develop and maintain responsive, dynamic web applications</li>
                                    <li>Collaborate with UX/UI designers to ensure seamless user experiences</li>
                                    <li>Optimize applications for maximum speed and scalability</li>
                                    <li>Requirements: Bachelor’s in Computer Science, 2+ years with frontend frameworks (React preferred)</li>
                                </ul>
                            </div>

                            {/* Content Writer */}
                            <div className="position mb-4">
                                <h4><b>Content Writer</b> - Part-Time</h4>
                                <p>
                                    We’re seeking a creative Content Writer with a flair for storytelling and an understanding of digital marketing. In this role, you’ll develop engaging content that aligns with our clients’ goals and helps elevate their brand voice. This position is perfect for a writer with experience in blog writing, social media content, and copywriting for web.
                                </p>
                                <ul>
                                    <li>Create compelling content for blogs, social media, and websites</li>
                                    <li>Research industry trends to inform content creation</li>
                                    <li>Collaborate with our marketing team to ensure content consistency</li>
                                    <li>Requirements: Bachelor’s in English, Marketing, or related field, 1+ year of content creation experience</li>
                                </ul>
                            </div>

                            <p className="mb-0"><b>Slogan:</b> "Your career growth begins with a single click."</p>
                            <p>
                                <b>Ready to apply?</b> If you’re excited about joining our team, we’d love to hear from you. Send your resume and cover letter to <a href="mailto:careers@clicktrendmarketing.com">careers@clicktrendmarketing.com</a> and take the first step toward an exciting career with Click Trend Marketing.
                            </p>
                        </div>
                        <div className="col-lg-5" style={{ minHeight: '500px' }}>
                            <div className="position-relative h-100">
                                <img
                                    className="position-absolute w-100 h-100 rounded wow zoomIn"
                                    data-wow-delay="0.9s"
                                    src="assets/images/careers.jpg"
                                    alt="Careers"
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Careers End --> */}
        </>
    );
};

export default Careers;
