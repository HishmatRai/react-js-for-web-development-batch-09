import React from "react";
const Card = ({title,details,children}) => {
    // console.log("clidren", props.children
    // )
    return (
        <div style={{ border: "1px solid red", minHeight: "100px", width: "200px" }}>
            <p>Title:{title}</p>
            <p>Details:{details}</p>
            {children}
        </div>
    )
}
export default Card