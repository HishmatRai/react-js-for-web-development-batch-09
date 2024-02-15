import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from "../../pages/home";
// import About from "../../pages/about";
// import Contact from "../../pages/contact";
// import SignUp from "../../pages/sign-up";
import {Home, About, Contact, SignUp } from './../../pages'
 const RouterNavigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/contact-us" element={<Contact />} />
                <Route path="/sign-up" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    )
}
export default RouterNavigation