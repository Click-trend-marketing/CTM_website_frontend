import React, { useState, useEffect } from 'react';
import axios from 'axios';
import apiUrl from '../common';
import Modal from 'react-modal';
import 'font-awesome/css/font-awesome.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Careers = () => {
    // State to hold job openings data
    const [jobOpenings, setJobOpenings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);

    // Fetch job data from the backend API
    useEffect(() => {
        Modal.setAppElement('#root');  // Set app element for accessibility
        axios.get(`${apiUrl}/getCareerData`)
            .then(response => {
                if (response.data && response.data.career) {
                    setJobOpenings(response.data.career);
                } else {
                    setError('No career data available.');
                }
                setLoading(false);
            })
            .catch(err => {
                setError(err.message || 'Failed to fetch job data');
                setLoading(false);
            });
    }, []);

    // Open modal when "Apply Now" button is clicked
    const openModal = (job) => {
        setSelectedJob(job);
        setModalIsOpen(true);
    };

    // Close modal when user clicks outside or on the close button
    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedJob(null);
    };

    // Handle dynamic form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('jobId', selectedJob._id);
        formData.append('name', e.target.name.value);
        formData.append('email', e.target.email.value);
        formData.append('resume', e.target.resume.files[0]);

        try {
            const response = await axios.post(`${apiUrl}/applyForJob`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            // Show success toast
            toast.success(response.data.message || 'Application submitted successfully!');
            closeModal();
        } catch (err) {
            console.error(err);
            // Show error toast
            toast.error(err.response?.data?.message || 'Failed to submit the application.');
        }
    };

    // Render loading, error or job openings
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <div className="career-section container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col">
                            <div className="section-title career-content position-relative pb-3 mb-5">
                                <h5 className="fw-bold text-primary text-uppercase">Join Our Team</h5>
                                <h1 className="mb-0">Be part of a dynamic and innovative team driving results.</h1>
                            </div>
                            <p className="mb-4">
                                At <b>Click Trend Marketing</b>, we're more than just a company – we're a community of
                                passionate, driven individuals working towards a common goal. We believe in the power of collaboration,
                                innovation, and continuous growth. If you're looking for an environment where your ideas are
                                valued, your skills are nurtured, and your career can thrive, you’ve come to the right place.
                            </p>

                            <h5 className="fw-bold text-primary text-uppercase">Why Work at Click Trend Marketing?</h5>
                            <p className="mb-4">
                                We offer more than just a job – we offer the opportunity to make a difference. As part of our team,
                                you’ll have the chance to work on exciting projects, grow your skills, and contribute to a positive
                                work culture where everyone is supported. We foster an environment where creativity and initiative
                                are celebrated, and where your voice is heard.
                            </p>

                            <h5 className="fw-bold text-primary text-uppercase">Who Are We Looking For?</h5>
                            <p className="mb-4">
                                We’re always on the lookout for talented and passionate individuals who share our vision and are
                                ready to bring their expertise to the table. Whether you're an experienced professional or just
                                starting your career, we believe in creating a place for everyone to excel. From tech wizards to
                                marketing experts, sales professionals to creative minds – we want you to join our diverse team and
                                help us achieve great things together.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Job Openings Section */}
            <div className="container my-8">
                <h2 className="text-center mb-5">Current Job Openings</h2>
                <div className="row gy-4 justify-content-center">
                    {/* Dynamically generate job cards */}
                    {jobOpenings.map((job) => (
                        <div key={job._id} className="col-lg-4 col-md-6 col-sm-6 d-flex justify-content-center">
                            <div className="job-card p-5 border shadow-lg w-100 d-flex flex-column align-items-start">
                                <h4 className="job-title text-primary mb-4">{job.position.charAt(0).toUpperCase() + job.position.slice(1)}</h4>
                                <div className="job-details mb-4">
                                    <p className="text-muted mb-2"><strong>Experience:</strong> {job.experience}</p>
                                    <p className="text-muted mb-2"><strong>Location:</strong> {job.location.charAt(0).toUpperCase() + job.location.slice(1)}</p>
                                    <p className="text-muted mb-2">
                                        <strong>Requirements:</strong> {job.requirements.join(', ')}
                                    </p>
                                </div>
                                <button onClick={() => openModal(job)} className="btn btn-primary w-100 mt-auto">Apply Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal for job application */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Job Application"
                className="modal-content"
                overlayClassName="modal-overlay"
                style={{
                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 9999,
                    },
                    content: {
                        position: 'relative',
                        backgroundColor: '#fff',
                        padding: '30px',
                        maxWidth: '600px',
                        width: '100%',
                        borderRadius: '10px',
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                        zIndex: 10000,
                    }
                }}
            >
                {/* Cross icon to close modal */}
                <button onClick={closeModal} className="close-btn" style={{ position: 'absolute', top: '10px', right: '10px', background: 'transparent', border: 'none', fontSize: '24px', cursor: 'pointer' }}>
                    <i className="fa fa-times"></i>
                </button>

                <h2 className="text-center mb-4">Apply for {selectedJob?.position}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="name" name="name" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input type="email" className="form-control" id="email" name="email" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="resume" className="form-label">Upload Resume</label>
                        <input type="file" className="form-control" id="resume" name="resume" required />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Submit Application</button>
                </form>
            </Modal>

            {/* Toast Container for displaying toast messages */}
            <ToastContainer />
        </>
    );
};

export default Careers;
