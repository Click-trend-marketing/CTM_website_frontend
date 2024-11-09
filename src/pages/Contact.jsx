import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import apiUrl from '../common';



const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post(`${apiUrl}/form/create`, formData);
            toast.success(response.data.message || 'Form submitted successfully!');
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            });
        } catch (error) {
            toast.error(error.response?.data?.message || 'Error submitting form. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                        <h5 className="fw-bold text-primary text-uppercase">Contact Us</h5>
                        <h1 className="mb-0">If You Have Any Query, Feel Free To Contact Us</h1>
                    </div>
                    <div className="row g-5 mb-5">
                        {/* Contact details code */}
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-6 wow slideInUp" data-wow-delay="0.3s">
                            <form onSubmit={handleSubmit}>
                                <div className="row g-3">
                                    {/* Input fields */}
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="form-control border-0 bg-light px-4"
                                            placeholder="Your Name"
                                            style={{ height: '55px' }}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="form-control border-0 bg-light px-4"
                                            placeholder="Your Email"
                                            style={{ height: '55px' }}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="form-control border-0 bg-light px-4"
                                            placeholder="Subject"
                                            style={{ height: '55px' }}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="form-control border-0 bg-light px-4 py-3"
                                            rows="4"
                                            placeholder="Message"
                                        ></textarea>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit" disabled={loading}>
                                            {loading ? (
                                                <span className="text-white">
                                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                    Loading...
                                                </span>
                                            ) : (
                                                "Send Message"
                                            )}
                                        </button>
                                    </div>

                                </div>
                            </form>
                        </div>
                        <div className="col-lg-6 wow slideInUp" data-wow-delay="0.6s">
                            <iframe
                                className="position-relative rounded w-100 h-100"
                                src="https://maps.google.com/maps?q=30.702530,76.692123&hl=es;z=14&amp;output=embed"
                                frameBorder="0"
                                style={{ minHeight: '350px', border: 0 }}
                                allowFullScreen
                                aria-hidden="false"
                                tabIndex="0"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};



export default Contact;
