import React from "react";
import { Link, useNavigate } from 'react-router-dom'
const Navbar = () => {
    let navigate = useNavigate()
    return (
        <div style={{ border: "1px solid red", color: "white" }}>
            {/* <a href="/">Home</a>
            <a href="/about-us">About</a>
            <a href="/contact-us">Contact</a>
            <hr />
            <hr />
            <button onClick={() => window.location.assign("/")}>Home</button>
            <button onClick={() => window.location.assign("/about-us")}>About</button>
            <button onClick={() => window.location.assign("/contact-us")}>Contact</button> <hr />
            <hr />
            <Link to="/">Home</Link>
            <Link to="/about-us">About</Link>
            <Link to="/contact-us">Contact</Link>
            <hr />
            <hr /> */}
            <button onClick={() => navigate("/")}>Home</button>
            <button onClick={() => navigate("/about-us")}>About</button>
            <button onClick={() => navigate("/contact-us")}>Contact</button>
            <button onClick={()=> navigate("/sign-up")}>Sign Up</button>
            <button onClick={()=> navigate("/sign-in")}>Sign In</button>
        </div>
    )
}
export default Navbar