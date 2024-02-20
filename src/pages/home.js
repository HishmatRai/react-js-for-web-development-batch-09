import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import Card from "../components/card";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const auth = getAuth();
    const navigate = useNavigate()
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("login true",user)
            } else {
                navigate("/sign-in")
            }
        });
    }, [])


    return (
        <div>
            <Navbar />
            <h1>Home Page</h1>
            <Card />
        </div>
    )
}
export default Home