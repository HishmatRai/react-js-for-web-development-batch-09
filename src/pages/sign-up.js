import React, { useState } from "react";
import { Input, Button } from "../components";
import firebase from "../config/firebase";
import { useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const SignUp = () => {
    const auth = getAuth();
    const navigate = useNavigate()
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");
    const [loading, setLoading] = useState(false)
    const emailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const signUp = () => {
        setMessageType("error");
        setLoading(true)
        if (fullName === "") {
            // alert("Full name required!")
            setMessage("Full name required!");
            setLoading(false)
        } else if (email === "") {
            setMessage("Email required!")
            setLoading(false)
        } else if (!email.match(emailFormat)) {
            setMessage("Please enter vaild email !")
            setLoading(false)
        } else if (password === "") {
            setMessage("Password required!")
            setLoading(false)
        } else {
            const user = {
                fullName: fullName,
                email: email,
                password: password
            }
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    setMessageType("success")
                    setMessage("Success")
                    console.log("user>>>>", user);
                    setFullName("");
                    setEmail("");
                    setPassword("");
                    setLoading(false)
                    setTimeout(() => {
                        setMessage("");
                        navigate("/")
                    }, 2000);
                })
                .catch((error) => {
                    console.log("error>>>>>>>", error);
                    setLoading(false)
                });



        }
    }
    return (
        <div>
            <h1>Sign Up</h1>
            <Input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
            <Input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {/* <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
            <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /> */}
            <p style={{ color: messageType === "error" ? "red" : "green" }}>{message}</p>
            {/* <button onClick={signUp}>Sign Up</button> */}
            <Button title="Sign Up" loading={loading} onClick={signUp} />
            {/* <button onClick={()=>  signUp()}>Sign Up</button> */}
        </div>
    )
}
export default SignUp