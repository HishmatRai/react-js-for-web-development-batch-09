import React from "react";
// const Button = (props) => {
//     return (
//         <button onClick={props.onClick}>{props.title}</button>
//     )
// }
class Button extends React.Component{
    render(){
        let {onClick,title} = this.props
        return(
            // <button onClick={this.props.onClick}>{this.props.title}</button>
            <button onClick={onClick}>{title}</button>
        )
    }
}
export default Button