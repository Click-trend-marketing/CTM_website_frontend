// Home.js
import React from 'react';
import Facts from './Facts';
import About from './About';
import Features from './Features';
import Services from './Services';
import Quotes from './Quotes';
import Careers from './Career';
const Home = () => {
   
    return (
        <>
            <Facts />    
            <div id="scrollsection2"><About /> </div>  
            <Features />  
            <div id="scrollsection3"><Services /> </div>
            <div id="scrollsection5"><Careers /> </div>
                     <div id="scrollsection4"><Quotes /> </div>
        </>
    );
};

export default Home;
