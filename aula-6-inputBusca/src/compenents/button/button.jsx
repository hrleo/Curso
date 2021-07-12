import { Component } from "react";
import './buttonstyle.css'

export class Button extends Component{
    render(){
        const {text,  onClick, disable } =  this.props
    return(
        <button className='button' disabled={disable} onClick={onClick}>
            {text}
        </button>
    )
}
}