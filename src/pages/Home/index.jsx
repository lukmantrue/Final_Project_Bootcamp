import React from "react";
import Header from '../../templates/Header';
import Body from '../../templates/Body';
import Footer from '../../templates/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from '../../components/Navbar';
import About from '../About';



function Home(){
    return(
        <>
            {/* <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Header/>}/>
                    <Route path="/" element={<Body/>}/>
                    <Route path="/" element={<Footer/>}/>
                    
                    
                    
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </BrowserRouter> */}

            <Header/>
            <Body/>
            <Footer/>
            
        </>
    );
}

export default Home;