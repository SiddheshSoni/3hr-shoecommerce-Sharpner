import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./Modal.css"
const ModalOverlay =(props)=>{
    return(
        <div className="modalOverlay">
            {props.children}
        </div>
    )
}

const portalElement= document.getElementById('overlay');


const Modal =(props)=>{
    
    return  <Fragment>
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
}

export default Modal;