import React from "react";
import { Input ,Button} from "../components";
const SignUp = () => {
    return (
        <div>
            <h1>Sign Up</h1>
            <Input type="text" placeholder="First Name" bgColor="red"/>
            <Input type="text" placeholder="Last Name" bgColor="green"/>
            <Input type="number" placeholder="Phone Number" bgColor="blue" />
            <Input type="email" placeholder="Email Address" bgColor="gray"/>
            <Input type="password" placeholder="Password" bgColor="yellow"/>
            <Button title="Sign Up"/>
            <Button title="Log In"/>

        </div>
    )
}
export default SignUp