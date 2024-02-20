import React from "react";
// const Button = (props) => {
//     return (
//         <button onClick={props.onClick}>{props.title}</button>
//     )
// }
import CircularProgress from '@mui/material/CircularProgress';
class Button extends React.Component{
    render(){
        let {onClick,title,loading} = this.props
        return(
            // <button onClick={this.props.onClick}>{this.props.title}</button>
            // <button onClick={onClick}>{loading ? "Loding ....":title}</button>
            <button onClick={onClick}>{loading ? <CircularProgress size={10}/>:title}</button>
        )
    }
}
export default Button