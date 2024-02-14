import React from "react";
const Navbar = () => {
    return (
        <div style={{ border: "1px solid red", color: "white" }}>
            <a href="/">Home</a>
            <a href="/about-us">About</a>
            <a href="/contact-us">Contact</a>
            <hr />
            <button onClick={() => window.location.assign("/")}>Home</button>
            <button onClick={()=> window.location.assign("/about-us")}>About</button>
            <button onClick={()=> window.location.assign("/contact-us")}>Contact</button>
        </div>
    )
}
export default Navbar