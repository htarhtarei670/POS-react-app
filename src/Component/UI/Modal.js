import { Fragment } from "react"
import classes from "./Modal.module.css"
import ReactDOM from 'react-dom'

const BackDrop=(props)=>{
    return <div className={classes.backdrop} onClick={props.onHide}></div>
}

const OverLay=(props)=>{
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
     )
}

const Modal=(props)=>{
    const modalRenderPosition=document.getElementById("modal");
    return (
        <Fragment>
            {ReactDOM.createPortal(<BackDrop onHide={props.onHiden}/>,modalRenderPosition)}
            {ReactDOM.createPortal(<OverLay>{props.children}</OverLay>,modalRenderPosition)}
        </Fragment>
    )
}
export default Modal;