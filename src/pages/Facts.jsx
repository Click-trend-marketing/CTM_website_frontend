import React, { useState, useEffect } from 'react';
import axios from 'axios';  // Ensure axios is installed
import apiUrl from '../common';

const Facts = () => {
    const [facts, setFacts] = useState({
        totalClients: 0,
        projectsDone: 0,
    });

    useEffect(() => {
        const fetchFacts = async () => {
            try {
                // Make the API call to fetch facts data
                const response = await axios.get(`${apiUrl}/getUserData`);

                // Check the structure of the response data
                if (response.data && response.data.user) {
                    const userData = response.data.user;
                    // Update the state with the relevant data
                    setFacts({
                        totalClients: userData.totalClients,
                        projectsDone: userData.projectsDone,
                    });
                }
            } catch (error) {
                console.error('Error fetching facts:', error);
            }
        };

        fetchFacts();
    }, []);

    return (
        <>
            {/* Facts Start */}
            <div className="container-fluid facts py-5 pt-lg-0">
                <div className="container py-5 pt-lg-0">
                    <div className="row gx-0">
                        <div className="col-lg-6 wow zoomIn" data-wow-delay="0.1s">
                            <div className="bg-primary shadow d-flex align-items-center justify-content-center p-4"
                                style={{ height: '150px' }}>
                                <div className="bg-white d-flex align-items-center justify-content-center rounded mb-2"
                                    style={{ width: '60px', height: '60px' }}>
                                    <i className="fa fa-users text-primary"></i>
                                </div>
                                <div className="ps-4">
                                    <h5 className="text-white mb-0">Happy Clients</h5>
                                    <h1 className="text-white mb-0">{facts.totalClients}+</h1> {/* Display totalClients */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow zoomIn" data-wow-delay="0.3s">
                            <div className="bg-light shadow d-flex align-items-center justify-content-center p-4"
                                style={{ height: '150px' }}>
                                <div className="bg-primary d-flex align-items-center justify-content-center rounded mb-2"
                                    style={{ width: '60px', height: '60px' }}>
                                    <i className="fa fa-check text-white"></i>
                                </div>
                                <div className="ps-4">
                                    <h5 className="text-primary mb-0">Projects Done</h5>
                                    <h1 className="mb-0">{facts.projectsDone}+</h1> {/* Display projectsDone */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Facts End */}
        </>
    );
};

export default Facts;
