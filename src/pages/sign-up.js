import React, { useState } from "react";
import { Input, Button } from "../components";
const SignUp = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");

    const emailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const signUp = () => {
        setMessageType("error")
        if (fullName === "") {
            // alert("Full name required!")
            setMessage("Full name required!")
        } else if (email === "") {
            setMessage("Email required!")
        }else if(!email.match(emailFormat)){
            setMessage("Please enter vaild email !")
        } else if (password === "") {
            setMessage("Password required!")
        } else {
            const user = {
                fullName: fullName,
                email: email,
                password: password
            }
            setMessageType("success")
            setMessage("Success")
            console.log("user>>>>", user);

            setFullName("");
            setEmail("");
            setPassword("");
            setTimeout(() => {
                setMessage("")
            }, 2000);
        }
    }
    return (
        <div>
            <h1>Sign Up</h1>
            {/* <Input type="text" placeholder="First Name" bgColor="red"/>
            <Input type="text" placeholder="Last Name" bgColor="green"/>
            <Input type="number" placeholder="Phone Number" bgColor="blue" />
            <Input type="email" placeholder="Email Address" bgColor="gray"/>
            <Input type="password" placeholder="Password" bgColor="yellow"/>
            <Button title="Sign Up"/>
            <Button title="Log In"/> */}
            <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
            <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <p style={{ color: messageType === "error" ? "red" : "green" }}>{message}</p>
            <button onClick={signUp}>Sign Up</button>
            {/* <button onClick={()=>  signUp()}>Sign Up</button> */}
        </div>
    )
}
export default SignUp