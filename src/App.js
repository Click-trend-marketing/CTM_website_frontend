// App.js
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Lazy load components
const Header = lazy(() => import('./pages/Header'));
const Navbar = lazy(() => import('./pages/Navbar'));
const Footer = lazy(() => import('./pages/Footer'));
const RoutesConfig = lazy(() => import('./Routes'));
function App() {
    const scrollToSection = (scrollsectionId) => {
        const element = document.getElementById(scrollsectionId); // Get the section by its id
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to the section
        }
      };
    return (
        <div className="App">
            <Router>
                <Suspense
                    fallback={
                        <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                            <div className="spinner"></div>
                        </div>
                    }
                >
                   <div id="scrollsection1">  <Header /></div>
                    <Navbar scrollToSection={scrollToSection} />
                    <RoutesConfig />
                    <Footer /> 
                </Suspense>
            </Router>
        </div>
    );
}

export default App;
