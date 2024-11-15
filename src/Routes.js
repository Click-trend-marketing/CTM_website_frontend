// Routes.js
import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// Lazy load components
const Home = lazy(() => import('./pages/Home'));
const Navbar = lazy(() => import('./pages/Navbar'));
const Facts = lazy(() => import('./pages/Facts'));
const About = lazy(() => import('./pages/About'));
const Features = lazy(() => import('./pages/Features'));
const Services = lazy(() => import('./pages/Services'));
const Quotes = lazy(() => import('./pages/Quotes'));
const Contact = lazy(() => import('./pages/Contact'));
const DigitalMarketing = lazy(() => import('./pages/DigitalMarketing'));
const WebDevelopment = lazy(() => import('./pages/WebDevelopment'));
const AppDevelopment = lazy(() => import('./pages/AppDevelopment'));
const CRM = lazy(() => import('./pages/Crm'));
const Career = lazy(() => import('./pages/Career'));


const RoutesConfig = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/facts" element={<Facts />} />
                <Route path="/features" element={<Features />} />
                <Route path="/services" element={<Services />} />
                <Route path="/quotes" element={<Quotes />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/digitalmarketing" element={<DigitalMarketing />} />
                <Route path="/webdevelopment" element={<WebDevelopment />} />
                <Route path="/appdevelopment" element={<AppDevelopment />} />
                <Route path="/crm" element={<CRM />} />
                <Route path="/career" element={<Career/>} />
            </Routes>
        </Suspense>
    );
};

export default RoutesConfig;
