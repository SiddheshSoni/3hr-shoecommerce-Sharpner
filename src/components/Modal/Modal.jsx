import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css"

const Backdrop=(props)=>{
    return <div onClick={props.onClick} className="backdrop"></div>
}
const Overlay=(props)=>{
    return <div className="overlay">{props.children}</div>
}

const portalElement = document.getElementById("overlay");

const Modal = (props)=>{
    return(
        <>  
            {ReactDOM.createPortal(<Backdrop onClick={props.onClick} />, portalElement )}
            {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, portalElement )}
        </>
    )
}

export default Modal;