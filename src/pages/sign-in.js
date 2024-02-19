import React from "react";
import { Input, Button } from "../components";
class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            message: "",
            messageType: ""
        }
    }
    emailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    signIn = () => {
        this.setState({ messageType: "error" })
        if (this.state.email === "") {
            this.setState({ message: "Email Required!" })
        } else if (!this.state.email.match(this.emailFormat)) {
            this.setState({ message: "Plese enter vaild email address" })
        } else if (this.state.password === "") {
            this.setState({ message: "Password Required!" })
        } else {

            const user = {
                email: this.state.email,
                password: this.state.password
            }
            this.setState({ messageType: "success" })
            this.setState({ message: "Success" })
            console.log("user>>>>>>>>>>>>>", user);

            this.setState({ email: "" })
            this.setState({ password: "" });
            setTimeout(() => {
                this.setState({message:""})
            }, 2000);
        }
    }
    render() {
        
        return (
            <div>
                <h1>Sign In</h1>
                <Input type="email" placeholder="Email Address" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
            <Input type="password" placeholder="Password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
                {/* <input type="email" placeholder="Email Address" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                <input type="password" placeholder="Password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} /> */}
                <p style={{ color: this.state.messageType === "error" ? "red" : "green" }}>{this.state.message}</p>
                {/* <button onClick={this.signIn}>Sign In</button> */}
                <Button title="Sign In" onClick={this.signIn}/>
            </div>
        )
    }
}
export default SignIn