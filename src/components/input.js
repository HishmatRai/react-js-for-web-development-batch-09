import React from "react";
// const Input = (props) => {
    const Input = ({type,placeholder,value,onChange}) => {
    // console.log("input props", props)
    return (
        // <input
        //     type={props.type}
        //     placeholder={props.placeholder}
        //     value={props.value}
        //     onChange={props.onChange}
        // />
        <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
    />
    )
}
export default Input

