import React from "react";
const Input = (props) => {
    console.log("input props", props)
    return (
        <input 
        type={props.type}
         placeholder={props.placeholder}
          style={{ backgroundColor: props.bgColor }}
           />
    )
}
export default Input